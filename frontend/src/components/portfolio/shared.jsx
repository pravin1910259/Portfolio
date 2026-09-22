import { motion } from "framer-motion";

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
        <span className="h-px flex-1 max-w-24 bg-cyanic/40" />
        <span className="font-mono text-xs tracking-[0.3em] text-slate-500 uppercase">
          {title.split(" ")[0]}
        </span>
      </div>
      <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-50">
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
