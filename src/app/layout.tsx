import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reggie Evans — Frontend Developer",
  description:
    "Frontend Developer with 6+ years of experience building fast, accessible web apps with React, Next.js, and TypeScript. Open to full-time roles and freelance work.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Reggie Evans" }],
  openGraph: {
    title: "Reggie Evans — Frontend Developer",
    description:
      "Frontend Developer with 6+ years of experience. React, Next.js, TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
