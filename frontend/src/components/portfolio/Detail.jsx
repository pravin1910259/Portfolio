import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, PenLine, Database } from "lucide-react";
import { PROJECTS, EXPERIENCE } from "@/data";
import { Lightbox } from "./shared";

function ReservedBlock({ icon: Icon, title, note, testid }) {
  return (
    <div
      data-testid={testid}
      className="border border-dashed border-line px-6 py-10 text-center bg-panel/40"
    >
      <Icon size={20} className="mx-auto text-cyanic mb-3" strokeWidth={1.5} />
      <div className="font-mono text-[0.6875rem] tracking-[0.25em] text-slate-400">{title}</div>
      <div className="mt-2 font-mono text-[0.625rem] tracking-[0.15em] text-slate-500">{note}</div>
    </div>
  );
}

export default function DetailPage({ type }) {
  const { slug } = useParams();
  const items = type === "project" ? PROJECTS : EXPERIENCE;
  const item = items.find((i) => i.slug === slug);
  const [lightbox, setLightbox] = useState(null);
  const gallery = item?.gallery || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
      <div className="min-h-screen bg-obsidian text-slate-200 font-dmsans flex flex-col items-center justify-center gap-6 px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-slate-500">PAGE NOT FOUND</p>
        <Link to="/" data-testid="detail-back-notfound" className="font-mono text-xs tracking-[0.2em] text-cyanic border border-cyanic/40 px-5 py-3 hover:bg-cyanic hover:text-obsidian transition-colors">
          ← BACK TO PORTFOLIO
        </Link>
      </div>
    );
  }

  const isProject = type === "project";

  return (
    <div className="min-h-screen bg-obsidian text-slate-100 font-dmsans antialiased">
      <div className="relative z-10">
        <header className="border-b border-line/70 bg-obsidian/80 backdrop-blur-xl sticky top-0 z-40">
          <div className="mx-auto max-w-5xl px-4 sm:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <span className="font-syne font-black text-xs tracking-tight px-2.5 py-1.5 bg-slate-50 text-white">PS</span>
              <span className="font-syne font-bold text-slate-50">Pravin Salla</span>
            </Link>
            <Link
              to="/"
              data-testid="detail-back-link"
              className="flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.25em] text-slate-400 hover:text-cyanic transition-colors"
            >
              <ArrowLeft size={14} />
              BACK
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 sm:px-8 py-16 lg:py-24">
          <div className="mb-12">
            <div className="font-mono text-[0.6875rem] tracking-[0.3em] text-cyanic mb-4">
              {isProject ? item.category : item.organization}
            </div>
            <h1 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-50 leading-tight">
              {item.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs tracking-[0.2em] text-slate-300 border border-line px-3 py-1.5">
                {item.period}
              </span>
              {item.location && (
                <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
                  <MapPin size={12} />
                  {item.location}
                </span>
              )}
            </div>
          </div>

          {item.image && (
            <div className="mb-12 border border-line overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full max-h-[30rem] object-cover" />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-8 space-y-10">
              <section data-testid="detail-overview">
                <h2 className="font-mono text-[0.6875rem] tracking-[0.3em] text-cyanic mb-5">OVERVIEW</h2>
                {isProject ? (
                  <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{item.description}</p>
                ) : (
                  <ul className="space-y-3">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-base text-slate-400 leading-relaxed">
                        <span className="text-cyanic font-mono mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {item.writeup ? (
                item.writeup.map((sec) => (
                  <section
                    key={sec.heading}
                    data-testid={`detail-writeup-${sec.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <h2 className="font-mono text-[0.6875rem] tracking-[0.3em] text-cyanic mb-5">
                      {sec.heading.toUpperCase()}
                    </h2>
                    <div className="space-y-4">
                      {sec.table && (
                        <div className="overflow-x-auto border border-line" data-testid="detail-results-table">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-panel">
                                {sec.table.headers.map((h) => (
                                  <th key={h} className="font-mono text-[0.625rem] tracking-[0.2em] text-slate-500 text-left px-4 py-3 border-b border-line uppercase">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.table.rows.map((row, ri) => (
                                <tr key={ri} className="border-b border-line/30 last:border-0 hover:bg-panel/60 transition-colors">
                                  {row.map((cell, ci) => (
                                    <td
                                      key={ci}
                                      className={`px-4 py-3 ${ci === 0 ? "text-slate-100 font-medium" : "font-mono text-slate-400"} ${cell.startsWith("−") || cell.startsWith("-1") ? "text-cyanic" : ""} ${cell.startsWith("+") ? "text-red-600" : ""}`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {sec.paragraphs?.map((p, i) => (
                        <p key={i} className="text-base text-slate-400 leading-relaxed">{p}</p>
                      ))}
                      {sec.items?.map((it, i) => (
                        <p key={i} className="text-base text-slate-400 leading-relaxed">
                          <span className="text-ember font-medium">{it.lead}</span>{" "}
                          {it.text}
                        </p>
                      ))}
                      {sec.bullets && (
                        <ul className="space-y-2.5">
                          {sec.bullets.map((b, i) => (
                            <li key={i} className="flex gap-3 text-base text-slate-400 leading-relaxed">
                              <span className="text-cyanic font-mono mt-0.5 shrink-0">▸</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>
                ))
              ) : (
                <>
                  <ReservedBlock
                    icon={PenLine}
                    title={isProject ? "FULL DESIGN WRITE-UP - SPACE RESERVED" : "ROLE IN DETAIL - SPACE RESERVED"}
                    note="PRAVIN IS ADDING THE DETAILED STORY HERE: APPROACH, DECISIONS, AND LESSONS"
                    testid="detail-reserved-writeup"
                  />
                  <ReservedBlock
                    icon={Database}
                    title={isProject ? "DATA, DRAWINGS & RESULTS - SPACE RESERVED" : "OUTCOMES & IMPACT - SPACE RESERVED"}
                    note="TEST DATA, CAD DRAWINGS, AND ADDITIONAL MATERIAL WILL BE PUBLISHED HERE"
                    testid="detail-reserved-data"
                  />
                </>
              )}
            </div>

            <aside className="lg:col-span-4 space-y-8">
              {(item.tags || item.tools) && (
                <div>
                  <h2 className="font-mono text-[0.6875rem] tracking-[0.3em] text-cyanic mb-4">TOOLS & METHODS</h2>
                  <div className="flex flex-wrap gap-2">
                    {(item.tags || item.tools).map((t) => (
                      <span key={t} className="font-mono text-[0.625rem] tracking-widest text-slate-400 border border-line px-2.5 py-1.5">
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {item.metrics && (
                <div>
                  <h2 className="font-mono text-[0.6875rem] tracking-[0.3em] text-cyanic mb-4">KEY NUMBERS</h2>
                  <div className="space-y-2">
                    {item.metrics.map((m) => (
                      <div key={m} className="font-mono text-xs tracking-wider text-ember border-l-2 border-ember/50 pl-3 py-1">
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {item.links && item.links.length > 0 && (
                <div>
                  <h2 className="font-mono text-[0.6875rem] tracking-[0.3em] text-cyanic mb-4">DOCUMENTS</h2>
                  <div className="flex flex-col gap-3">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        data-testid={`detail-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-mono text-[0.6875rem] tracking-[0.2em] text-cyanic border border-cyanic/40 px-4 py-3 hover:bg-cyanic hover:text-obsidian transition-colors text-center"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {gallery.length > 0 && (
            <section className="mt-16" data-testid="detail-gallery">
              <h2 className="font-mono text-[0.6875rem] tracking-[0.3em] text-cyanic mb-6">
                PHOTO GALLERY - {gallery.length} PHOTOS
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {gallery.map((g, gi) => (
                  <button
                    key={g.src}
                    data-testid={`detail-gallery-thumb-${gi}`}
                    onClick={() => setLightbox(gi)}
                    className="relative aspect-[4/3] overflow-hidden border border-line hover:border-cyanic transition-colors group/thumb"
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
            </section>
          )}
        </main>

        <footer className="border-t border-line/70 py-8 text-center">
          <Link to="/" className="font-mono text-[0.6875rem] tracking-[0.25em] text-slate-500 hover:text-cyanic transition-colors">
            ← BACK TO PORTFOLIO
          </Link>
        </footer>
      </div>

      {lightbox !== null && (
        <Lightbox
          items={gallery}
          index={lightbox}
          testid="detail"
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((lightbox + gallery.length - 1) % gallery.length)}
          onNext={() => setLightbox((lightbox + 1) % gallery.length)}
        />
      )}
    </div>
  );
}
