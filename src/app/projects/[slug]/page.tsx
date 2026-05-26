import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../data/projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Reggie Evans`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="max-w-[860px] mx-auto px-8 py-20">
      <Link href="/#projects" className="back-link">
        ← Back to projects
      </Link>

      <p className="section-label mt-12">{project.type}</p>
      <h1
        className="font-heading font-black text-[var(--text)] leading-none mb-5"
        style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", letterSpacing: "-0.03em" }}
      >
        {project.name}
      </h1>

      <p className="text-[17px] text-[var(--text-muted)] leading-relaxed max-w-xl mb-12">
        {project.longDescription}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-16">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[13px] font-medium px-3 py-1 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="divider mb-16" />

      <p className="section-label">Features</p>
      <h2 className="text-[28px] font-bold text-[var(--text)] mb-8">What it does</h2>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {project.features.map((feature) => (
          <div key={feature.title} className="card p-6">
            <h3 className="text-base font-bold text-[var(--text)] mb-2">{feature.title}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {(project.liveUrl || project.githubUrl || project.videoUrl) && (
        <>
          <div className="divider my-16" />
          <div className="flex gap-3 flex-wrap">
            {project.liveUrl && (
              <a className="btn-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Site →
              </a>
            )}
            {project.githubUrl && (
              <a className="btn-outline" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            )}
            {project.videoUrl && (
              <a className="btn-outline" href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                Watch Demo
              </a>
            )}
          </div>
        </>
      )}
    </main>
  );
}
