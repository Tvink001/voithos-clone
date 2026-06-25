import { Icon } from "@/components/icon";

const BENEFITS: [string, string][] = [
  [
    "Отримуйте відео мітингу та короткий переказ (summary) розмови за кілька хвилин після мітингу",
    "Це дуже швидко",
  ],
  [
    "Легкий старт",
    "Весною 2026 безоплатне користування, потім вигідний тариф «Ранні пташки»",
  ],
  [
    "Можливість навчання вашого Voithos AI одразу на мітингу та після",
    "Ви можете додати терміни та інструкції, яку Voithos AI має вірно почути та використати у summary",
  ],
  [
    "Керуйте приватністю",
    "Поділитись з колегами та видалення даних мітингу – у ваших руках",
  ],
  [
    "Розуміння багатомовних розмов",
    "Найкраща якість, якщо всі учасники розмовляють українською 🇺🇦",
  ],
];

export default function AdvantagesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-ink-strong">Оцініть переваги Voithos AI</h1>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-3xl space-y-8 px-4 py-14">
          {BENEFITS.map(([title, desc]) => (
            <div key={title} className="flex gap-4">
              <Icon name="flash_on" className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
              <div>
                <h2 className="font-semibold text-ink-strong">{title}</h2>
                <p className="mt-1 text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
