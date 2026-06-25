import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-ink-strong">Про проєкт</h1>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-16 sm:flex-row sm:items-start sm:justify-center">
          <Image
            src="/founder.jpg"
            alt="Володимир Брахат"
            width={150}
            height={150}
            className="shrink-0 rounded-lg object-cover"
          />
          <div className="max-w-xl space-y-5 text-ink">
            <p>
              Засновник Voithos AI - Володимир Брахат, що є також засновником
              CleverStaff, професійного софта для рекрутерів, та ведучим подкастів
              про ШІ.
            </p>
            <p>Voithos AI створений у 2026 році у Києві.</p>
          </div>
        </div>
      </section>
    </>
  );
}
