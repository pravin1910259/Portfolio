import { MARQUEE_ITEMS } from "@/data";

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      data-testid="tech-marquee"
      className="relative border-y border-line/70 bg-panel/50 py-5 overflow-hidden"
    >
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-xs sm:text-sm tracking-[0.3em] text-slate-500 whitespace-nowrap"
          >
            <span className="px-6">{item}</span>
            <span className="text-cyanic/50">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
