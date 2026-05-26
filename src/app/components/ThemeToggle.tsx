"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { mode, toggle } = useTheme();
  const isUnleashed = mode === "unleashed";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isUnleashed ? "professional" : "unleashed"} mode`}
      className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-colors duration-250 cursor-pointer text-[11px] font-bold tracking-widest uppercase whitespace-nowrap"
    >
      {/* Toggle track */}
      <span
        className="relative w-8 h-[18px] rounded-full border border-[var(--border)] transition-colors duration-300 shrink-0"
        style={{ background: isUnleashed ? "var(--accent)" : "var(--surface-2)" }}
      >
        {/* Knob */}
        <span
          className="absolute top-[2px] w-3 h-3 rounded-full bg-[var(--text)] transition-all duration-300"
          style={{ left: isUnleashed ? "14px" : "2px" }}
        />
      </span>
      <span className={isUnleashed ? "text-[var(--accent-light)]" : "text-[var(--text-muted)]"}>
        {isUnleashed ? "Unleashed" : "Professional"}
      </span>
    </button>
  );
}
