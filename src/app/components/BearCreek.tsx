export default function BearCreek() {
  return (
    <section
      style={{
        padding: "0 2rem 100px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <p className="section-label">Currently</p>
      <h2 className="section-title">Bear Creek Web Studio</h2>

      <div
        className="card"
        style={{
          padding: "2rem 2.5rem",
          display: "flex",
          gap: "1.5rem",
          alignItems: "flex-start",
        }}
      >
        {/* Icon */}
        <div
          aria-hidden
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "var(--radius-md)",
            background: "var(--accent-glow)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: "1.5rem",
          }}
        >
          🌲
        </div>

        <div>
          <span
            style={{
              display: "inline-block",
              background: "var(--accent-glow)",
              border: "1px solid var(--border)",
              color: "var(--accent-light)",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: "100px",
              marginBottom: "0.75rem",
              transition: "all 0.4s ease",
            }}
          >
            Freelance &nbsp;·&nbsp; Owner &amp; Developer
          </span>

          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "0.625rem",
            }}
          >
            Bear Creek Web Studio
          </h3>

          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "520px",
            }}
          >
            Building custom web solutions for small businesses. Currently
            accepting new clients — if you need a modern, performant website or
            web app,{" "}
            <a
              href="#contact"
              style={{
                color: "var(--accent-light)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              let&apos;s talk
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
