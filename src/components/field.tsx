const inputCls =
  "w-full rounded-md border border-[#cccccc] bg-white px-3.5 py-2.5 text-ink outline-none transition-colors placeholder:text-faint focus:border-primary";

export function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-ink">{label}</span>
      <input type={type} placeholder={placeholder} className={inputCls} />
    </label>
  );
}

export function TextareaField({
  label,
  placeholder,
  rows = 4,
}: {
  label: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-ink">{label}</span>
      <textarea rows={rows} placeholder={placeholder} className={`${inputCls} resize-y`} />
    </label>
  );
}

export function SendIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M3 20.5 21 12 3 3.5 3 10l12 2-12 2z" />
    </svg>
  );
}
