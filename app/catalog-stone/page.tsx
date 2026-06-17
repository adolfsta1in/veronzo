import { CatalogFilter } from "@/components/catalog-filter";
import { PageHero } from "@/components/page-hero";
import { stoneCategories } from "@/lib/data";

export const metadata = {
  title: "Каталог камня",
  description: "Мрамор, кварц, гранит, травертин, оникс, керамогранит и полудрагоценный камень VERONZO.",
};

export default function CatalogStonePage() {
  const filterItems = stoneCategories.map((item) => ({
    title: item.title,
    href: item.href,
    description: item.description,
    image: item.image,
    material: item.material,
    color: item.color,
    purpose: item.purpose,
  }));

  return (
    <main>
      <PageHero
        label="Каталог камня"
        title="Слэбы и поверхности для архитектурных интерьеров"
        text="Подбор камня строится вокруг рисунка, света, формата и назначения поверхности."
        image="/images/source/catalog-stone/catalog-stone-02.jpg"
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-8">
        <CatalogFilter items={filterItems} />
      </section>
    </main>
  );
}
