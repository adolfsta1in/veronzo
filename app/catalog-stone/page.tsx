import { CatalogFilter } from "@/components/catalog-filter";
import { PageHero } from "@/components/page-hero";
import { stoneCategories } from "@/lib/data";

export const metadata = {
  title: "Каталог камня",
  description: "Мрамор, гранит, кварц, травертин, оникс и другие виды камня VERONZO.",
};

const stoneOrder = ["Мрамор", "Гранит", "Кварц", "Травертин", "Оникс"];

export default function CatalogStonePage() {
  const orderedStone = stoneOrder
    .map((title) => stoneCategories.find((item) => item.title === title))
    .filter(Boolean)
    .map((item) => ({
      title: item!.title,
      href: item!.href,
      description: item!.description,
      image: item!.image,
      material: item!.material,
      color: item!.color,
      purpose: item!.purpose,
    }));

  const otherSource = stoneCategories.find((item) => item.title === "Керамогранит") ?? stoneCategories[0];
  const filterItems = [
    ...orderedStone,
    {
      title: "Другие виды камня",
      href: otherSource.href,
      description: "Дополнительные материалы и редкие фактуры подбираются под задачу проекта, формат поверхности и сценарий использования.",
      image: otherSource.image,
      material: "Другие виды камня",
      color: otherSource.color,
      purpose: otherSource.purpose,
    },
  ];

  return (
    <main>
      <PageHero
        label="Камень"
        title="Каталог камня внутри раздела продукции"
        text="Материалы сгруппированы как отдельный подробный каталог: мрамор, гранит, кварц, травертин, оникс и другие виды камня."
        image="/images/source/catalog-stone/catalog-stone-02.jpg"
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-8">
        <CatalogFilter items={filterItems} />
      </section>
    </main>
  );
}
