import { ButtonLink } from "@/components/buttons";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Лифты",
  description: "Лифтовые решения VERONZO. Подробный каталог скоро появится.",
};

export default function LiftsPage() {
  return (
    <main>
      <PageHero
        label="Лифты"
        title="Лифтовые решения для объектов высокого уровня"
        text="Раздел готовится к наполнению. Пока направление представлено как визуальная категория без подробного каталога."
        image="/images/source/catalog/catalog-03.jpeg"
      />
      <section className="mx-auto max-w-[900px] px-5 pb-20 lg:px-8">
        <div className="marble-panel rounded-[34px] p-8 text-center md:p-12">
          <p className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none text-[var(--graphite)] md:text-5xl">
            Скоро появится
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--smoke)]">
            Для подбора лифтового решения под проект уже можно связаться с командой VERONZO.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contacts">Связаться с нами</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
