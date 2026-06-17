import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Building2, Gem, Layers3 } from "lucide-react";
import { ButtonLink } from "@/components/buttons";
import { CategoryGrid } from "@/components/category-grid";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { SocialActions } from "@/components/social-actions";
import { advantages, productCategories, productWorks, services, stoneCategories } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100dvh-80px)] max-w-[1400px] gap-10 px-5 pb-12 pt-12 md:grid-cols-[1fr_0.92fr] md:items-center lg:px-8">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-dark)]">
            VERONZO
          </p>
          <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.92] text-[var(--graphite)] md:text-7xl xl:text-8xl">
            Премиальные строительные и отделочные решения
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--smoke)] md:text-lg">
            Камень, плитка, двери, окна и изделия для интерьеров и фасадов высокого уровня.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/catalog">Смотреть каталог</ButtonLink>
            <ButtonLink href="/contacts" variant="outline">
              Связаться с нами
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-[430px] overflow-hidden rounded-[34px] shadow-[0_32px_100px_rgba(20,23,26,0.16)] md:min-h-[640px]">
          <Image
            src="/images/source/catalog-stone/catalog-stone-01.jpeg"
            alt="Мрамор VERONZO"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 46vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/56 via-transparent to-white/10" />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-5">
          {advantages.map((item, index) => (
            <div
              key={item}
              className="group marble-panel rounded-[26px] p-5 transition duration-300 hover:-translate-y-2 hover:border-white hover:bg-white/90 hover:shadow-[0_30px_90px_rgba(20,23,26,0.16)]"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--graphite)] text-white transition duration-300 group-hover:bg-black group-hover:shadow-[0_12px_30px_rgba(20,23,26,0.2)]">
                {index % 2 === 0 ? <Gem size={18} strokeWidth={1.8} /> : <BadgeCheck size={18} strokeWidth={1.8} />}
              </div>
              <p className="text-sm font-semibold leading-6 text-[var(--graphite)]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Продукция"
          title="Материалы и инженерные решения в одной системе"
        />
        <div className="mt-10">
          <CategoryGrid items={productCategories} />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              title="Камень, который задает тон интерьеру"
              text="Мрамор, кварц, гранит, травертин, оникс и керамогранит подобраны для разных сценариев: от спокойной облицовки до акцентных деталей."
            />
            <div className="mt-8">
              <ButtonLink href="/catalog-stone" variant="outline">
                Каталог камня
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stoneCategories.slice(0, 6).map((item, index) => (
              <a
                key={item.title}
                href="/catalog-stone"
                className={`group relative min-h-[300px] overflow-hidden rounded-[28px] bg-[var(--graphite)] text-white shadow-[0_18px_58px_rgba(20,23,26,0.12)] ${
                  index === 0 ? "sm:min-h-[380px]" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover opacity-86 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-white/8" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/76">{item.description}</p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[var(--graphite)] opacity-0 transition group-hover:opacity-100">
                      <ArrowUpRight size={17} strokeWidth={1.8} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
        <SectionHeading eyebrow="Изделия" title="Готовые формы из камня для частных и коммерческих объектов" />
        <div className="mt-10">
          <CategoryGrid items={productWorks} columns="mixed" />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
        <div className="dark-marble overflow-hidden rounded-[34px] p-6 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Image
              src="/images/logo/veronzo-white.png"
              alt="VERONZO"
              width={260}
              height={37}
              className="mb-8 h-7 w-auto"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">Услуги</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-none md:text-6xl">
                От выбора материала до монтажа на объекте
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.slice(0, 6).map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="rounded-[24px] border border-white/14 bg-white/10 p-5 backdrop-blur">
                    <Icon size={20} strokeWidth={1.8} className="text-white/80" />
                    <h3 className="mt-5 text-base font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[34px]">
            <Image src="/images/source/bathrooms/bathrooms-03.jpg" alt="Проект VERONZO" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="marble-panel rounded-[34px] p-7 md:p-10">
            <Building2 size={28} strokeWidth={1.7} className="text-[var(--accent-dark)]" />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-none text-[var(--graphite)] md:text-6xl">
              VERONZO создает комплексные решения
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--smoke)]">
              Для строительства, интерьера и экстерьера: от подбора материалов до готовых изделий и реализации проектов.
            </p>
            <a href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--graphite)]">
              О компании <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
        <div className="dark-marble grid gap-8 rounded-[34px] p-6 text-white md:p-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <Image
              src="/images/logo/veronzo-white.png"
              alt="VERONZO"
              width={280}
              height={40}
              className="mb-8 h-8 w-auto"
            />
            <Layers3 size={30} strokeWidth={1.7} />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-none md:text-6xl">
              Подберите материалы для вашего проекта
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              Оставьте заявку, и команда VERONZO поможет собрать материал, изделие и услугу в единую спецификацию.
            </p>
            <div className="mt-8">
              <SocialActions />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
