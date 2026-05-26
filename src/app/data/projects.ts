export interface Project {
  slug: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  images: string[];
  features: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    slug: "fantasy-edge",
    name: "Fantasy Edge",
    type: "Full Stack App",
    description:
      "Fantasy football lineup optimizer with slate management, scouting hub, and bankroll tracker.",
    longDescription:
      "A comprehensive daily fantasy sports platform built for serious players. Features real-time slate management, a proprietary lineup optimizer, and a bankroll tracker to manage entries across contests.",
    stack: ["Next.js", "TypeScript", "Supabase", "shadcn/ui", "Tailwind CSS"],
    images: [],
    features: [
      {
        title: "Lineup Optimizer",
        description: "Build optimal lineups based on projections and ownership data.",
      },
      {
        title: "Slate Management",
        description: "Track and manage slates across multiple contests and sites.",
      },
      {
        title: "Scouting Hub",
        description: "Research players with consolidated stats and matchup data.",
      },
      {
        title: "Bankroll Tracker",
        description: "Monitor your contest entries, results, and profitability over time.",
      },
    ],
  },
  {
    slug: "gamestack",
    name: "GameStack",
    type: "Full Stack App",
    description:
      "Video game library tracker with progress management and a clean dashboard UI.",
    longDescription:
      "A personal game library manager that lets you track your backlog, log progress, and rate completed games. Built with a focus on clean UX and fast navigation.",
    stack: ["React", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS"],
    images: [],
    features: [
      {
        title: "Library Management",
        description: "Organize your games by status: playing, completed, backlog, dropped.",
      },
      {
        title: "Progress Tracking",
        description: "Log hours played and track completion percentage per game.",
      },
      {
        title: "Dashboard",
        description: "At-a-glance stats on your gaming habits and completion rate.",
      },
      {
        title: "Search & Filter",
        description: "Quickly find games by title, genre, or platform.",
      },
    ],
  },
  {
    slug: "my-dynasty-hub",
    name: "My Dynasty Hub",
    type: "Next.js App",
    description:
      "CFB26 dynasty team picker and tracker, deployed to production.",
    longDescription:
      "A tool built for college football dynasty mode players. Helps you pick and track your dynasty team with filtered browsing, ratings, and conference breakdowns.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    images: [],
    features: [
      {
        title: "Team Browser",
        description: "Filter teams by conference, rating, and prestige.",
      },
      {
        title: "Dynasty Tracker",
        description: "Log your dynasty progress and season results.",
      },
      {
        title: "Comparison Tool",
        description: "Compare programs side-by-side across key attributes.",
      },
      {
        title: "Mobile Friendly",
        description: "Fully responsive — use it on your phone while you play.",
      },
    ],
  },
];
