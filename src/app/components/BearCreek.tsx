import Image from "next/image";
import bearCreekLogo from "../../../public/BEAR_CREEK_LOGO.png";

export default function BearCreek() {
  return (
    <section className="container-section py-24">
      <p className="section-label">Currently</p>
      <h2 className="section-title uppercase">Bear Creek Web Studio</h2>

      <div className="card flex flex-col md:flex-row gap-6 items-start p-8">
        <div className="flex justify-center md:justify-start w-full md:w-auto shrink-0">
          <Image
            src={bearCreekLogo}
            alt="Bear Creek Web Studio"
            width={144}
            height={144}
          />
        </div>

        <div>
          <span
            className="inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--accent-light)] mb-3 transition-all duration-400"
            style={{ background: "var(--accent-glow)" }}
          >
            Freelance &nbsp;·&nbsp; Owner &amp; Developer
          </span>

          <h3 className="text-xl font-bold text-[var(--text)] mb-2">
            Bear Creek Web Studio
          </h3>

          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-lg">
            Building custom web solutions for small businesses. Currently
            accepting new clients. If you need a modern, performant website or
            web app,{" "}
            <a
              href="https://bearcreekwebstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-light)] font-medium no-underline hover:underline"
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
