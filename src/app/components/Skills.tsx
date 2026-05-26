import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="container-section py-24">
      <p className="section-label">Skills</p>
      <h2 className="section-title">Tech Stack</h2>

      <div className="grid gap-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {skillCategories.map((cat) => (
          <div key={cat.label}>
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-5 transition-colors duration-400">
              {cat.label}
            </p>

            <ul className="flex flex-col gap-2.5 list-none">
              {cat.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2.5 text-[15px] text-[var(--text)]">
                  <span
                    aria-hidden
                    className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-400"
                    style={{ background: "var(--accent)" }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
