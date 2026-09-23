import { useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Samples from "@/components/portfolio/SamplesV2";
import DetailPage from "@/components/portfolio/Detail";
import { Toaster } from "@/components/ui/sonner";

function MainPage() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const scrollTo = useCallback((hash) => {
    const el = document.querySelector(hash);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -64 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-slate-100 font-dmsans antialiased overflow-x-clip">
      <div className="fixed inset-0 blueprint-grid pointer-events-none z-0" />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(29, 78, 216, 0.05) 0%, rgba(242, 239, 231, 0.92) 70%)",
        }}
      />
      <div className="relative z-10">
        <Navbar onNavigate={scrollTo} />
        <main>
          <Hero onNavigate={scrollTo} />
          <Marquee />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer onNavigate={scrollTo} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:slug" element={<DetailPage type="project" />} />
        <Route path="/experience/:slug" element={<DetailPage type="experience" />} />
        <Route path="/samples" element={<Samples />} />
      </Routes>
      <Toaster theme="light" position="bottom-right" />
    </BrowserRouter>
  );
}
