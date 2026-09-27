import { motion } from "framer-motion";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Reveal = ({ children, delay = 0, y = 32, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ index, title, blurb, testid }) => (
  <Reveal>
    <div data-testid={testid} className="mb-14 lg:mb-20">
      <div className="flex items-center gap-4 mb-5">
        <span className="font-mono text-xs tracking-[0.3em] text-cyanic">{index}</span>
        <span className="h-px flex-1 max-w-24 bg-line" />
        <span className="font-mono text-xs tracking-[0.3em] text-slate-500 uppercase">
          {title.split(" ")[0]}
        </span>
      </div>
      <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-50">
        {title}
      </h2>
      {blurb && (
        <p className="mt-5 max-w-2xl text-base text-slate-400 leading-relaxed">{blurb}</p>
      )}
    </div>
  </Reveal>
);

export const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export function Lightbox({ items, index, onClose, onPrev, onNext, testid }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  const item = items[index];
  return (
    <div
      data-testid={`${testid}-lightbox`}
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        data-testid={`${testid}-lightbox-close`}
        className="absolute top-5 right-5 text-white/80 hover:text-white"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X size={28} />
      </button>
      <button
        data-testid={`${testid}-lightbox-prev`}
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
      >
        <ChevronLeft size={36} />
      </button>
      <img
        src={item.src}
        alt={item.caption}
        className="max-h-[78vh] max-w-full object-contain border border-white/20"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="mt-4 font-mono text-[11px] tracking-[0.2em] text-white/80 text-center uppercase px-4">
        {index + 1} / {items.length} - {item.caption}
      </p>
      <button
        data-testid={`${testid}-lightbox-next`}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
}
