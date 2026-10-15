import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, MousePointer2 } from "lucide-react";
import { MaskedLine } from "./shared";
import { PROFILE } from "@/data";

function GearCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;
    const mouse = { x: 0, y: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width - 0.5;
      mouse.y = (e.clientY - r.top) / r.height - 0.5;
    };
    canvas.addEventListener("mousemove", onMove);

    const gear = (cx, cy, r, teeth, rot, color, alpha) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      const inner = r * 0.82;
      for (let i = 0; i < teeth * 2; i++) {
        const a = (i / (teeth * 2)) * Math.PI * 2;
        const rad = i % 2 === 0 ? r : inner;
        const x = Math.cos(a) * rad;
        const y = Math.sin(a) * rad;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.12, 0, Math.PI * 2);
      ctx.stroke();
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * r * 0.12, Math.sin(a) * r * 0.12);
        ctx.lineTo(Math.cos(a) * r * 0.45, Math.sin(a) * r * 0.45);
        ctx.stroke();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    const draw = () => {
      t += 0.004;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const px = mouse.x * 14;
      const py = mouse.y * 14;
      const cx = w / 2 + px;
      const cy = h / 2 + py;
      const R = Math.min(w, h) * 0.3;

      ctx.strokeStyle = "rgba(29,78,216,0.3)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.45, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = "rgba(29,78,216,0.22)";
      ctx.beginPath();
      ctx.moveTo(cx - R * 1.7, cy);
      ctx.lineTo(cx + R * 1.7, cy);
      ctx.moveTo(cx, cy - R * 1.7);
      ctx.lineTo(cx, cy + R * 1.7);
      ctx.stroke();

      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * Math.PI * 2 + t * 0.4;
        const r1 = R * 1.52;
        const r2 = R * (i % 6 === 0 ? 1.64 : 1.58);
        ctx.strokeStyle = "rgba(29,78,216,0.4)";
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
        ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
        ctx.stroke();
      }

      gear(cx, cy, R, 18, t, "#1D4ED8", 0.85);
      gear(cx + R * 1.28, cy - R * 0.9, R * 0.42, 10, -t * 1.8 + 0.3, "#E8590C", 0.8);
      gear(cx - R * 1.2, cy + R * 1.05, R * 0.34, 9, -t * 2.2, "#1D4ED8", 0.5);

      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(91,107,133,0.9)";
      ctx.fillText("Ø 120  H7/g6", cx + R * 1.15, cy + R * 1.25);
      ctx.fillText("SCALE 1:1", 14, h - 34);
      ctx.fillText(`RPM ${(t * 57.3).toFixed(1)}`, 14, h - 18);
      ctx.fillStyle = "rgba(232,89,12,0.9)";
      ctx.fillText("FIG 1.0 - SPUR GEAR ASSEMBLY / WIRE", 14, 22);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      data-testid="hero-gear-canvas"
      className="w-full h-full block cursor-crosshair"
    />
  );
}

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <MaskedLine delay={0.25}>
            <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyanic">
              {PROFILE.affiliation.toUpperCase()}
            </span>
          </MaskedLine>

          <h1 className="mt-6 font-syne font-extrabold tracking-tight leading-[0.95]">
            <MaskedLine delay={0.4} className="pr-3">
              <span className="text-4xl sm:text-6xl lg:text-7xl text-slate-50">DESIGN.</span>
            </MaskedLine>
            <MaskedLine delay={0.55} className="pr-3">
              <span className="text-4xl sm:text-6xl lg:text-7xl text-stroke-cyan">SIMULATE.</span>
            </MaskedLine>
            <MaskedLine delay={0.7} className="pr-3">
              <span className="text-4xl sm:text-6xl lg:text-7xl text-slate-50">
                BUILD<span className="text-ember">.</span>
              </span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            <span className="text-slate-100 font-medium">{PROFILE.name}</span> - {PROFILE.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-btn-explore-projects"
              onClick={() => onNavigate("#projects")}
              className="group flex items-center gap-3 bg-cyanic text-obsidian font-mono text-xs tracking-[0.2em] px-7 py-4 font-semibold hover:bg-slate-50 transition-colors"
            >
              EXPLORE PROJECTS
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a
              data-testid="hero-btn-download-resume"
              href={PROFILE.resumeUrl}
              download="Pravin_Salla_Resume.pdf"
              className="flex items-center gap-3 border border-line text-slate-300 font-mono text-xs tracking-[0.2em] px-7 py-4 hover:border-cyanic hover:text-cyanic transition-colors"
            >
              <FileDown size={15} />
              DOWNLOAD RESUME
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line/60 border border-line/60"
          >
            {PROFILE.metrics.map((m) => (
              <div key={m.label} className="bg-obsidian/90 px-4 py-5">
                <div className="font-syne text-xl sm:text-2xl font-bold text-cyanic">{m.value}</div>
                <div className="mt-1 font-mono text-[0.5625rem] sm:text-[0.625rem] tracking-[0.18em] text-slate-500">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative pt-12 pl-6 sm:pl-10"
        >
          <div className="absolute top-0 left-0 z-10 w-40 h-40 sm:w-52 sm:h-52 border border-line bg-panel blueprint-grid-fine shadow-xl">
            <GearCanvas />
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 font-mono text-[0.5rem] tracking-widest text-slate-500">
              <MousePointer2 size={10} className="text-cyanic" />
              MOVE CURSOR
            </div>
          </div>
          <div
            data-testid="hero-portrait-card"
            className="corner-ticks relative border border-line bg-panel/60 w-full max-w-md mx-auto lg:ml-auto aspect-[4/5] overflow-hidden"
          >
            <img
              data-testid="hero-portrait-image"
              src="/pravin-portrait.jpg"
              alt="Pravin Salla - Mechanical Engineer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-5 pb-4 pt-16 flex items-end justify-between">
              <div>
                <div className="font-syne font-bold text-white text-lg leading-tight">Pravin Salla</div>
                <div className="font-mono text-[0.5625rem] tracking-[0.25em] text-white/70 mt-1">
                  MECHANICAL ENGINEER - DAVIS, CA
                </div>
              </div>
              <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-white/60 border border-white/30 px-2 py-1">
                IMG.00
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
