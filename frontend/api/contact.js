const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

const emailTemplate = ({ name, email, inquiryType, subject, message }) => {
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    inquiryType: escapeHtml(inquiryType),
    subject: escapeHtml(subject),
    message: escapeHtml(message),
  };

  return `
    <div style="margin:0;background:#f2f5f7;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#14232d">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #dce4e8">
        <div style="padding:24px 32px;background:#10232d;border-bottom:4px solid #27c8d8">
          <div style="font-size:12px;letter-spacing:3px;color:#b8cbd2">PRAVIN SALLA</div>
          <div style="margin-top:8px;font-size:11px;letter-spacing:2px;color:#27c8d8">ENGINEERING PORTFOLIO</div>
        </div>
        <div style="padding:32px">
          <div style="font-size:11px;font-weight:bold;letter-spacing:2px;color:#168b9a">NEW INQUIRY · ${safe.inquiryType}</div>
          <h1 style="margin:12px 0 24px;font-size:25px;line-height:1.3;color:#14232d">${safe.subject}</h1>
          <table role="presentation" style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5ecef;font-size:12px;color:#71818a;width:110px">FROM</td><td style="padding:10px 0;border-bottom:1px solid #e5ecef;font-size:14px">${safe.name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5ecef;font-size:12px;color:#71818a">EMAIL</td><td style="padding:10px 0;border-bottom:1px solid #e5ecef;font-size:14px"><a href="mailto:${safe.email}" style="color:#087e8b;text-decoration:none">${safe.email}</a></td></tr>
          </table>
          <div style="font-size:11px;font-weight:bold;letter-spacing:2px;color:#71818a">MESSAGE</div>
          <div style="margin-top:10px;padding:18px;background:#f5f8f9;border-left:3px solid #27c8d8;font-size:15px;line-height:1.7;white-space:pre-wrap">${safe.message}</div>
          <p style="margin:28px 0 0;font-size:13px;color:#71818a">Reply directly to this email to reach ${safe.name}.</p>
        </div>
        <div style="padding:16px 32px;border-top:1px solid #e5ecef;font-size:11px;color:#8a989f">Sent from the contact form on pravinsalla.com</div>
      </div>
    </div>
  `;
};

const textTemplate = ({ name, email, inquiryType, subject, message }) =>
  `New portfolio inquiry: ${inquiryType}\n\nSubject: ${subject}\nFrom: ${name} <${email}>\n\n${message}`;

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, inquiry_type: inquiryType = "General", subject, message, website = "" } = req.body || {};

  if (website) return res.status(200).json({ ok: true });

  if (
    typeof name !== "string" || name.trim().length < 1 || name.length > 120 ||
    typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof inquiryType !== "string" || inquiryType.length > 60 ||
    typeof subject !== "string" || subject.trim().length < 1 || subject.length > 200 ||
    typeof message !== "string" || message.trim().length < 1 || message.length > 4000
  ) {
    return res.status(400).json({ error: "Please check the form fields and try again." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Contact email is not configured: set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_TO_EMAIL.");
    return res.status(503).json({ error: "Email is temporarily unavailable. Please email me directly." });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email.trim(),
      subject: `Portfolio inquiry [${inquiryType.trim()}] from ${name.trim()}`,
      html: emailTemplate({
        name: name.trim(),
        email: email.trim(),
        inquiryType: inquiryType.trim(),
        subject: subject.trim(),
        message: message.trim(),
      }),
      text: textTemplate({
        name: name.trim(),
        email: email.trim(),
        inquiryType: inquiryType.trim(),
        subject: subject.trim(),
        message: message.trim(),
      }),
    });

    if (result.error) {
      console.error("Resend rejected contact email:", result.error.message);
      return res.status(502).json({ error: "Could not send your message. Please email me directly." });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact email request failed:", error.message);
    return res.status(502).json({ error: "Could not send your message. Please email me directly." });
  }
}