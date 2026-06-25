"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./icon";

const NAV = [
  { href: "/", label: null, icon: "home" },
  { href: "/advantages", label: "Переваги", icon: "favorite" },
  { href: "/pricing", label: "Тарифи", icon: "euro_symbol" },
  { href: "/contacts", label: "Контакти", icon: "sms" },
  { href: "/blog", label: "Блог", icon: "library_books" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <Link href="/" className="flex items-center" aria-label="Voithos AI">
          <Image src="/logo.png" alt="Voithos AI" width={44} height={44} priority className="h-11 w-11 rounded object-contain" />
        </Link>

        <nav className="hidden flex-1 items-center md:flex">
          {NAV.map((it) => {
            const active = isActive(it.href);
            return (
              <Link
                key={it.icon}
                href={it.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-1.5 px-3 py-2 transition-colors ${
                  active ? "border-b-2 border-primary text-primary" : "text-muted hover:text-ink"
                }`}
              >
                <Icon name={it.icon} />
                {it.label && <span className="text-sm">{it.label}</span>}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto text-ink md:hidden"
          aria-label="Меню"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 py-2 md:hidden">
          {NAV.map((it) => (
            <Link
              key={it.icon}
              href={it.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 py-2 ${isActive(it.href) ? "text-primary" : "text-ink"}`}
            >
              <Icon name={it.icon} />
              <span className="text-sm">{it.label ?? "Головна"}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
