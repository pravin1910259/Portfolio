import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import { EDUCATION } from "@/data";

export default function Education() {
  return (
    <section id="education" data-testid="education-section" className="px-4 sm:px-8 lg:px-12 py-24 lg:py-32 bg-panel/40 border-y border-line/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02 //"
          title="Education"
          testid="education-heading"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 0.12}>
              <article
                data-testid={edu.id}
                className="corner-ticks h-full border border-line/80 bg-card2/70 p-7 lg:p-9 hover:border-cyanic/40 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <GraduationCap size={28} className="text-cyanic shrink-0" strokeWidth={1.5} />
                  <div className="text-right">
                    <div className="font-mono text-[10px] tracking-[0.25em] text-slate-500">GPA</div>
                    <div className="font-syne text-2xl font-bold text-cyanic">{edu.gpa}</div>
                  </div>
                </div>
                <h3 className="font-syne text-xl lg:text-2xl font-semibold text-slate-50 leading-snug">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-slate-300">{edu.institution}</p>
                <p className="mt-2 font-mono text-xs tracking-[0.2em] text-slate-500">{edu.period}</p>
                <div className="mt-6 pt-6 border-t border-line/70">
                  <div className="font-mono text-[10px] tracking-[0.25em] text-slate-500 mb-3">
                    RELEVANT COURSEWORK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="font-mono text-[11px] tracking-wider text-slate-400 border border-line px-2.5 py-1"
                      >
                        {c}
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
