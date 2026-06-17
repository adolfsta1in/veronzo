import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70dvh] max-w-5xl flex-col justify-center px-5 py-28">
      <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-dark)]">VERONZO</p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl text-[var(--graphite)] md:text-7xl">
        Страница не найдена
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-[var(--smoke)]">
        Раздел мог быть обновлен. Вернитесь на главную или откройте каталог материалов.
      </p>
      <Link
        href="/"
        className="btn-dark mt-8 inline-flex w-fit rounded-full px-6 py-3 text-sm font-semibold transition active:translate-y-px"
      >
        На главную
      </Link>
    </main>
  );
}
