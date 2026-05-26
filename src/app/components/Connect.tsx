"use client"
export default function Connect() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let&apos;s Connect</h2>

      <p
        style={{
          fontSize: "1.0625rem",
          color: "var(--text-muted)",
          lineHeight: 1.8,
          maxWidth: "480px",
          margin: "0 auto 2.5rem",
        }}
      >
        Open to full-time roles, contract work, and freelance projects.
        Whether it&apos;s joining a great team or building something new —
        let&apos;s talk.
      </p>

      <a
        className="btn-primary"
        href="mailto:revans911@gmail.com"
        style={{ display: "inline-flex" }}
      >
        revans911@gmail.com
      </a>

      {/* Social links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.75rem",
          marginTop: "1.75rem",
        }}
      >
        <a
          href="https://linkedin.com/in/reggie-evans"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="social-icon-link"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "1.125rem",
            transition: "border-color 0.25s ease, color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "var(--accent)";
            el.style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "var(--border)";
            el.style.color = "var(--text-muted)";
          }}
        >
          in
        </a>

        <a
          href="https://github.com/reggie-evans"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 700,
            transition: "border-color 0.25s ease, color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "var(--accent)";
            el.style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "var(--border)";
            el.style.color = "var(--text-muted)";
          }}
        >
          gh
        </a>
      </div>
    </section>
  );
}
