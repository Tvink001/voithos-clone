import { Button } from "@/components/button";

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="font-heading text-xl text-ink-strong">Навчання ШІ</h2>
      <p className="mt-3 text-ink">
        Вкажіть терміни через кому (,), які Voithos AI має гарно розпізнавати у всіх
        ваших мітингах
      </p>
      <textarea
        rows={5}
        placeholder="Наприклад: CleverStaff, Voithos, DPA, ..."
        className="mt-4 w-full resize-y rounded-md border border-[#cccccc] bg-white px-3.5 py-2.5 text-ink outline-none transition-colors placeholder:text-faint focus:border-primary"
      />
      <div className="mt-4">
        <Button>Зберегти</Button>
      </div>
    </div>
  );
}
