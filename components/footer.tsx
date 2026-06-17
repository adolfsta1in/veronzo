import Link from "next/link";
import Image from "next/image";
import { Camera, Send, MessageCircle } from "lucide-react";
import { contacts, navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Image src="/images/logo/veronzo-white.png" alt="VERONZO" width={320} height={45} className="h-9 w-auto" />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/62">
            Комплексные решения для строительства, интерьера и экстерьера: от подбора материалов до готовых изделий.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold text-white">Навигация</p>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/58 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold text-white">Контакты</p>
          <a className="text-sm text-white/58 hover:text-white" href={contacts.phoneHref}>
            {contacts.phone}
          </a>
          <div className="mt-5 flex gap-3">
            <a className="rounded-full border border-white/14 bg-white/8 p-3 text-white" href={contacts.whatsapp} aria-label="WhatsApp">
              <MessageCircle size={18} strokeWidth={1.8} />
            </a>
            <a className="rounded-full border border-white/14 bg-white/8 p-3 text-white" href={contacts.telegram} aria-label="Telegram">
              <Send size={18} strokeWidth={1.8} />
            </a>
            <a className="rounded-full border border-white/14 bg-white/8 p-3 text-white" href={contacts.instagram} aria-label="Instagram">
              <Camera size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/48">
        © 2025 VERONZO
      </div>
    </footer>
  );
}
