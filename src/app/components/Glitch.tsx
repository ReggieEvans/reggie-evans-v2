"use client";

interface GlitchProps {
  text: string;
}

export default function Glitch({ text }: GlitchProps) {
  return (
    <div className="layers" data-text={text}>
      <span className="single-path paths opacity font">{text}</span>
    </div>
  );
}
