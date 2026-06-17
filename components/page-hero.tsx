import Image from "next/image";
import { ButtonLink } from "@/components/buttons";

type PageHeroProps = {
  label: string;
  title: string;
  text: string;
  image: string;
};

export function PageHero({ label, title, text, image }: PageHeroProps) {
  return (
    <section className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-16 pt-14 md:grid-cols-[0.92fr_1.08fr] md:items-end lg:px-8">
      <div className="pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-dark)]">{label}</p>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.92] text-[var(--graphite)] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--smoke)] md:text-lg">{text}</p>
        <div className="mt-8">
          <ButtonLink href="/contacts">Оставить заявку</ButtonLink>
        </div>
      </div>
      <div className="relative min-h-[360px] overflow-hidden rounded-[32px] shadow-[0_26px_80px_rgba(20,23,26,0.15)] md:min-h-[520px]">
        <Image src={image} alt={title} fill priority sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent" />
      </div>
    </section>
  );
}
