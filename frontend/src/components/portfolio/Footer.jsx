import { ArrowUp } from "lucide-react";
import { PROFILE } from "@/data";

export default function Footer({ onNavigate }) {
  return (
    <footer data-testid="footer" className="border-t border-line/70 bg-panel/60 px-4 sm:px-8 lg:px-12 py-10">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-cyanic text-sm tracking-widest">[PS]</span>
          <span className="font-syne font-bold text-slate-50">Pravin Salla</span>
        </div>
        <p className="font-mono text-[11px] tracking-[0.2em] text-slate-500 text-center">
          © 2026 PRAVIN SALLA — DESIGNED & ENGINEERED IN DAVIS, CA
        </p>
        <button
          data-testid="footer-back-to-top"
          onClick={() => onNavigate("#home")}
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-slate-400 hover:text-cyanic transition-colors"
        >
          BACK TO TOP
          <ArrowUp size={13} />
        </button>
      </div>
      <div className="mx-auto max-w-7xl mt-6 pt-6 border-t border-line/40 flex flex-wrap gap-x-6 gap-y-2 justify-center">
        <a href={`mailto:${PROFILE.email}`} className="font-mono text-[10px] tracking-widest text-slate-600 hover:text-cyanic transition-colors">
          {PROFILE.email.toUpperCase()}
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-widest text-slate-600 hover:text-cyanic transition-colors">
          LINKEDIN
        </a>
        <a href={PROFILE.resumeUrl} download="Pravin_Salla_Resume.pdf" className="font-mono text-[10px] tracking-widest text-slate-600 hover:text-cyanic transition-colors">
          RESUME.PDF
        </a>
      </div>
    </footer>
  );
}
