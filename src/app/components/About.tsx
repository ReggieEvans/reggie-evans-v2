import Image from "next/image";
import profilePhoto from "../../../public/profile-photo.jpg";

export default function About() {
  return (
    <section id="about" className="container-section py-24">
      <p className="section-label">About</p>
      <h2 className="section-title uppercase">Hi, I&apos;m Reggie</h2>

      <div
        className="flex flex-col md:grid gap-12 items-center"
        style={{ gridTemplateColumns: "240px 1fr" }}
      >
        <div className="flex justify-center md:justify-start">
          <Image
            src={profilePhoto}
            alt="Reggie Evans"
            width={200}
            height={200}
            className="rounded-[var(--radius-lg)]"
          />
        </div>

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
            and modern TypeScript with a focus on user-first experiences that
            are clean and beautiful.
          </p>
          <p>
            Outside the code, I&apos;m a dad to a curious kid who reminds me
            that problem-solving doesn&apos;t stop when you log off. Whether I'm
            shipping features or building blanket forts, I&apos;m always
            learning, creating, and building.
          </p>
        </div>
      </div>
    </section>
  );
}
