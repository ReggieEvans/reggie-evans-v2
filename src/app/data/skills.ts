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
      "TypeScript",
      "Tailwind CSS",
      "Angular",
      "shadcn/ui",
    ],
  },
  {
    label: "Backend & Data",
    skills: ["Supabase", "MongoDB", "Node.js", "REST APIs"],
  },
  {
    label: "Tools & Platform",
    skills: ["Git / GitHub", "Vercel", "Netlify", "Figma", "VS Code"],
  },
];
