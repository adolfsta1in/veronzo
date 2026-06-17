import Image from "next/image";
import { BadgeCheck, Gem, Workflow } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "О компании",
  description: "VERONZO создает комплексные решения для строительства, интерьера и экстерьера.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="О компании"
        title="Материалы, изделия и реализация в одном архитектурном подходе"
        text="VERONZO создает комплексные решения для строительства, интерьера и экстерьера: от подбора материалов до готовых изделий и реализации проектов."
        image="/images/source/floors-walls/floors-walls-05.jpg"
      />
      <section className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="marble-panel rounded-[34px] p-7 md:p-10">
          <Gem size={30} strokeWidth={1.7} className="text-[var(--accent-dark)]" />
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-none text-[var(--graphite)] md:text-6xl">
            Подбор начинается с архитектуры
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--smoke)]">
            Мы рассматриваем материал не как отдельную покупку, а как часть пространства: свет, масштаб, стык, монтаж и долговечность.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              { icon: BadgeCheck, text: "Премиальные материалы и изделия" },
              { icon: Workflow, text: "Согласованная логика поставки и монтажа" },
              { icon: Gem, text: "Работа с архитекторами и строителями" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-white/68 p-4">
                  <Icon size={19} strokeWidth={1.8} className="text-[var(--accent-dark)]" />
                  <span className="text-sm font-semibold text-[var(--graphite)]">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[34px]">
          <Image src="/images/source/furniture/furniture-05.jpg" alt="Интерьер VERONZO" fill sizes="55vw" className="object-cover" />
        </div>
      </section>
    </main>
  );
}
