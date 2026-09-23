import { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { PROFILE } from "@/data";

const LINKS = [
  { hash: "#about", label: "About", num: "01", testid: "nav-link-about" },
  { hash: "#education", label: "Education", num: "02", testid: "nav-link-education" },
  { hash: "#experience", label: "Experience", num: "03", testid: "nav-link-experience" },
  { hash: "#projects", label: "Projects", num: "04", testid: "nav-link-projects" },
  { hash: "#skills", label: "Skills", num: "05", testid: "nav-link-skills" },
  { hash: "#contact", label: "Contact", num: "06", testid: "nav-link-contact" },
];

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const go = (hash) => {
    setOpen(false);
    onNavigate(hash);
  };

  return (
    <header
      data-testid="navbar"
      className="fixed top-0 inset-x-0 z-50 border-b border-line/70 bg-obsidian/70 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <button
          data-testid="nav-link-home"
          onClick={() => go("#home")}
          className="flex items-baseline gap-1 group"
        >
          <span className="font-syne font-black text-lg tracking-tight text-slate-50 group-hover:text-cyanic transition-colors">
            SALLA<span className="text-cyanic">®</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <button
              key={l.hash}
              data-testid={l.testid}
              onClick={() => go(l.hash)}
              className="font-mono text-xs tracking-widest text-slate-400 hover:text-cyanic transition-colors uppercase"
            >
              <span className="text-cyanic/60 mr-1">{l.num}.</span>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            data-testid="nav-cta-resume"
            href={PROFILE.resumeUrl}
            download="Pravin_Salla_Resume.pdf"
            className="flex items-center gap-2 bg-slate-50 text-white font-mono text-xs tracking-widest px-4 py-2.5 hover:bg-cyanic transition-colors"
          >
            <FileDown size={14} />
            RESUME
          </a>
        </div>

        <button
          data-testid="nav-mobile-menu-button"
          className="lg:hidden text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line/70 bg-obsidian/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4">
          {LINKS.map((l) => (
            <button
              key={l.hash}
              data-testid={`${l.testid}-mobile`}
              onClick={() => go(l.hash)}
              className="text-left font-mono text-sm tracking-widest text-slate-300 hover:text-cyanic uppercase"
            >
              <span className="text-cyanic/60 mr-2">{l.num}.</span>
              {l.label}
            </button>
          ))}
          <a
            data-testid="nav-cta-resume-mobile"
            href={PROFILE.resumeUrl}
            download="Pravin_Salla_Resume.pdf"
            className="flex items-center gap-2 text-cyanic font-mono text-sm tracking-widest"
          >
            <FileDown size={14} />
            DOWNLOAD RESUME
          </a>
        </div>
      )}
    </header>
  );
}
