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
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "80px 2rem" }}>

      {/* Back link — hover handled via CSS class, no event handlers needed */}
      <Link href="/#projects" className="back-link">
        ← Back to projects
      </Link>

      <p className="section-label" style={{ marginTop: "3rem" }}>{project.type}</p>
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          marginBottom: "1.25rem",
          lineHeight: 1.1,
        }}
      >
        {project.name}
      </h1>

      <p
        style={{
          fontSize: "1.0625rem",
          color: "var(--text-muted)",
          lineHeight: 1.75,
          maxWidth: "600px",
          marginBottom: "3rem",
        }}
      >
        {project.longDescription}
      </p>

      {/* Stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "4rem" }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              padding: "5px 12px",
              borderRadius: "var(--radius-sm)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}
      <div className="divider" style={{ marginBottom: "4rem" }} />

      <p className="section-label">Features</p>
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "2rem",
        }}
      >
        What it does
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {project.features.map((feature) => (
          <div key={feature.title} className="card" style={{ padding: "1.5rem" }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "0.5rem",
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Links */}
      {(project.liveUrl || project.githubUrl || project.videoUrl) && (
        <>
          <div className="divider" style={{ margin: "4rem 0 3rem" }} />
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
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
