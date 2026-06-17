"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  href?: string;
  cta?: string;
};

type HeroImageSliderProps = {
  slides: HeroSlide[];
};

export function HeroImageSlider({ slides }: HeroImageSliderProps) {
  const [active, setActive] = useState(0);
  const activeSlide = slides[active];

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
    <div className="group relative min-h-[360px] overflow-hidden rounded-[32px] shadow-[0_26px_80px_rgba(20,23,26,0.15)] md:min-h-[520px]">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/18 to-white/8" />
      {activeSlide.title ? (
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
          <div className="max-w-xl text-white transition duration-500">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/64">VERONZO</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-none md:text-5xl">
              {activeSlide.title}
            </h2>
            {activeSlide.description ? (
              <p className="mt-3 max-w-md text-sm leading-6 text-white/76">{activeSlide.description}</p>
            ) : null}
            {activeSlide.href ? (
              <Link
                href={activeSlide.href}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--graphite)] transition hover:bg-white/88 active:translate-y-px"
              >
                {activeSlide.cta ?? "Перейти в раздел"}
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
      {slides.length > 1 ? (
        <div className="absolute right-5 top-5 flex gap-2">
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
