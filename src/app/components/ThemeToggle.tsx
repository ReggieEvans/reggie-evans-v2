"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { mode, toggle } = useTheme();
  const isUnleashed = mode === "unleashed";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isUnleashed ? "professional" : "unleashed"} mode`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "100px",
        padding: "6px 14px 6px 10px",
        cursor: "pointer",
        transition: "border-color 0.25s ease",
        color: "var(--text-muted)",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontFamily: "inherit",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--border)";
      }}
    >
      {/* Track */}
      <span
        style={{
          position: "relative",
          width: "32px",
          height: "18px",
          background: isUnleashed ? "var(--accent)" : "var(--surface-2)",
          border: "1px solid var(--border)",
          borderRadius: "100px",
          transition: "background 0.3s ease",
          flexShrink: 0,
        }}
      >
        {/* Knob */}
        <span
          style={{
            position: "absolute",
            top: "2px",
            left: isUnleashed ? "14px" : "2px",
            width: "12px",
            height: "12px",
            background: "var(--text)",
            borderRadius: "50%",
            transition: "left 0.3s ease",
          }}
        />
      </span>
      <span style={{ color: isUnleashed ? "var(--accent-light)" : "var(--text-muted)" }}>
        {isUnleashed ? "Unleashed" : "Professional"}
      </span>
    </button>
  );
}
