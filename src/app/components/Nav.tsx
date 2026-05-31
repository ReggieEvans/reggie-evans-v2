"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LogoRE from "../../../public/logo-RE.png";
import Image from "next/image";
import Glitch from "./Glitch";
import { useTheme } from "../context/ThemeContext";

const navLinks = ["Projects", "Skills", "About", "Contact"];

export default function Nav() {
  const { mode } = useTheme();
  const isUnleashed = mode === "unleashed";

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md transition-colors duration-400">
      <div className="container-section-nav h-[60px]">
        <Link href="/" className="no-underline flex items-center">
          {isUnleashed ? (
            <div className="hero glitch text-2xl">
              <Glitch text="RE" />
            </div>
          ) : (
            <Image
              src={LogoRE}
              alt="Reggie Evans Logo"
              width={42}
              height={34}
            />
          )}
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
      </div>
    </nav>
  );
}
