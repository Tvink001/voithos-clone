import Link from "next/link";

type Props = {
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded px-6 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-primary text-white shadow-sm hover:bg-primary-dark",
  outline: "border border-primary bg-white text-primary hover:bg-primary/5",
};

export function Button({ href, variant = "primary", className = "", children }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  return href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <button className={cls}>{children}</button>
  );
}
