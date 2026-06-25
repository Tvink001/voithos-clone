"use client";

import { useState } from "react";
import { Button } from "@/components/button";

const TABS = ["Календар", "Компанія", "Мітинги", "Захист даних"] as const;
type Tab = (typeof TABS)[number];

function Toggle({ label, defaultOn = false }: { label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className="flex w-full items-center justify-between rounded-lg border border-line px-4 py-3 text-left"
    >
      <span className="text-ink">{label}</span>
      <span className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-primary" : "bg-line"}`}>
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`}
        />
      </span>
    </button>
  );
}

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("Календар");
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6 flex flex-wrap gap-1 border-b border-line">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm transition-colors ${
              tab === t ? "border-b-2 border-primary text-primary" : "text-muted hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Календар" && (
        <div className="space-y-4">
          <p className="text-ink">
            Якщо ви використовуєте Google Calendar для онлайн зустрічей, Voithos AI може
            автоматично доєднуватись до ваших мітингів.
          </p>
          <Button variant="outline">Підключити Google Calendar</Button>
        </div>
      )}

      {tab === "Компанія" && (
        <div className="space-y-4">
          <p className="text-ink">
            Обʼєднання користувачів у компанію — спільний доступ до мітингів та єдина оплата.
          </p>
          <Button>Створити компанію</Button>
        </div>
      )}

      {tab === "Мітинги" && (
        <div className="space-y-3">
          <Toggle label="Записувати відео мітингів" defaultOn />
          <Toggle label="Заборонити скачування відео" />
        </div>
      )}

      {tab === "Захист даних" && (
        <div className="space-y-4">
          <p className="text-ink">
            Voithos AI може працювати без запису відео — лише транскрипція та summary.
          </p>
          <Toggle label="Працювати без запису відео" />
        </div>
      )}
    </div>
  );
}
