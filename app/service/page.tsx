import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export const metadata = {
  title: "Услуги",
  description: "Подбор, поставка, изготовление, монтаж и комплексная отделка VERONZO.",
};

export default function ServicePage() {
  return (
    <main>
      <PageHero
        label="Услуги"
        title="Работы, которые связывают материал и объект"
        text="Команда VERONZO сопровождает проект от консультации и поставки до изготовления изделий и монтажа."
        image="/images/source/service/service-01.jpeg"
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-8">
        <SectionHeading title="Сервисная структура" text="Камень, лифты, двери и отделка собраны в единый маршрут работы с проектом." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="group overflow-hidden rounded-[28px] bg-white/78 shadow-[0_18px_58px_rgba(20,23,26,0.1)] backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={service.image} alt={service.title} fill sizes="25vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <Icon size={22} strokeWidth={1.7} className="text-[var(--accent-dark)]" />
                  <h3 className="mt-5 text-lg font-bold text-[var(--graphite)]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--smoke)]">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
