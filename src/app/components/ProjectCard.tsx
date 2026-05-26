"use client"
import Link from "next/link";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{ textDecoration: "none" }}
    >
      <article
        className="card"
        style={{
          padding: "1.75rem",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
          (e.currentTarget as HTMLElement).style.borderColor =
            "var(--accent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.borderColor =
            "var(--border)";
        }}
      >
        {/* Image placeholder / thumbnail */}
        <div
          style={{
            width: "100%",
            height: "130px",
            borderRadius: "var(--radius-md)",
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            flexShrink: 0,
          }}
        >
          {project.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              transition: "color 0.4s ease",
            }}
          >
            {project.type}
          </p>

          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--text)",
              lineHeight: 1.3,
            }}
          >
            {project.name}
          </h3>

          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              lineHeight: 1.65,
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {/* Stack tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginTop: "0.5rem",
            }}
          >
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  padding: "3px 8px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
