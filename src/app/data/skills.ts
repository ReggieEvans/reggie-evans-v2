export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "Responsive Design",
    ],
  },
  {
    label: "Backend & Data",
    skills: ["Next API", "Node.js", "REST APIs", "Supabase", "MongoDB"],
  },
  {
    label: "Tools & Platform",
    skills: ["Git / GitHub", "Postman", "Jira", "Figma", "CI/CD"],
  },
];
