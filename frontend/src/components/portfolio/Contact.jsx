import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Loader2, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import { PROFILE, INQUIRY_TYPES } from "@/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CONTACT_ROWS = [
  { icon: Mail, label: "EMAIL", value: PROFILE.email, href: `mailto:${PROFILE.email}`, testid: "contact-info-email" },
  { icon: Phone, label: "PHONE", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`, testid: "contact-info-phone" },
  { icon: Linkedin, label: "LINKEDIN", value: "pravin-salla-312609264", href: PROFILE.linkedin, testid: "contact-info-linkedin" },
  { icon: MapPin, label: "LOCATION", value: `${PROFILE.location} — ${PROFILE.relocation}`, href: null, testid: "contact-info-location" },
];

const EMPTY = { name: "", email: "", inquiry_type: "Job Opportunity", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — Pravin will get back to you soon.");
      setForm(EMPTY);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not send your message. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="px-4 sm:px-8 lg:px-12 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="06 //"
          title="Get In Touch"
          blurb="Open to full-time mechanical engineering roles from December 2026. Every message lands directly in my inbox."
          testid="contact-heading"
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {CONTACT_ROWS.map((row) => {
                const Inner = (
                  <>
                    <row.icon size={18} className="text-cyanic shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.25em] text-slate-500">{row.label}</div>
                      <div className="mt-1 text-slate-200 text-sm sm:text-base break-all">{row.value}</div>
                    </div>
                  </>
                );
                return row.href ? (
                  <a
                    key={row.label}
                    data-testid={row.testid}
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex gap-4 border border-line/80 bg-card2/70 p-5 hover:border-cyanic/40 transition-colors"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={row.label} data-testid={row.testid} className="flex gap-4 border border-line/80 bg-card2/70 p-5">
                    {Inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              data-testid="contact-form"
              onSubmit={submit}
              className="corner-ticks border border-line/80 bg-card2/70 p-6 lg:p-9 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cf-name" className="font-mono text-[10px] tracking-[0.25em] text-slate-400">
                    FULL NAME *
                  </Label>
                  <Input
                    id="cf-name"
                    data-testid="contact-form-name-input"
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jane Doe"
                    className="bg-panel/80 border-line focus-visible:ring-cyanic rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cf-email" className="font-mono text-[10px] tracking-[0.25em] text-slate-400">
                    EMAIL *
                  </Label>
                  <Input
                    id="cf-email"
                    data-testid="contact-form-email-input"
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="jane@company.com"
                    className="bg-panel/80 border-line focus-visible:ring-cyanic rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-mono text-[10px] tracking-[0.25em] text-slate-400">INQUIRY TYPE</Label>
                  <Select
                    value={form.inquiry_type}
                    onValueChange={(v) => setForm((f) => ({ ...f, inquiry_type: v }))}
                  >
                    <SelectTrigger
                      data-testid="contact-form-type-select"
                      className="bg-panel/80 border-line focus:ring-cyanic rounded-none"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-panel border-line">
                      {INQUIRY_TYPES.map((t) => (
                        <SelectItem key={t} value={t} data-testid={`contact-form-type-${t.toLowerCase().replace(/\s+/g, "-")}`}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cf-subject" className="font-mono text-[10px] tracking-[0.25em] text-slate-400">
                    SUBJECT *
                  </Label>
                  <Input
                    id="cf-subject"
                    data-testid="contact-form-subject-input"
                    required
                    value={form.subject}
                    onChange={set("subject")}
                    placeholder="Mechanical Engineer role at…"
                    className="bg-panel/80 border-line focus-visible:ring-cyanic rounded-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cf-message" className="font-mono text-[10px] tracking-[0.25em] text-slate-400">
                  MESSAGE *
                </Label>
                <Textarea
                  id="cf-message"
                  data-testid="contact-form-message-input"
                  required
                  rows={6}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell me about the role, the team, and the engineering problems you're solving…"
                  className="bg-panel/80 border-line focus-visible:ring-cyanic rounded-none resize-none"
                />
              </div>

              <button
                data-testid="contact-form-submit-button"
                type="submit"
                disabled={sending}
                className="group flex items-center justify-center gap-3 w-full bg-cyanic text-obsidian font-mono text-xs tracking-[0.25em] font-semibold py-4 hover:bg-slate-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    TRANSMITTING…
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
