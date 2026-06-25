import { Button } from "@/components/button";
import { Icon } from "@/components/icon";

const inputCls =
  "w-full rounded-md border border-[#cccccc] bg-white px-3.5 py-2.5 text-ink outline-none transition-colors placeholder:text-faint focus:border-primary";

export default function MeetingsPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-10">
      <span className="absolute right-4 top-3 text-xs text-faint">Версія 0.9</span>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="max-w-md">
          <h2 className="font-heading text-xl text-ink-strong">Додайте Voithos AI до мітингу</h2>
          <p className="mt-1 text-sm text-muted">отримайте summary, відео, поділіться з колегами</p>

          <div className="mt-5 space-y-3">
            <input placeholder="Назва мітингу" className={inputCls} />
            <input placeholder="Ваш meeting link" className={inputCls} />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Button className="flex-1 gap-1.5">
              <Icon name="add" className="h-4 w-4" /> Доєднати Voithos AI зараз
            </Button>
            <button
              type="button"
              aria-label="Налаштування"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line text-muted transition-colors hover:text-ink"
            >
              <Icon name="settings" className="h-5 w-5" />
            </button>
          </div>
          <Button variant="outline" className="mt-3 w-full gap-1.5">
            <Icon name="schedule" className="h-4 w-4" /> Доєднати у майбутній мітинг
          </Button>
        </div>

        <div className="flex items-start justify-center pt-2 text-center">
          <p className="text-muted">
            Нижче буде таблиця з вашими мітингами, summary та відео записами
          </p>
        </div>
      </div>
    </div>
  );
}
