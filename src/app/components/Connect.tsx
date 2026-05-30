"use client";

export default function Connect() {
  return (
    <section id="contact" className="container-section py-24 text-center">
      <p className="section-label">Contact</p>
      <h2 className="section-title uppercase">Let&apos;s Connect</h2>

      <p className="text-[17px] text-[var(--text-muted)] leading-relaxed max-w-md mx-auto mb-10">
        Open to full-time roles, contract work, and freelance projects. Whether
        it&apos;s joining a great team or building something new — let&apos;s
        talk.
      </p>

      <a className="btn-primary inline-flex" href="mailto:revans911@gmail.com">
        revans911@gmail.com
      </a>

      <div className="flex justify-center gap-3 mt-7">
        <a
          href="https://linkedin.com/in/reggie-evans"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="w-11 h-11 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-muted)] no-underline text-lg font-bold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-250"
        >
          in
        </a>
        <a
          href="https://github.com/reggie-evans"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="w-11 h-11 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-muted)] no-underline text-sm font-bold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-250"
        >
          gh
        </a>
      </div>
    </section>
  );
}
