"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import type { CategoryItem } from "@/lib/data";

type CatalogFilterProps = {
  items: Array<Omit<CategoryItem, "icon">>;
};

const all = "Все";

function unique(values: Array<string | undefined>) {
  return [all, ...Array.from(new Set(values.filter(Boolean) as string[]))];
}

export function CatalogFilter({ items }: CatalogFilterProps) {
  const [category, setCategory] = useState(all);
  const [material, setMaterial] = useState(all);
  const [color, setColor] = useState(all);
  const [purpose, setPurpose] = useState(all);

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        return (
          (category === all || item.title === category) &&
          (material === all || item.material === material) &&
          (color === all || item.color === color) &&
          (purpose === all || item.purpose === purpose)
        );
      }),
    [category, color, items, material, purpose],
  );

  const filters = [
    { label: "Категория", value: category, setValue: setCategory, options: unique(items.map((item) => item.title)) },
    { label: "Материал", value: material, setValue: setMaterial, options: unique(items.map((item) => item.material)) },
    { label: "Цвет", value: color, setValue: setColor, options: unique(items.map((item) => item.color)) },
    { label: "Назначение", value: purpose, setValue: setPurpose, options: unique(items.map((item) => item.purpose)) },
  ];

  return (
    <div className="space-y-8">
      <div className="marble-panel rounded-[28px] p-4 md:p-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--graphite)]">
          <SlidersHorizontal size={18} strokeWidth={1.8} />
          Фильтры каталога
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {filters.map((filter) => (
            <label key={filter.label} className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--smoke)]">
              {filter.label}
              <select
                value={filter.value}
                onChange={(event) => filter.setValue(event.target.value)}
                className="h-12 rounded-2xl border border-[var(--line)] bg-white px-4 text-sm font-semibold normal-case tracking-normal text-[var(--graphite)] outline-none transition focus:border-[var(--accent)]"
              >
                {filter.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/78 shadow-[0_18px_58px_rgba(20,23,26,0.1)] backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
                {item.material ?? "VERONZO"}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-none text-[var(--graphite)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--smoke)]">{item.description}</p>
              <button
                type="button"
                className="btn-dark mt-5 w-full rounded-full px-5 py-3 text-sm font-semibold transition active:translate-y-px"
              >
                Запросить цену
              </button>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-[28px] border border-[var(--line)] bg-white/70 p-10 text-center text-[var(--smoke)]">
          По выбранным фильтрам пока нет позиций. Измените параметры или оставьте заявку.
        </div>
      ) : null}
    </div>
  );
}
