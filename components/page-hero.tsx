import { ButtonLink } from "@/components/buttons";
import { HeroImageSlider } from "@/components/hero-image-slider";

type HeroSlide = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  href?: string;
  cta?: string;
};

type PageHeroProps = {
  label: string;
  title: string;
  text?: string;
  image: string;
  slides?: HeroSlide[];
};

export function PageHero({ label, title, text, image, slides }: PageHeroProps) {
  const heroSlides = slides ?? [{ src: image, alt: title }];

  return (
    <section className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-16 pt-14 md:grid-cols-[0.92fr_1.08fr] md:items-end lg:px-8">
      <div className="pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-dark)]">{label}</p>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.92] text-[var(--graphite)] md:text-7xl">
          {title}
        </h1>
        {text ? <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--smoke)] md:text-lg">{text}</p> : null}
        <div className="mt-8">
          <ButtonLink href="/contacts">Оставить заявку</ButtonLink>
        </div>
      </div>
      <HeroImageSlider slides={heroSlides} />
    </section>
  );
}
