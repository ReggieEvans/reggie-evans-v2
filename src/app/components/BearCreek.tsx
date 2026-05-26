export default function BearCreek() {
  return (
    <section className="container-section pb-24">
      <p className="section-label">Currently</p>
      <h2 className="section-title">Bear Creek Web Studio</h2>

      <div className="card flex gap-6 items-start p-8">
        {/* Icon */}
        <div
          aria-hidden
          className="w-13 h-13 rounded-[var(--radius-md)] border border-[var(--border)] flex items-center justify-center shrink-0 text-2xl"
          style={{ background: "var(--accent-glow)" }}
        >
          🌲
        </div>

        <div>
          <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--accent-light)] mb-3 transition-all duration-400"
            style={{ background: "var(--accent-glow)" }}
          >
            Freelance &nbsp;·&nbsp; Owner &amp; Developer
          </span>

          <h3 className="text-xl font-bold text-[var(--text)] mb-2">
            Bear Creek Web Studio
          </h3>

          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-lg">
            Building custom web solutions for small businesses. Currently
            accepting new clients — if you need a modern, performant website or
            web app,{" "}
            <a href="#contact" className="text-[var(--accent-light)] font-medium no-underline hover:underline">
              let&apos;s talk
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
