import { Reveal, SectionHeading } from "./shared";
import { ABOUT } from "@/data";

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="px-4 sm:px-8 lg:px-12 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="01 //" title="About Me" testid="about-heading" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <Reveal className="lg:col-span-8">
            <div className="space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed">
              <p className="text-slate-200 font-medium text-lg sm:text-xl">{ABOUT.paragraphs[0]}</p>
              {ABOUT.paragraphs.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="corner-ticks border border-line/80 bg-card2/70 p-6 lg:p-7 space-y-6">
              <div className="font-mono text-[0.625rem] tracking-[0.25em] text-cyanic">QUICK FACTS</div>
              {ABOUT.facts.map((f) => (
                <div key={f.label}>
                  <div className="font-mono text-[0.625rem] tracking-[0.25em] text-slate-500">{f.label}</div>
                  <div className="mt-1.5 text-sm text-slate-200 leading-relaxed">{f.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
