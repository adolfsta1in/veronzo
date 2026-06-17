import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline";
};

export function ButtonLink({ href, children, variant = "dark" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition active:translate-y-px";
  const styles = {
    dark: "btn-dark shadow-[0_16px_44px_rgba(20,23,26,0.18)]",
    light: "bg-white text-[var(--graphite)] hover:bg-slate-50",
    outline:
      "border border-[rgba(31,35,40,0.18)] bg-white/45 text-[var(--graphite)] backdrop-blur hover:bg-white",
  };

  return (
    <Link className={`${base} ${styles[variant]}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={16} strokeWidth={1.8} />
    </Link>
  );
}
