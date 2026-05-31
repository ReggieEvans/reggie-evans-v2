"use client";

interface GlitchProps {
  text: string;
}

export default function Glitch({ text }: GlitchProps) {
  return <span className="single-path paths opacity font">{text}</span>;
}
