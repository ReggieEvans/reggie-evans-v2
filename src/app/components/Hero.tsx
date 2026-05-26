export default function Hero() {
  return (
    <section
      className="cyber-grid"
      style={{
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "80px 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          transition: "background 0.4s ease",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="section-label" style={{ marginBottom: "1.5rem" }}>
          Available for hire
        </p>

        <h1
          className="glitch"
          data-text="Reggie Evans"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 800,
            fontFamily: "var(--font-display)",
            letterSpacing: "0.04em",
            lineHeight: 1,
            color: "var(--text)",
            marginBottom: "1.25rem",
            transition: "color 0.4s ease",
            textTransform: "uppercase",
          }}
        >
          Reggie Evans
        </h1>

        <p
          style={{
            fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
            color: "var(--text-muted)",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
            transition: "color 0.4s ease",
          }}
        >
          Frontend Developer&nbsp;&nbsp;·&nbsp;&nbsp;8+ Years
        </p>

        <div
          style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}
        >
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
