export interface Project {
  slug: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  stack: string[];
  links: { github: string; demo?: string };
  featuredImage?: string;
  images: string[];
  features: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    slug: "fantasy-edge",
    name: "Fantasy Edge",
    type: "Full Stack App",
    description:
      "Fantasy football lineup optimizer with slate management, scouting hub and much more.",
    longDescription:
      "A comprehensive fantasy sports platform. Features real-time slate management, scouting hub, a lineup optimizer and more. Built with a focus on clean UX and fast navigation.",
    stack: ["Next.js", "TypeScript", "Supabase", "shadcn/ui", "Tailwind CSS"],
    links: { github: "https://github.com/ReggieEvans/fantasy-edge" },
    images: [
      "/fantasy-edge/fantasy-edge_dashboard.png",
      "/fantasy-edge/fantasy-edge_matchups.png",
      "/fantasy-edge/fantasy-edge_scouting.png",
      "/fantasy-edge/fantasy-edge_targeting.png",
      "/fantasy-edge/fantasy-edge_slate-manager.png",
      "/fantasy-edge/fantasy-edge_pool.png",
      "/fantasy-edge/fantasy-edge_study-hub.png",
    ],
    featuredImage: "/fantasy-edge/fantasy-edge_dashboard.png",
    features: [
      {
        title: "Lineup Optimizer",
        description:
          "Build optimal lineups based on projections and ownership data.",
      },
      {
        title: "Slate Management",
        description:
          "Track and manage slates across multiple contests and sites.",
      },
      {
        title: "Scouting Hub",
        description:
          "Research players with consolidated stats and matchup data.",
      },
      {
        title: "Bankroll Tracker",
        description:
          "Monitor your contest entries, results, and profitability over time.",
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
    links: {
      github: "https://github.com/ReggieEvans/game-stack",
      demo: "https://game-stack-taupe.vercel.app/",
    },
    images: [
      "/gamestack/gamestack-screenshot-1.png",
      "/gamestack/gamestack-screenshot-2.png",
      "/gamestack/gamestack-screenshot-3.png",
      "/gamestack/gamestack-screenshot-4.png",
    ],
    featuredImage: "/gamestack/gamestack-screenshot-1.png",
    features: [
      {
        title: "Library Management",
        description:
          "Organize your games by status: playing, completed, backlog, dropped.",
      },
      {
        title: "Progress Tracking",
        description:
          "Log hours played and track completion percentage per game.",
      },
      {
        title: "Dashboard",
        description:
          "At-a-glance stats on your gaming habits and completion rate.",
      },
      {
        title: "Search & Filter",
        description: "Quickly find games by title, genre, or platform.",
      },
    ],
  },
  {
    slug: "ask-a-pdf",
    name: "Ask a PDF",
    type: "RAG AI Chatbot",
    description:
      "A RAG (Retrieval-Augmented Generation) tool that lets you upload a PDF and ask questions about it.",
    longDescription:
      "A RAG (Retrieval-Augmented Generation) tool that lets you upload a PDF and ask questions about it. It uses the Gemini API to generate answers based on the content of the PDF file.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
    links: {
      github: "https://github.com/ReggieEvans/ask-a-pdf",
      demo: "https://ask-a-pdf-demo.vercel.app",
    },
    images: [
      "/ask-a-pdf/answer.png",
      "/ask-a-pdf/mobile.png",
      "/ask-a-pdf/no-answer.png",
    ],
    featuredImage: "/ask-a-pdf/answer.png",
    features: [
      {
        title: "PDF Upload",
        description: "Upload a PDF file to start asking questions.",
      },
      {
        title: "AI Chatbot",
        description: "Ask questions about the PDF file and get answers.",
      },
      {
        title: "Generates Questions",
        description:
          "The chatbot generates possible questions based on the content of the PDF file.",
      },
      {
        title: "Citations",
        description: "Cite the source of the answer in the chat.",
      },
    ],
  },
];
