type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-dark)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.96] text-[var(--graphite)] md:text-6xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-7 text-[var(--smoke)] md:text-lg">{text}</p> : null}
    </div>
  );
}
