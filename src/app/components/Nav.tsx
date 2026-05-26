"use client"
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(10, 10, 15, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
        height: "60px",
        transition: "background 0.4s ease",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "1.1rem",
          fontWeight: 800,
          letterSpacing: "0.15em",
          fontFamily: "var(--font-display)",
          color: "var(--text)",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        RE
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            fontSize: "0.8125rem",
            fontWeight: 500,
          }}
        >
          {["Projects", "Skills", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "var(--text-muted)")
              }
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
