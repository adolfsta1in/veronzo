import { CategoryGrid } from "@/components/category-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { productWorks } from "@/lib/data";

export const metadata = {
  title: "Изделия",
  description: "Камины, лестницы, столешницы, мебель, ванные комнаты, бани, полы и стены из камня.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        label="Изделия"
        title="Камень в точной форме для вашего пространства"
        text="Сохранили действующие направления изделий VERONZO и собрали их в презентационную структуру."
        image="/images/source/products/products-01.jpeg"
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-8">
        <SectionHeading title="Каталог изделий" text="Каждая категория ведет к заявке и консультации, без публичных цен." />
        <div className="mt-10">
          <CategoryGrid items={productWorks} columns="mixed" />
        </div>
      </section>
    </main>
  );
}
