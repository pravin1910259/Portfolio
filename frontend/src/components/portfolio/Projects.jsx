import { useState } from "react";
import { Link } from "react-router-dom";
import { Images, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading, Lightbox } from "./shared";
import { PROJECTS } from "@/data";

function ProjectCard({ project, index, className }) {
  const [lightbox, setLightbox] = useState(null);
  const gallery = project.gallery || [];

  return (
    <Reveal delay={index * 0.1} className={className}>
      <article
        data-testid={project.id}
        className="group relative border border-line/80 bg-card2/70 overflow-hidden h-full flex flex-col hover:border-cyanic/40 transition-colors duration-300"
      >
        {project.image ? (
          <div className="relative overflow-hidden aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover saturate-[0.85] contrast-105 group-hover:saturate-100 group-hover:scale-[1.04] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card2 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] text-cyanic bg-obsidian/80 border border-cyanic/30 px-3 py-1.5">
              {project.category}
            </div>
            <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-slate-400 bg-obsidian/80 px-2.5 py-1.5">
              {project.period}
            </div>
          </div>
        ) : (
          <div className="relative aspect-[16/9] blueprint-grid-fine bg-panel/80 flex flex-col items-center justify-center border-b border-line/60">
            <span className="font-mono text-[10px] tracking-[0.25em] text-cyanic bg-obsidian/80 border border-cyanic/30 px-3 py-1.5 absolute top-4 left-4">
              {project.category}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-slate-400 bg-obsidian/80 px-2.5 py-1.5 absolute top-4 right-4">
              {project.period}
            </span>
            <span className="font-syne text-4xl text-cyanic/20 font-bold">Ø</span>
            <span className="mt-3 px-6 text-center font-mono text-[10px] tracking-[0.2em] text-slate-500">
              {project.schematic}
            </span>
            <span className="mt-2 font-mono text-[9px] tracking-[0.2em] text-slate-600">
              IMAGE / CAD RENDER - TO BE ADDED
            </span>
          </div>
        )}
        <div className="p-6 lg:p-8 flex flex-col flex-1">
          <h3 className="font-syne text-xl lg:text-2xl font-semibold text-slate-50 group-hover:text-cyanic transition-colors">
            {project.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
            {project.metrics.map((m) => (
              <span key={m} className="font-mono text-[11px] tracking-wider text-ember">
                {m}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed flex-1">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-widest text-slate-500 border border-line px-2.5 py-1"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="mt-5 pt-5 border-t border-line/60 flex flex-wrap gap-3">
            <Link
              data-testid={`${project.id}-read-more`}
              to={`/projects/${project.slug}`}
              className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-slate-200 border border-line px-3.5 py-2 hover:border-cyanic hover:text-cyanic transition-colors"
            >
              READ MORE
              <ArrowRight size={12} />
            </Link>
            {project.links && project.links.map((link) => (
              <a
                key={link.url}
                data-testid={`${project.id}-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.2em] text-cyanic border border-cyanic/40 px-3.5 py-2 hover:bg-cyanic hover:text-obsidian transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
          {gallery.length > 0 && (
            <div className="mt-5 pt-5 border-t border-line/60">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-slate-500 mb-3">
                <Images size={13} className="text-cyanic" />
                PROJECT GALLERY - {gallery.length} PHOTOS
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {gallery.map((g, gi) => (
                  <button
                    key={g.src}
                    data-testid={`${project.id}-gallery-thumb-${gi}`}
                    onClick={() => setLightbox(gi)}
                    className="relative aspect-square overflow-hidden border border-line hover:border-cyanic transition-colors group/thumb"
                  >
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {lightbox !== null && (
          <Lightbox
            items={gallery}
            index={lightbox}
            testid={project.id}
            onClose={() => setLightbox(null)}
            onPrev={() => setLightbox((lightbox + gallery.length - 1) % gallery.length)}
            onNext={() => setLightbox((lightbox + 1) % gallery.length)}
          />
        )}
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="px-4 sm:px-8 lg:px-12 py-24 lg:py-32 bg-panel/40 border-y border-line/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04 //"
          title="Projects"
          blurb="First-principles engineering: a wind tunnel built from scratch, instrumented tribology, and peer-reviewed vibration research."
          testid="projects-heading"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <ProjectCard project={PROJECTS[0]} index={0} className="lg:col-span-2" />
          <ProjectCard project={PROJECTS[1]} index={1} />
          <ProjectCard project={PROJECTS[2]} index={2} />
          <ProjectCard project={PROJECTS[3]} index={3} className="lg:col-span-2" />
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 font-mono text-xs tracking-[0.25em] text-slate-500 text-center">
            MORE PROJECTS & CAD FILES AVAILABLE ON REQUEST
          </p>
        </Reveal>
      </div>
    </section>
  );
}
