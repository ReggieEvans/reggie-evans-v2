"use client";

import { useState, useEffect } from "react";

export default function ImageGallery({
  images,
  projectName,
}: {
  images: string[];
  projectName: string;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i! > 0 ? i! - 1 : images.length - 1));
  const next = () =>
    setLightboxIndex((i) => (i! < images.length - 1 ? i! + 1 : 0));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  return (
    <>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${projectName} screenshot ${i + 1}`}
            onClick={() => open(i)}
            className="w-full rounded-[var(--radius-md)] border border-[var(--border)] cursor-zoom-in object-cover hover:border-[var(--accent)] transition-all duration-250"
            style={{ maxHeight: "220px" }}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-6 text-white text-3xl font-light cursor-pointer"
            aria-label="Close lightbox"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-white text-4xl font-light cursor-pointer px-4 py-2 hover:text-[var(--accent)] transition-colors"
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={images[lightboxIndex]}
            alt={`${projectName} screenshot ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] rounded-[var(--radius-md)] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-white text-4xl font-light cursor-pointer px-4 py-2 hover:text-[var(--accent)] transition-colors"
            aria-label="Next image"
          >
            ›
          </button>

          <p className="absolute bottom-5 text-white/50 text-sm">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
