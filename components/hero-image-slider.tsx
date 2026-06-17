"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
};

type HeroImageSliderProps = {
  slides: HeroSlide[];
};

export function HeroImageSlider({ slides }: HeroImageSliderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[32px] shadow-[0_26px_80px_rgba(20,23,26,0.15)] md:min-h-[520px]">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, 55vw"
          className={`object-cover transition duration-1000 ease-out ${
            index === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/8" />
      {slides.length > 1 ? (
        <div className="absolute bottom-5 left-5 flex gap-2">
          {slides.map((slide, index) => (
            <span
              key={slide.src}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === active ? "w-9 bg-white" : "w-3 bg-white/45"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
