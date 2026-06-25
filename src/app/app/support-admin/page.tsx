function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line p-4 text-center">
      <div className="font-heading text-2xl text-primary">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

export default function SupportAdminPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="font-heading text-xl text-ink-strong">SupportAdmin</h2>

      <p className="mt-6 text-ink">Оберіть тариф</p>
      <div className="mt-3 flex flex-wrap gap-3">
        {["cs free", "Beta - 25", "Free - 25"].map((p) => (
          <button
            key={p}
            type="button"
            className="rounded-lg border border-line px-4 py-2 text-ink transition-colors hover:border-primary hover:text-primary"
          >
            {p}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Stat label="Мітинги бета користувачів" value="22" />
        <Stat label="Beta користувачів" value="25" />
        <Stat label="Free користувачів" value="25" />
      </div>
    </div>
  );
}
