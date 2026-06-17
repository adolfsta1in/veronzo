import { CategoryGrid } from "@/components/category-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { productCategories } from "@/lib/data";

export const metadata = {
  title: "Продукция",
  description: "Камень, двери и лифты VERONZO для архитектурных и интерьерных проектов.",
};

export default function CatalogPage() {
  return (
    <main>
      <PageHero
        label="Продукция"
        title="Три направления для архитектурного проекта"
        text="На верхнем уровне оставлены только основные категории: камень, двери и лифты. Подробный каталог материалов находится внутри раздела камня."
        image="/images/source/catalog/catalog-01.jpeg"
        slides={productCategories.map((item) => ({
          src: item.image,
          alt: item.title,
        }))}
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-8">
        <SectionHeading
          title="Выберите направление"
          text="Камень открывает подробный каталог материалов. Двери и лифты пока представлены как визуальные категории."
        />
        <div className="mt-10">
          <CategoryGrid items={productCategories} />
        </div>
      </section>
    </main>
  );
}
