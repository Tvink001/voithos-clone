import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-center sm:gap-8">
        <Link href="/privacy" className="transition-colors hover:text-primary">
          Політика приватності
        </Link>
        <span>© Voithos AI 2026</span>
        <Link href="/about" className="transition-colors hover:text-primary">
          Про проєкт
        </Link>
      </div>
    </footer>
  );
}
