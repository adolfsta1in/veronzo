import { Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SocialActions } from "@/components/social-actions";
import { contacts } from "@/lib/data";

export const metadata = {
  title: "Контакты",
  description: "Связаться с VERONZO: телефон, WhatsApp, Telegram, Instagram и форма заявки.",
};

export default function ContactsPage() {
  return (
    <main>
      <PageHero
        label="Контакты"
        title="Обсудите материал, изделие или объект"
        text="Оставьте заявку или напишите в удобный канал. Мы подготовим консультацию под задачу проекта."
        image="/images/source/service/service-03.jpeg"
      />
      <section className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-20 lg:grid-cols-[0.8fr_1fr] lg:px-8">
        <div className="marble-panel rounded-[34px] p-7 md:p-10">
          <Phone size={28} strokeWidth={1.7} className="text-[var(--accent-dark)]" />
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-none text-[var(--graphite)]">
            {contacts.phone}
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--smoke)]">
            WhatsApp подключен к номеру. Telegram и Instagram оставлены как заменяемые ссылки в данных проекта.
          </p>
          <div className="mt-8">
            <SocialActions />
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
