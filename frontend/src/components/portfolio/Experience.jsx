import { MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import { EXPERIENCE } from "@/data";

export default function Experience() {
  return (
    <section id="experience" data-testid="experience-section" className="px-4 sm:px-8 lg:px-12 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03 //"
          title="Experience"
          blurb="Applied research with Caltrans, manufacturing instruction at UC Davis, and product design in industry."
          testid="experience-heading"
        />
        <div className="relative border-l border-line/70 ml-2 lg:ml-6 space-y-12">
          {EXPERIENCE.map((role, i) => (
            <Reveal key={role.id} delay={i * 0.12}>
              <article
                data-testid={role.id}
                className="relative pl-8 lg:pl-12 group"
              >
                <span
                  className={`absolute -left-[7px] top-2 w-3.5 h-3.5 rotate-45 border-2 ${
                    role.current
                      ? "bg-cyanic border-cyanic shadow-[0_0_16px_rgba(0,47,167,0.35)]"
                      : "bg-obsidian border-slate-600 group-hover:border-cyanic"
                  } transition-colors`}
                />
                <div className="corner-ticks border border-line/80 bg-card2/70 backdrop-blur p-6 lg:p-9 transition-colors duration-300 hover:border-cyanic/40 hover:bg-cardhover/70">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-syne text-xl sm:text-2xl font-semibold text-slate-50">
                        {role.title}
                      </h3>
                      <p className="mt-1.5 text-cyanic font-mono text-xs sm:text-sm tracking-wider">
                        {role.organization}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs tracking-[0.2em] text-slate-300 border border-line px-3 py-1.5 inline-block">
                        {role.period}
                      </div>
                      <div className="mt-2 flex items-center justify-end gap-1.5 font-mono text-[11px] text-slate-500">
                        <MapPin size={11} />
                        {role.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                        <span className="text-cyanic font-mono mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {role.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[10px] tracking-widest text-slate-400 border border-line px-2.5 py-1 group-hover:border-cyanic/30 transition-colors"
                      >
                        {tool.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
