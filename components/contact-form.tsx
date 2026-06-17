"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="marble-panel grid gap-4 rounded-[28px] p-5 md:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[var(--graphite)]">
          Имя
          <input className="h-12 rounded-2xl border border-[var(--line)] bg-white px-4 outline-none focus:border-[var(--accent)]" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[var(--graphite)]">
          Телефон
          <input className="h-12 rounded-2xl border border-[var(--line)] bg-white px-4 outline-none focus:border-[var(--accent)]" required />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[var(--graphite)]">
        Email
        <input type="email" className="h-12 rounded-2xl border border-[var(--line)] bg-white px-4 outline-none focus:border-[var(--accent)]" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[var(--graphite)]">
        Какой материал или изделие интересует?
        <input className="h-12 rounded-2xl border border-[var(--line)] bg-white px-4 outline-none focus:border-[var(--accent)]" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[var(--graphite)]">
        Сообщение
        <textarea className="min-h-32 rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none focus:border-[var(--accent)]" />
      </label>
      <button
        type="submit"
        className="btn-dark inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition active:translate-y-px"
      >
        <Send size={16} strokeWidth={1.8} />
        Отправить заявку
      </button>
      {sent ? <p className="text-sm font-semibold text-[var(--accent-dark)]">Заявка подготовлена. Подключение отправки можно добавить следующим этапом.</p> : null}
    </form>
  );
}
