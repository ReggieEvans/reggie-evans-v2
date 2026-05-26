import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <p className="section-label">Skills</p>
      <h2 className="section-title">Tech Stack</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {skillCategories.map((cat) => (
          <div key={cat.label}>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.25rem",
                transition: "color 0.4s ease",
              }}
            >
              {cat.label}
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontSize: "0.9375rem",
                    color: "var(--text)",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                      transition: "background 0.4s ease",
                    }}
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
