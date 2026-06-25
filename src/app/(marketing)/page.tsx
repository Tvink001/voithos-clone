import { Button } from "@/components/button";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="text-center">
            <h1 className="font-heading text-5xl text-ink-strong">Voithos AI</h1>
            <p className="mt-4 text-2xl text-muted">for meetings</p>
            <span className="mt-4 inline-block rounded border border-line px-2 py-0.5 text-sm font-semibold text-beta">
              beta
            </span>
          </div>
          <div className="mt-8 flex flex-col items-end gap-3 sm:absolute sm:right-4 sm:top-8 sm:mt-0">
            <Button href="/login">Увійти</Button>
            <Button href="/signup" variant="outline">
              Зареєструватись
            </Button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-2xl leading-relaxed text-ink">
            Voithos AI - ваш розумний ШІ асистент, що може записати відео вашого
            онлайн мітингу та зробити скорочений переказ (summary) розмови
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="advantages" className="bg-surface">
        <div className="mx-auto max-w-3xl space-y-5 px-4 py-14 text-muted">
          <p>Працює у Google Meet, Zoom та MS Teams</p>
          <p>За кілька хвилин отримаєте транскрипцію, summary та відео</p>
          <p>Навчання ШІ. Гнучкі налаштування.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4 px-4 py-14">
          <Button href="/login">Увійти</Button>
          <Button href="/signup" variant="outline">
            Зареєструватись
          </Button>
        </div>
      </section>
    </>
  );
}
