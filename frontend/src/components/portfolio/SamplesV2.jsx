const PORTRAIT = "/pravin-portrait.jpg";
const NAV = ["ABOUT", "EDUCATION", "EXPERIENCE", "PROJECTS", "CONTACT"];

/* ---------------- TEMPLATE 1 - MONOLITH (Swiss) ---------------- */
function Monolith() {
  const blue = "#002FA7";
  return (
    <div style={{ background: "#FFFFFF", color: "#0A0A0A", fontFamily: "'Archivo', sans-serif" }}>
      <div className="flex items-center justify-between px-8 py-4" style={{ borderBottom: "1px solid #0A0A0A" }}>
        <span className="font-extrabold tracking-tight text-lg">SALLA<span style={{ color: blue }}>®</span></span>
        <div className="hidden sm:flex gap-6 text-[0.625rem] font-medium tracking-[0.2em]">
          {NAV.map((n) => <span key={n}>{n}</span>)}
        </div>
        <span className="text-[0.625rem] font-bold tracking-[0.2em] px-3 py-2" style={{ background: "#0A0A0A", color: "#fff" }}>
          RESUME ↓
        </span>
      </div>
      <div className="px-8 pt-14 pb-10" style={{ borderBottom: "1px solid #0A0A0A" }}>
        <div className="text-[0.625rem] font-medium tracking-[0.3em] mb-6" style={{ color: blue }}>
          PORTFOLIO - MECHANICAL ENGINEER - 2026
        </div>
        <h1 className="font-black uppercase leading-[0.85] tracking-tighter" style={{ fontSize: "clamp(48px, 8vw, 120px)" }}>
          Pravin<br />Salla<span style={{ color: blue }}>.</span>
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
          <p className="sm:col-span-5 text-sm leading-relaxed" style={{ color: "#4B5563" }}>
            Design. Simulate. Build. Mechanical systems taken from CAD model to instrumented,
            data-backed hardware - UC Davis M.S. candidate.
          </p>
          <div className="sm:col-span-7 flex justify-start sm:justify-end">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-10 h-10" style={{ background: blue }} />
              <img src={PORTRAIT} alt="Pravin Salla" className="relative w-36 h-44 object-cover object-top" style={{ border: "1px solid #0A0A0A" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 text-[0.625rem] font-medium tracking-[0.2em]" style={{ borderBottom: "1px solid #0A0A0A" }}>
        {NAV.map((n, i) => (
          <div key={n} className="px-8 py-4" style={{ borderRight: i < 4 ? "1px solid #0A0A0A" : "none" }}>
            <span style={{ color: blue }}>0{i + 1}</span> {n}
          </div>
        ))}
      </div>
      <div className="px-8 py-6 flex items-center justify-between" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <span className="text-sm font-bold">Subsonic Wind Tunnel - Design, CFD & Fabrication</span>
        <span className="text-[0.625rem] tracking-[0.2em]" style={{ color: blue }}>READ MORE →</span>
      </div>
    </div>
  );
}

/* ---------------- TEMPLATE 2 - ARCHIVE (Editorial Serif) ---------------- */
function Archive() {
  const terra = "#B4532A";
  return (
    <div style={{ background: "#F7F4EE", color: "#1C1917", fontFamily: "'Newsreader', serif" }}>
      <div className="flex items-center justify-between px-8 py-5" style={{ borderBottom: "1px solid #DDD6C8" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="italic text-xl">Pravin Salla</span>
        <div className="hidden sm:flex gap-7 text-[0.625rem] tracking-[0.3em] uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#78716C" }}>
          {NAV.map((n) => <span key={n}>{n}</span>)}
        </div>
      </div>
      <div className="px-8 py-16 text-center">
        <div className="text-[0.625rem] tracking-[0.4em] uppercase mb-8" style={{ fontFamily: "'IBM Plex Mono', monospace", color: terra }}>
          The portfolio of
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 6.5vw, 88px)" }} className="leading-none font-medium">
          Pravin <em className="font-normal">Salla</em>
        </h1>
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="h-px w-16" style={{ background: "#1C1917" }} />
          <span className="text-xs italic" style={{ color: "#78716C" }}>Mechanical Engineer - UC Davis</span>
          <span className="h-px w-16" style={{ background: "#1C1917" }} />
        </div>
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <img src={PORTRAIT} alt="Pravin Salla" className="w-44 h-56 object-cover object-top" style={{ border: "1px solid #1C1917", padding: "6px", background: "#F7F4EE" }} />
            <div className="absolute -right-28 top-6 hidden sm:flex items-center gap-2">
              <span className="h-px w-14" style={{ background: terra }} />
              <span className="text-[0.5625rem] tracking-[0.2em] whitespace-nowrap" style={{ fontFamily: "'IBM Plex Mono', monospace", color: terra }}>FIG. 01 - THE ENGINEER</span>
            </div>
          </div>
        </div>
        <p className="mt-12 max-w-xl mx-auto text-base italic leading-relaxed" style={{ color: "#57534E" }}>
          "Drawn to projects where an idea has to survive contact with real hardware and real data."
        </p>
      </div>
      <div className="px-8 py-6 flex items-baseline justify-between" style={{ borderTop: "1px solid #DDD6C8" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl">Subsonic Wind Tunnel</span>
        <span className="text-[0.5625rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace", color: terra }}>Read the study →</span>
      </div>
    </div>
  );
}

/* ---------------- TEMPLATE 3 - SCHEMATIC (Technical Mono) ---------------- */
function Schematic() {
  const cobalt = "#1D4ED8";
  const mono = "'IBM Plex Mono', monospace";
  return (
    <div style={{ background: "#F4F5F6", color: "#111827", fontFamily: mono }}>
      <div className="flex items-center justify-between px-8 py-4 text-[0.6875rem] tracking-[0.15em]" style={{ borderBottom: "1px solid #D1D5DB" }}>
        <span>[ P.SALLA ]</span>
        <div className="hidden sm:flex gap-6" style={{ color: "#6B7280" }}>
          {NAV.map((n) => <span key={n}>./{n.toLowerCase()}</span>)}
        </div>
        <span style={{ color: cobalt }}>resume.pdf ↓</span>
      </div>
      <div className="px-8 py-14 grid grid-cols-1 sm:grid-cols-12 gap-10">
        <div className="sm:col-span-7">
          <div className="text-[0.625rem] tracking-[0.25em] mb-6" style={{ color: cobalt }}>
            &gt; INITIALIZING PORTFOLIO_v2.6 ...
          </div>
          <h1 className="font-medium leading-tight" style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}>
            pravin_salla<span className="inline-block w-4 h-8 sm:h-11 ml-1 align-middle" style={{ background: cobalt }} />
          </h1>
          <div className="mt-6 text-[0.6875rem] leading-loose" style={{ color: "#6B7280" }}>
            <div>ROLE&nbsp;&nbsp;&nbsp;&nbsp;: MECHANICAL_ENGINEER</div>
            <div>STATUS&nbsp;&nbsp;&nbsp;: MS_CANDIDATE @ UC_DAVIS</div>
            <div>FOCUS&nbsp;&nbsp;&nbsp;&nbsp;: [DESIGN, SIMULATE, BUILD]</div>
          </div>
          <div className="mt-8 flex gap-3 text-[0.625rem] tracking-[0.15em]">
            <span className="px-4 py-2.5" style={{ background: cobalt, color: "#fff" }}>run --projects</span>
            <span className="px-4 py-2.5" style={{ border: "1px solid #111827" }}>run --contact</span>
          </div>
        </div>
        <div className="sm:col-span-5 flex justify-start sm:justify-end">
          <div className="relative p-3" style={{ border: "1px solid #D1D5DB" }}>
            <span className="absolute -top-1.5 -left-1.5 text-[0.625rem]" style={{ color: cobalt }}>+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[0.625rem]" style={{ color: cobalt }}>+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[0.625rem]" style={{ color: cobalt }}>+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[0.625rem]" style={{ color: cobalt }}>+</span>
            <img src={PORTRAIT} alt="Pravin Salla" className="w-40 h-48 object-cover object-top" style={{ border: "1px solid #9CA3AF" }} />
            <div className="mt-2 text-[0.5625rem] tracking-[0.2em] text-center" style={{ color: "#6B7280" }}>SUBJECT: P_SALLA · 1:1</div>
          </div>
        </div>
      </div>
      <div className="px-8 py-5 flex items-center justify-between text-[0.6875rem] tracking-[0.1em]" style={{ borderTop: "1px solid #D1D5DB" }}>
        <span>proj_01 // subsonic_wind_tunnel</span>
        <span style={{ color: cobalt }}>[ open ]</span>
      </div>
    </div>
  );
}

/* ---------------- TEMPLATE 4 - ZEN (Soft Neutral) ---------------- */
function Zen() {
  const indigo = "#3730A3";
  return (
    <div style={{ background: "#F5F4F1", color: "#292524", fontFamily: "'Manrope', sans-serif" }}>
      <div className="flex items-center justify-between px-8 py-6">
        <span className="text-sm font-semibold tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>P. Salla</span>
        <div className="hidden sm:flex gap-8 text-[0.6875rem] tracking-[0.15em]" style={{ color: "#8A8580" }}>
          {NAV.map((n) => <span key={n}>{n}</span>)}
        </div>
      </div>
      <div className="relative px-8 pt-20 pb-24">
        <span
          className="absolute right-6 top-16 text-[0.5625rem] tracking-[0.5em] hidden sm:block"
          style={{ writingMode: "vertical-rl", color: "#A8A29E", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          MECHANICAL ENGINEER - EST. 2024
        </span>
        <div className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: indigo }} />
          <span className="text-[0.625rem] tracking-[0.35em]" style={{ color: "#8A8580" }}>PORTFOLIO</span>
        </div>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(40px, 6vw, 84px)" }} className="font-extralight leading-[1.05] tracking-tight">
          Pravin Salla
        </h1>
        <p className="mt-8 max-w-md text-sm leading-loose" style={{ color: "#78716C" }}>
          I design, simulate, and build mechanical systems - quietly rigorous,
          from first sketch to instrumented test.
        </p>
        <div className="mt-12 flex items-center gap-8">
          <span className="text-[0.6875rem] tracking-[0.25em] pb-1" style={{ color: indigo, borderBottom: `1px solid ${indigo}` }}>
            VIEW WORK
          </span>
          <span className="text-[0.6875rem] tracking-[0.25em]" style={{ color: "#8A8580" }}>RESUME</span>
        </div>
        <div className="mt-16 flex justify-center sm:justify-start">
          <img src={PORTRAIT} alt="Pravin Salla" className="w-32 h-40 object-cover object-top" style={{ filter: "grayscale(30%)" }} />
        </div>
      </div>
      <div className="px-8 py-7 flex items-center justify-between" style={{ borderTop: "1px solid #E4E1DB" }}>
        <span className="text-sm font-light">Subsonic Wind Tunnel</span>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: indigo }} />
      </div>
    </div>
  );
}

/* ---------------- SHELL ---------------- */
const TEMPLATES = [
  {
    id: "template-monolith",
    num: "T1",
    name: "MONOLITH - Swiss Grid",
    vibe: "Stark white, huge black type, one Klein-blue accent, hard 1px rules. Bold but brutally simple.",
    component: Monolith,
  },
  {
    id: "template-archive",
    num: "T2",
    name: "ARCHIVE - Editorial Serif",
    vibe: "Bone-paper, elegant serif, patent-style FIG. annotations. Reads like a quiet engineering journal.",
    component: Archive,
  },
  {
    id: "template-schematic",
    num: "T3",
    name: "SCHEMATIC - Technical Mono",
    vibe: "All-monospace 'engineer's terminal' on cool gray, bounding-box dimension marks, cobalt accent.",
    component: Schematic,
  },
  {
    id: "template-zen",
    num: "T4",
    name: "ZEN - Soft Neutral",
    vibe: "Warm stone, featherweight type, vast whitespace, a single indigo dot. The quietest option.",
    component: Zen,
  },
];

export default function SamplesV2() {
  return (
    <div className="min-h-screen bg-neutral-950 font-dmsans text-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-12">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-amber-500 mb-3">ROUND 2 - ULTRA-MINIMAL TEMPLATES</div>
          <h1 className="font-syne text-3xl sm:text-4xl font-bold text-white">Four fresh directions</h1>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm leading-relaxed">
            Each is a full redesign from scratch - typography-led, one accent color, maximum
            whitespace. Your live site stays untouched until you pick one. All will carry your
            real content, photos, galleries, and detail pages.
          </p>
        </div>
        <div className="space-y-16">
          {TEMPLATES.map((t) => {
            const Mock = t.component;
            return (
              <section key={t.id} data-testid={t.id}>
                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <span className="font-mono text-xs tracking-[0.3em] text-amber-500">{t.num}</span>
                  <h2 className="font-syne text-xl font-bold text-white">{t.name}</h2>
                </div>
                <p className="text-sm text-slate-400 mb-5 max-w-3xl leading-relaxed">{t.vibe}</p>
                <div className="border border-neutral-800 shadow-2xl overflow-hidden">
                  <Mock />
                </div>
              </section>
            );
          })}
        </div>
        <p className="mt-14 font-mono text-[0.6875rem] tracking-[0.25em] text-slate-500 text-center">
          REPLY IN CHAT WITH “T1”, “T2”, “T3”, OR “T4” - OR ASK FOR A VARIATION OR MIX
        </p>
      </div>
    </div>
  );
}
