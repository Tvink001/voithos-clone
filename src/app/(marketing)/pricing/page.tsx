export default function PricingPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-ink-strong">Тарифи</h1>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-2xl space-y-4 px-4 py-14 text-center leading-relaxed text-ink">
          <p>
            Влітку 2026 року Voithos AI проходить beta-тестування. Ви маєте можливість
            користуватись безоплатно.
          </p>
          <p>Всім користувачам Voithos AI доступний безкоштовно для 4 мітингів на місяць.</p>
          <p>
            Далі буде тариф «Ранні пташки» - $8 за користувача на місяць для перших 50
            користувачів. Цей тариф діятиме 6 місяців.
          </p>
          <p>Після «Ранніх пташок» планується вартість 10$ на місяць за користувача.</p>
        </div>
      </section>
    </>
  );
}
