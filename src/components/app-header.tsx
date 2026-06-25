"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./icon";

const NAV = [
  { href: "/app/meetings", label: "Мітинги", icon: "meetings" },
  { href: "/app/contacts", label: "Мої контакти", icon: "contacts" },
  { href: "/app/learn", label: "Навчання ШІ", icon: "local_library" },
  { href: "/app/settings", label: "Налаштування", icon: "settings" },
];

export function AppHeader() {
  const pathname = usePathname();
  const active = (h: string) => pathname.startsWith(h);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link href="/app/meetings" aria-label="Voithos AI">
          <Image src="/logo.png" alt="Voithos AI" width={44} height={44} priority className="h-11 w-11 rounded object-contain" />
        </Link>

        <nav className="flex flex-1 items-center gap-1 overflow-x-auto">
          {NAV.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              aria-current={active(it.href) ? "page" : undefined}
              className={`flex shrink-0 items-center gap-1.5 px-3 py-2 transition-colors ${
                active(it.href) ? "border-b-2 border-primary text-primary" : "text-muted hover:text-ink"
              }`}
            >
              <Icon name={it.icon} />
              <span className="hidden text-sm sm:inline">{it.label}</span>
            </Link>
          ))}
        </nav>

        <Link
          href="/app/profile"
          aria-label="Профіль"
          className="ml-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-line text-muted transition-colors hover:text-ink"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2.2-7 5v1h14v-1c0-2.8-3-5-7-5z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
