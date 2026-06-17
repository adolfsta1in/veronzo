"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/buttons";
import { navItems } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/92 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo/veronzo-white.png"
            alt="VERONZO"
            width={260}
            height={37}
            priority
            className="h-7 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/66 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contacts">Получить консультацию</ButtonLink>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-white/8 text-white lg:hidden"
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-black/96 px-5 py-5 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto grid max-w-[1400px] gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-white/78 hover:bg-white/8 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
