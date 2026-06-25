import { Button } from "@/components/button";

export default function AppContactsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="font-heading text-xl text-ink-strong">Запросити користувача по email</h2>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="Email"
          className="flex-1 rounded-md border border-[#cccccc] bg-white px-3.5 py-2.5 text-ink outline-none transition-colors placeholder:text-faint focus:border-primary"
        />
        <Button>Запросити</Button>
      </div>
      <p className="mt-12 text-center text-muted">Ваш список контактів поки що порожній</p>
    </div>
  );
}
