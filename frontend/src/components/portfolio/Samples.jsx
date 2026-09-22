const THEMES = [
  {
    id: "sample-a",
    name: "SAMPLE A — DRAFTING PAPER",
    tagline: "Light · blueprint hairlines · dimension orange",
    desc: "Feels like a fresh engineering drawing: warm drafting-paper background, ink-navy type, faint blue grid hairlines, and orange dimension marks. Minimal, bright, very readable for recruiters.",
    c: {
      bg: "#F2EFE7",
      surface: "#FBFAF6",
      ink: "#10151D",
      sub: "#4B5563",
      accent: "#1D4ED8",
      accent2: "#E8590C",
      line: "rgba(16,21,29,0.14)",
      grid: "rgba(29,78,216,0.10)",
    },
  },
  {
    id: "sample-b",
    name: "SAMPLE B — MACHINIST",
    tagline: "Light · brushed aluminum · safety orange",
    desc: "Machine-shop minimal: brushed-aluminum gray, black machined type, hairline steel dividers, and safety-orange accents like markings on shop equipment.",
    c: {
      bg: "#E7E8EA",
      surface: "#F4F5F6",
      ink: "#111417",
      sub: "#5A6167",
      accent: "#111417",
      accent2: "#E8480C",
      line: "rgba(17,20,23,0.16)",
      grid: "rgba(17,20,23,0.06)",
    },
  },
  {
    id: "sample-c",
    name: "SAMPLE C — GRAPHITE MONO",
    tagline: "Dark · flat graphite · single amber accent",
    desc: "Keeps a dark canvas but strips away the grid and glow: flat graphite, white typography, hairline rules, one amber accent. The most minimal and typography-driven option.",
    c: {
      bg: "#0C0D0F",
      surface: "#131518",
      ink: "#F4F5F6",
      sub: "#8A9099",
      accent: "#F4F5F6",
      accent2: "#F59E0B",
      line: "rgba(244,245,246,0.12)",
      grid: "rgba(244,245,246,0.04)",
    },
  },
];

function MockNav({ c }) {
  return (
    <div
      className="flex items-center justify-between px-6 py-3 border-b"
      style={{ borderColor: c.line, background: c.surface }}
    >
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[10px] tracking-widest" style={{ color: c.accent2 }}>
          [PS]
        </span>
        <span className="font-syne font-bold text-sm" style={{ color: c.ink }}>
          Pravin Salla
        </span>
      </div>
      <div className="hidden sm:flex gap-5 font-mono text-[9px] tracking-[0.2em]" style={{ color: c.sub }}>
        <span>01. EXPERIENCE</span>
        <span>02. PROJECTS</span>
        <span>03. SKILLS</span>
        <span>05. CONTACT</span>
      </div>
      <span
        className="font-mono text-[9px] tracking-[0.2em] px-3 py-1.5 border"
        style={{ color: c.accent2, borderColor: c.accent2 }}
      >
        RESUME
      </span>
    </div>
  );
}

function MockHero({ c }) {
  return (
    <div
      className="px-6 sm:px-10 py-10"
      style={{
        background: `${c.bg} repeating-linear-gradient(0deg, ${c.grid} 0 1px, transparent 1px 44px), repeating-linear-gradient(90deg, ${c.grid} 0 1px, transparent 1px 44px)`,
        backgroundColor: c.bg,
      }}
    >
      <div className="font-mono text-[9px] tracking-[0.3em] mb-5" style={{ color: c.accent2 }}>
        MS CANDIDATE — MECHANICAL & AEROSPACE ENGINEERING, UC DAVIS
      </div>
      <div className="font-syne font-extrabold leading-[0.95] tracking-tight">
        <div className="text-4xl sm:text-5xl" style={{ color: c.ink }}>
          DESIGN.
        </div>
        <div
          className="text-4xl sm:text-5xl"
          style={{ WebkitTextStroke: `1.5px ${c.accent2}`, color: "transparent" }}
        >
          SIMULATE.
        </div>
        <div className="text-4xl sm:text-5xl" style={{ color: c.ink }}>
          BUILD<span style={{ color: c.accent2 }}>.</span>
        </div>
      </div>
      <p className="mt-5 max-w-md text-sm leading-relaxed" style={{ color: c.sub }}>
        I design, simulate, and build mechanical systems end-to-end — from FEA-validated CAD models
        to instrumented test rigs on the shop floor.
      </p>
      <div className="mt-6 flex gap-3">
        <span
          className="font-mono text-[9px] tracking-[0.2em] px-4 py-2.5"
          style={{ background: c.ink, color: c.bg }}
        >
          EXPLORE PROJECTS
        </span>
        <span
          className="font-mono text-[9px] tracking-[0.2em] px-4 py-2.5 border"
          style={{ borderColor: c.line, color: c.sub }}
        >
          DOWNLOAD RESUME
        </span>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-px" style={{ background: c.line }}>
        {[
          ["3.7/4.0", "GPA"],
          ["1", "SAGE PAPER"],
          ["40+", "CONCEPTS"],
          ["8.29", "CR WIND TUNNEL"],
        ].map(([v, l]) => (
          <div key={l} className="px-3 py-3" style={{ background: c.bg }}>
            <div className="font-syne text-sm font-bold" style={{ color: c.accent2 }}>
              {v}
            </div>
            <div className="font-mono text-[8px] tracking-[0.15em] mt-0.5" style={{ color: c.sub }}>
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockCard({ c }) {
  return (
    <div className="px-6 sm:px-10 pb-10" style={{ background: c.bg }}>
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[9px] tracking-[0.3em]" style={{ color: c.accent2 }}>
          02 //
        </span>
        <span className="h-px w-16" style={{ background: c.line }} />
      </div>
      <div className="border p-5 flex items-center justify-between" style={{ borderColor: c.line, background: c.surface }}>
        <div>
          <div className="font-syne font-semibold" style={{ color: c.ink }}>
            Subsonic Wind Tunnel — Design, CFD & Fabrication
          </div>
          <div className="font-mono text-[9px] tracking-widest mt-1.5" style={{ color: c.accent2 }}>
            9.4 M/S · 0.42% TURBULENCE INTENSITY
          </div>
        </div>
        <span className="font-mono text-[9px] tracking-widest border px-2.5 py-1.5" style={{ color: c.sub, borderColor: c.line }}>
          REPORT ↗
        </span>
      </div>
    </div>
  );
}

export default function Samples() {
  return (
    <div className="min-h-screen bg-neutral-950 font-dmsans text-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-12">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-amber-500 mb-3">THEME PREVIEW — NOT LIVE</div>
          <h1 className="font-syne text-3xl sm:text-4xl font-bold text-white">
            Pick a minimalist direction
          </h1>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm leading-relaxed">
            Three sample themes, each still rooted in mechanical / manufacturing engineering. Tell me
            which one to apply across the whole site — your current dark blueprint theme stays
            untouched until you choose.
          </p>
        </div>
        <div className="space-y-14">
          {THEMES.map((t) => (
            <section key={t.id} data-testid={t.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                <h2 className="font-syne text-xl font-bold text-white">{t.name}</h2>
                <span className="font-mono text-[10px] tracking-[0.25em] text-slate-500">
                  {t.tagline.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-5 max-w-3xl leading-relaxed">{t.desc}</p>
              <div className="border border-neutral-800 shadow-2xl overflow-hidden">
                <MockNav c={t.c} />
                <MockHero c={t.c} />
                <MockCard c={t.c} />
              </div>
            </section>
          ))}
        </div>
        <p className="mt-14 font-mono text-[11px] tracking-[0.25em] text-slate-500 text-center">
          REPLY IN CHAT WITH “A”, “B”, OR “C” — OR ASK FOR A VARIATION
        </p>
      </div>
    </div>
  );
}
