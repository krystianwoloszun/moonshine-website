"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { GalleryImage } from "@/components/galleryData";

type GalleryMasonryProps = {
  images: GalleryImage[];
};

export default function GalleryMasonry({ images }: GalleryMasonryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  const closeLightbox = () => setActiveIndex(null);

  const moveBy = useCallback((direction: number) => {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current + direction + images.length) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        moveBy(-1);
      }

      if (event.key === "ArrowRight") {
        moveBy(1);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, moveBy]);

  return (
    <>
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden bg-zinc-900 text-left"
            aria-label={`Otwórz zdjęcie ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition duration-300 hover:scale-[1.02] hover:opacity-85"
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
          onClick={closeLightbox}
        >
          <button
            type="button"
            aria-label="Zamknij podgląd"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center border border-white/30 bg-black/70 text-4xl leading-none text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            ×
          </button>

          <button
            type="button"
            aria-label="Poprzednie zdjęcie"
            onClick={(event) => {
              event.stopPropagation();
              moveBy(-1);
            }}
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/70 text-4xl leading-none text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            ‹
          </button>

          <div
            className="relative h-full max-h-[88vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="Następne zdjęcie"
            onClick={(event) => {
              event.stopPropagation();
              moveBy(1);
            }}
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/70 text-4xl leading-none text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
