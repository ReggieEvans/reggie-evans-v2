export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <p className="section-label">About</p>
      <h2 className="section-title">Hi, I&apos;m Reggie</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "160px 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Avatar */}
        <div
          aria-hidden
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "var(--radius-lg)",
            background:
              "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.04em",
            flexShrink: 0,
            transition: "background 0.4s ease",
          }}
        >
          RE
        </div>

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--text-muted)",
          }}
        >
          <p>
            I&apos;m a frontend developer with{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              8+ years of experience
            </strong>{" "}
            building fast, responsive, and accessible web applications. I specialize in{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              React, Next.js,
            </strong>{" "}
            and modern TypeScript — with a focus on user-first experiences that are clean
            under the hood and delightful on the surface.
          </p>
          <p>
            I care about the full picture: performance, accessibility, and code that the
            next developer (including future me) will actually enjoy working with.
          </p>
          <p>
            Outside the code, I&apos;m a dad to a curious kid who reminds me that
            problem-solving doesn&apos;t stop when you log off.
          </p>
        </div>
      </div>
    </section>
  );
}
