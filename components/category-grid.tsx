import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CategoryItem } from "@/lib/data";

type CategoryGridProps = {
  items: CategoryItem[];
  columns?: "three" | "mixed";
};

export function CategoryGrid({ items, columns = "three" }: CategoryGridProps) {
  return (
    <div
      className={
        columns === "mixed"
          ? "grid gap-5 md:grid-cols-2 lg:grid-cols-6"
          : "grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      }
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const span = columns === "mixed" ? (index % 5 === 0 ? "lg:col-span-3" : "lg:col-span-2") : "";
        return (
          <Link
            key={item.title}
            href={item.href}
            className={`group light-sweep relative min-h-[360px] overflow-hidden rounded-[28px] bg-[var(--graphite)] text-white shadow-[0_24px_70px_rgba(20,23,26,0.16)] ${span}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-78 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/14 backdrop-blur">
                <Icon size={20} strokeWidth={1.7} />
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">{item.description}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--graphite)] opacity-0 transition group-hover:opacity-100">
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
