"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = ["Projects", "Skills", "About", "Contact"];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-[60px] px-8 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md transition-colors duration-400">
      <Link
        href="/"
        className="text-[var(--text)] font-black uppercase tracking-widest text-sm no-underline font-heading"
      >
        RE
      </Link>

      <div className="flex items-center gap-6">
        <div className="flex gap-6 text-[13px] font-medium">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200 no-underline"
            >
              {item}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
