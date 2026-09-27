const INK = "#0A0A0A";
const BLUE = "#002FA7";

function Frame({ id, name, note, children }) {
  return (
    <section data-testid={id} className="border border-neutral-800 bg-white">
      <div className="flex items-center justify-between px-8 h-16 border-b" style={{ borderColor: INK }}>
        {children}
        <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400">RESUME</span>
      </div>
      <div className="bg-neutral-950 px-8 py-4 flex flex-wrap items-baseline gap-3">
        <span className="font-syne font-bold text-white text-sm">{name}</span>
        <span className="font-mono text-[10px] tracking-widest text-neutral-500">{note}</span>
      </div>
    </section>
  );
}

export default function BrandSamples() {
  return (
    <div className="min-h-screen bg-neutral-950 font-dmsans text-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 py-12">
        <div className="font-mono text-xs tracking-[0.3em] text-amber-500 mb-3">LOGO CONCEPTS — PREVIEW</div>
        <h1 className="font-syne text-3xl sm:text-4xl font-bold text-white">Six mark ideas</h1>
        <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-2xl">
          Each shown as it would appear in the top-left nav bar. Reply with a number (or ask for
          variations) and I'll swap it in everywhere.
        </p>
        <div className="mt-10 space-y-10">
          <Frame id="logo-1" name="01 — PS. with blue full stop" note="MATCHES THE GIANT “SALLA.” HERO FULL STOP">
            <span className="font-syne font-black text-2xl tracking-tight" style={{ color: INK }}>
              PS<span style={{ color: BLUE }}>.</span>
            </span>
          </Frame>

          <Frame id="logo-2" name="02 — P■S blue square" note="THE SQUARE AS A MACHINED BLOCK BETWEEN INITIALS">
            <span className="font-syne font-black text-2xl tracking-tight flex items-center gap-1.5" style={{ color: INK }}>
              P<span className="inline-block w-3.5 h-3.5" style={{ background: BLUE }} />S
            </span>
          </Frame>

          <Frame id="logo-3" name="03 — Boxed monogram" note="BLACK STAMP, WHITE INITIALS — LIKE AN INSPECTION STICKER">
            <span className="font-syne font-black text-sm tracking-tight px-3 py-2" style={{ background: INK, color: "#fff" }}>
              PS
            </span>
          </Frame>

          <Frame id="logo-4" name="04 — PS/ terminal slash" note="ENGINEER'S COMMAND-LINE ENERGY">
            <span className="font-mono font-medium text-xl tracking-tight" style={{ color: INK }}>
              ps<span style={{ color: BLUE }}>/</span>
            </span>
          </Frame>

          <Frame id="logo-5" name="05 — ØPS diameter mark" note="THE Ø ENGINEERING SYMBOL AS THE O — TECHNICAL BUT SUBTLE">
            <span className="font-syne font-black text-2xl tracking-tight" style={{ color: INK }}>
              P<span style={{ color: BLUE }}>Ø</span>S
            </span>
          </Frame>

          <Frame id="logo-6" name="06 — P—S dimension line" note="AN EM-DASH LIKE A DIMENSION LINE ON A DRAWING">
            <span className="font-syne font-black text-2xl tracking-tight flex items-center gap-1" style={{ color: INK }}>
              P
              <span className="relative inline-block w-6 h-px" style={{ background: BLUE }}>
                <span className="absolute -left-px -top-1 w-px h-2" style={{ background: BLUE }} />
                <span className="absolute -right-px -top-1 w-px h-2" style={{ background: BLUE }} />
              </span>
              S
            </span>
          </Frame>
        </div>
        <p className="mt-12 font-mono text-[11px] tracking-[0.25em] text-slate-500 text-center">
          REPLY WITH 1–6, OR DESCRIBE A VARIATION
        </p>
      </div>
    </div>
  );
}
