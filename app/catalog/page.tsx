import { CatalogFilter } from "@/components/catalog-filter";
import { PageHero } from "@/components/page-hero";
import { allCatalogItems } from "@/lib/data";

export const metadata = {
  title: "Каталог",
  description: "Каталог материалов, изделий и решений VERONZO без открытых цен.",
};

export default function CatalogPage() {
  const filterItems = allCatalogItems.map((item) => ({
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
        label="Каталог"
        title="Продукция VERONZO без компромисса по материалам"
        text="Камень, двери, лифты и изделия представлены как база для запроса и индивидуального подбора под проект."
        image="/images/source/catalog/catalog-01.jpeg"
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-8">
        <CatalogFilter items={filterItems} />
      </section>
    </main>
  );
}
