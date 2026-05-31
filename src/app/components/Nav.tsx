"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between h-[60px] border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md transition-colors duration-400"
        style={{ padding: "0 2rem" }}
      >
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

        <div className="hidden md:flex items-center gap-6">
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

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
          >
            <span
              className="block w-5 h-[2px] bg-[var(--text)] transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-[2px] bg-[var(--text)] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[2px] bg-[var(--text)] transition-all duration-300 origin-center"
              style={{
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: menuOpen ? "all" : "none",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={close}
        />

        <div
          className="absolute top-[60px] left-0 right-0 border-b border-[var(--border)] flex flex-col py-6"
          style={{
            background: "var(--bg)",
            transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
            transition: "transform 0.3s ease",
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={close}
              className="text-[var(--text)] text-lg font-medium no-underline px-8 py-3 hover:text-[var(--accent)] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
