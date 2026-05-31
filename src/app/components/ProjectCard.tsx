"use client";

import Link from "next/link";
import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="no-underline">
      <article className="card flex flex-col gap-4 p-7 h-full cursor-pointer hover:-translate-y-1 hover:border-[var(--accent)] transition-all duration-250">
        {/* Thumbnail */}
        {project.featuredImage ? (
          <img
            src={project.featuredImage}
            alt={`${project.name} screenshot`}
            className="w-full h-32 rounded-[var(--radius-md)] object-cover shrink-0"
          />
        ) : (
          <div className="w-full h-32 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] flex items-center justify-center text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--text-muted)] shrink-0">
            {project.name}
          </div>
        )}

        <div className="flex flex-col gap-2 flex-1">
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--accent)] transition-colors duration-400">
            {project.type}
          </p>

          <h3 className="text-lg font-bold text-[var(--text)] leading-snug">
            {project.name}
          </h3>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2 py-0.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-muted)]"
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
