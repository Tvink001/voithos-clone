import { Field, TextareaField } from "@/components/field";
import { Icon } from "@/components/icon";

export default function ContactsPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-ink-strong">Контакти</h1>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <p className="mb-8 text-center text-ink">
            Ми раді вашим зверненням щодо покращення роботи Voithos AI, інтеграцій,
            партнерства
          </p>
          <form className="space-y-5">
            <Field label="Імʼя" placeholder="Ваше імʼя" />
            <Field label="Email" type="email" placeholder="email" />
            <TextareaField label="Повідомлення" placeholder="Ваше повідомлення" rows={5} />
            <div className="flex justify-end pt-1">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
              >
                <Icon name="send" className="h-4 w-4" /> Відправити
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
