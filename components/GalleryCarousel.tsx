"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { galleryImages } from "@/components/galleryData";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const loopedImages = [...galleryImages, ...galleryImages];

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const moveBy = useCallback((direction: number) => {
    if (direction < 0 && activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(galleryImages.length);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
          setActiveIndex(galleryImages.length - 1);
        });
      });

      return;
    }

    setIsTransitioning(true);
    setActiveIndex((current) => current + direction);
  }, [activeIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      moveBy(1);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [moveBy]);

  const handleTransitionEnd = () => {
    if (activeIndex >= galleryImages.length) {
      setIsTransitioning(false);
      setActiveIndex(0);
    }
  };

  return (
    <section id="galeria" className="bg-black px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className={`text-5xl uppercase tracking-wider md:text-7xl ${bebas.className}`}>
              Galeria
            </h2>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Poprzednie zdjęcia"
            onClick={() => moveBy(-1)}
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/70 text-4xl leading-none text-white transition hover:border-white hover:bg-white hover:text-black md:-left-6"
          >
            ‹
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex min-h-[26rem] gap-4 [--carousel-gap:1rem] [--carousel-visible:1] sm:[--carousel-visible:2] lg:[--carousel-visible:3] ${
                isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{
                transform: `translateX(calc(-${activeIndex} * ((100% - ((var(--carousel-visible) - 1) * var(--carousel-gap))) / var(--carousel-visible) + var(--carousel-gap))))`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedImages.map((image, index) => (
              <Link
                key={`${image.src}-${index}`}
                href="/gallery"
                className="group relative block h-[26rem] shrink-0 basis-[calc((100%_-_((var(--carousel-visible)_-_1)_*_var(--carousel-gap)))_/_var(--carousel-visible))] overflow-hidden bg-zinc-900"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                  priority={index < 3}
                />
              </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Następne zdjęcia"
            onClick={() => moveBy(1)}
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/70 text-4xl leading-none text-white transition hover:border-white hover:bg-white hover:text-black md:-right-6"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
