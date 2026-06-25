export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <div className="flex flex-col items-center text-center">
        <div className="grid h-24 w-24 place-items-center rounded-full bg-line text-muted">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14" aria-hidden>
            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2.2-7 5v1h14v-1c0-2.8-3-5-7-5z" />
          </svg>
        </div>
        <button type="button" className="mt-3 text-sm text-primary hover:underline">
          Встановити своє зображення
        </button>
      </div>

      <dl className="mt-10 space-y-5">
        <div>
          <dt className="text-sm text-muted">Ваше імʼя:</dt>
          <dd className="text-ink">Test User</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Ваш логін:</dt>
          <dd className="text-ink">user@example.com</dd>
        </div>
      </dl>

      <div className="mt-12">
        <button type="button" className="text-sm font-semibold text-[#d9534f] hover:underline">
          Видалити мій акаунт
        </button>
      </div>
    </div>
  );
}
