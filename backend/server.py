from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import time
import uuid
import ipaddress
import logging
import httpx
from pathlib import Path
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)

RESEND_API_URL = "https://api.resend.com/emails"
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.environ.get("RESEND_FROM_EMAIL")
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO")
OWNER_EMAIL = os.environ["OWNER_EMAIL"]

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: str | None = None) -> str | None:
    _assert_safe_email(subject, html)
    if not RESEND_API_KEY or not RESEND_FROM_EMAIL:
        logger.error("Resend is not configured: RESEND_API_KEY and RESEND_FROM_EMAIL are required")
        raise HTTPException(status_code=503, detail="Email service is not configured")

    payload = {"from": RESEND_FROM_EMAIL, "to": [to], "subject": subject, "html": html}
    if reply_to or EMAIL_REPLY_TO:
        payload["reply_to"] = reply_to or EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as client_http:
            resp = await client_http.post(
                RESEND_API_URL,
                headers={"Authorization": f"Bearer {RESEND_API_KEY}"},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        logger.error("Resend email request failed with status %s", e.response.status_code)
        raise HTTPException(status_code=502, detail="Failed to send email")
    except HTTPException:
        raise
    except httpx.RequestError as e:
        logger.error("Could not reach Resend: %s", str(e))
        raise HTTPException(status_code=502, detail="Failed to send email")
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email")


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    inquiry_type: str = Field(default="General", max_length=60)
    subject: str = Field(min_length=1, max_length=200)
    message: str = Field(min_length=1, max_length=4000)


_rate: dict[str, list[float]] = {}


def _throttle(ip: str) -> None:
    now = time.time()
    window = _rate.setdefault(ip, [])
    window[:] = [t for t in window if now - t < 3600]
    if len(window) >= 5:
        raise HTTPException(status_code=429, detail="Too many messages. Please try again later.")
    window.append(now)


@api_router.get("/")
async def root():
    return {"message": "Pravin Salla Portfolio API", "status": "ok"}


@api_router.post("/contact")
async def submit_contact(input: ContactMessage, request: Request):
    _throttle(request.client.host if request.client else "unknown")
    doc = {
        "id": str(uuid.uuid4()),
        **input.model_dump(),
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
    await db.contact_messages.insert_one(doc)

    subject = f"Portfolio inquiry [{escape(input.inquiry_type)}] from {escape(input.name)}"
    html = (
        '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">'
        '<tr><td style="padding:24px;font-family:Arial,sans-serif;color:#111">'
        f'<h2 style="margin:0 0 16px">New portfolio inquiry</h2>'
        f'<p><strong>Name:</strong> {escape(input.name)}</p>'
        f'<p><strong>Email:</strong> {escape(input.email)}</p>'
        f'<p><strong>Inquiry type:</strong> {escape(input.inquiry_type)}</p>'
        f'<p><strong>Subject:</strong> {escape(input.subject)}</p>'
        f'<p><strong>Message:</strong></p>'
        f'<p style="white-space:pre-wrap">{escape(input.message)}</p>'
        f'<hr style="border:none;border-top:1px solid #ddd;margin:20px 0">'
        f'<p style="font-size:12px;color:#888">Sent via the contact form on the '
        f'{escape(EMAIL_FROM_NAME)} website. We never ask for passwords or card details by email.</p>'
        '</td></tr></table>'
    )
    email_sent = True
    try:
        await send_email(to=OWNER_EMAIL, subject=subject, html=html, reply_to=str(input.email))
    except HTTPException:
        email_sent = False
        logger.error("Contact message stored but email notification failed")

    return {"status": "success", "id": doc["id"], "email_sent": email_sent}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
