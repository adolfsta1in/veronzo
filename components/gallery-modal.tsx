"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import type { ImageItem } from "@/lib/data";

type GalleryModalProps = {
  items: ImageItem[];
};

export function GalleryModal({ items }: GalleryModalProps) {
  const [active, setActive] = useState<ImageItem | null>(null);

  return (
    <>
      <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setActive(item)}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[28px] bg-white text-left shadow-[0_18px_58px_rgba(20,23,26,0.1)]"
          >
            <div className={`relative ${index % 4 === 0 ? "aspect-[3/4]" : index % 4 === 1 ? "aspect-[5/4]" : "aspect-[4/3]"}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">{item.category}</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold leading-none">
                  {item.title}
                </h3>
              </div>
            </div>
          </button>
        ))}
      </div>
      {active ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/78 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div className="relative h-[82dvh] w-full max-w-6xl overflow-hidden rounded-[28px] bg-black" onClick={(event) => event.stopPropagation()}>
            <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain" />
            <button
              type="button"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--graphite)]"
              onClick={() => setActive(null)}
              aria-label="Закрыть"
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
