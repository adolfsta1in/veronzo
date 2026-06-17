import { Camera, MessageCircle, Send } from "lucide-react";
import { contacts } from "@/lib/data";

export function SocialActions() {
  const items = [
    { label: "WhatsApp", href: contacts.whatsapp, icon: MessageCircle },
    { label: "Telegram", href: contacts.telegram, icon: Send },
    { label: "Instagram", href: contacts.instagram, icon: Camera },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/72 px-5 py-3 text-sm font-semibold text-[var(--graphite)] backdrop-blur transition hover:bg-white active:translate-y-px"
          >
            <Icon size={17} strokeWidth={1.8} />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
