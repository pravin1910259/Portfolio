import { Reveal, SectionHeading } from "./shared";
import { SKILL_GROUPS } from "@/data";

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="px-4 sm:px-8 lg:px-12 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="05 //"
          title="Engineering Toolkit"
          blurb="The full stack of a mechanical engineer — from parametric CAD and multiphysics simulation to the machine shop."
          testid="skills-heading"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.08}>
              <div
                data-testid={`skill-group-${group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="corner-ticks h-full border border-line/80 bg-card2/70 p-6 lg:p-7 hover:border-cyanic/40 hover:bg-cardhover/70 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-cyanic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-syne text-lg font-semibold text-slate-100">{group.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] tracking-wider text-slate-300 bg-panel/80 border border-line px-2.5 py-1.5 hover:text-cyanic hover:border-cyanic/40 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
