import { GalleryModal } from "@/components/gallery-modal";
import { PageHero } from "@/components/page-hero";
import { gallery } from "@/lib/data";

export const metadata = {
  title: "Проекты",
  description: "Галерея материалов, изделий и реализованных направлений VERONZO.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        label="Проекты"
        title="Галерея фактур, деталей и готовых решений"
        text="Masonry-галерея использует реальные изображения текущего сайта VERONZO."
        image="/images/source/countertops/countertops-01.jpeg"
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-8">
        <GalleryModal items={gallery} />
      </section>
    </main>
  );
}
