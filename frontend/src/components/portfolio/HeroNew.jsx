import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { MaskedLine } from "./shared";
import { PROFILE } from "@/data";

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-8 lg:px-12 border-b border-line"
    >
      <div className="mx-auto max-w-7xl w-full">
        <MaskedLine delay={0.2}>
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.35em] text-cyanic">
            PORTFOLIO — MECHANICAL ENGINEER — 2026
          </span>
        </MaskedLine>

        <h1 className="mt-8 font-syne font-black uppercase leading-[0.85] tracking-tighter">
          <MaskedLine delay={0.35} className="pr-4">
            <span className="text-6xl sm:text-8xl lg:text-9xl text-slate-50">Pravin</span>
          </MaskedLine>
          <MaskedLine delay={0.5} className="pr-4">
            <span className="text-6xl sm:text-8xl lg:text-9xl text-slate-50">
              Salla<span className="text-cyanic">.</span>
            </span>
          </MaskedLine>
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              <span className="text-slate-50 font-semibold">Design. Simulate. Build.</span>{" "}
              {PROFILE.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                data-testid="hero-btn-explore-projects"
                onClick={() => onNavigate("#projects")}
                className="group flex items-center gap-3 bg-slate-50 text-white font-mono text-xs tracking-[0.2em] px-7 py-4 font-semibold hover:bg-cyanic transition-colors"
              >
                EXPLORE PROJECTS
                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                data-testid="hero-btn-download-resume"
                href={PROFILE.resumeUrl}
                download="Pravin_Salla_Resume.pdf"
                className="flex items-center gap-3 border border-line text-slate-50 font-mono text-xs tracking-[0.2em] px-7 py-4 hover:bg-slate-50 hover:text-white transition-colors"
              >
                <FileDown size={15} />
                DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex lg:justify-end"
          >
            <div className="relative pb-6">
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-cyanic" />
              <img
                data-testid="hero-portrait-image"
                src="/pravin-portrait.jpg"
                alt="Pravin Salla — Mechanical Engineer"
                className="relative w-52 sm:w-64 aspect-[4/5] object-cover object-top border border-line"
              />
              <div className="absolute bottom-0 right-0 font-mono text-[9px] tracking-[0.25em] text-slate-500">
                FIG.01 — THE ENGINEER
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-line"
        >
          {PROFILE.metrics.map((m) => (
            <div key={m.label} className="border-r border-b border-line px-5 py-5">
              <div className="font-syne text-xl sm:text-2xl font-bold text-cyanic">{m.value}</div>
              <div className="mt-1 font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-slate-500">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
