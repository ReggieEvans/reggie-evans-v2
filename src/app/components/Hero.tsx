"use client";

import Glitch from "./Glitch";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { mode } = useTheme();
  const isUnleashed = mode === "unleashed";

  return (
    <section className="cyber-grid relative min-h-[calc(100vh-60px)] flex flex-col justify-center items-center text-center px-8 py-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none transition-all duration-400"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <p className="section-label mb-6">Available for hire</p>

        {isUnleashed ? (
          <div
            className="hero glitch mb-10"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
          >
            <Glitch text="REGGIE EVANS" />
          </div>
        ) : (
          <h1
            className="font-heading font-black uppercase leading-none text-[var(--text)] mb-5 transition-colors duration-400"
            style={{
              fontSize: "clamp(3rem, 10vw, 7rem)",
              letterSpacing: "0.01em",
            }}
          >
            Reggie Evans
          </h1>
        )}

        <p
          className="font-heading font-bold uppercase tracking-[0.12em] text-[var(--text-muted)] mb-10 transition-colors duration-400"
          style={{ fontSize: "clamp(0.75rem, 3vw, 1.125rem)" }}
        >
          Frontend Developer&nbsp;&nbsp;·&nbsp;&nbsp;8+ Years
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a className="btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn-outline" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
