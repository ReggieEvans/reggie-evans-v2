export default function About() {
  return (
    <section id="about" className="container-section py-24">
      <p className="section-label">About</p>
      <h2 className="section-title">Hi, I&apos;m Reggie</h2>

      <div
        className="grid gap-12 items-center"
        style={{ gridTemplateColumns: "160px 1fr" }}
      >
        {/* Avatar */}
        <div
          aria-hidden
          className="w-40 h-40 rounded-[var(--radius-lg)] flex items-center justify-center text-[2.5rem] font-black text-white shrink-0 transition-all duration-400"
          style={{
            background:
              "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
            letterSpacing: "-0.04em",
          }}
        >
          RE
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4 text-base leading-relaxed text-[var(--text-muted)]">
          <p>
            I&apos;m a frontend developer with{" "}
            <strong className="text-[var(--text)] font-semibold">
              8+ years of experience
            </strong>{" "}
            building fast, responsive, and accessible web applications. I
            specialize in{" "}
            <strong className="text-[var(--text)] font-semibold">
              React, Next.js,
            </strong>{" "}
            and modern TypeScript — with a focus on user-first experiences that
            are clean under the hood and delightful on the surface.
          </p>
          <p>
            I care about the full picture: performance, accessibility, and code
            that the next developer (including future me) will actually enjoy
            working with.
          </p>
          <p>
            Outside the code, I&apos;m a dad to a curious kid who reminds me
            that problem-solving doesn&apos;t stop when you log off.
          </p>
        </div>
      </div>
    </section>
  );
}
