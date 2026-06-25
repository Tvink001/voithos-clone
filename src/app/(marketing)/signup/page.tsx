import Link from "next/link";
import { Field } from "@/components/field";
import { Icon } from "@/components/icon";

export default function SignupPage() {
  return (
    <section className="flex min-h-[78vh] items-start justify-center bg-[#aca093] px-4 py-14">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <Link
          href="/"
          aria-label="Закрити"
          className="absolute right-4 top-4 text-muted transition-colors hover:text-ink"
        >
          <Icon name="close" className="h-6 w-6" />
        </Link>
        <h1 className="mb-7 text-center text-2xl font-bold text-primary">Реєстрація</h1>
        <form className="space-y-5">
          <Field label="Імʼя та прізвище" placeholder="Ваші імʼя та прізвище" />
          <Field label="Email" type="email" placeholder="Ваш email" />
          <Field label="Пароль" type="password" placeholder="Ваш пароль" />
          <Link
            href="/app/meetings"
            className="mx-auto block w-fit rounded bg-secondary px-10 py-2.5 text-center text-sm font-bold uppercase text-ink-strong shadow-sm transition-[filter] hover:brightness-95"
          >
            Зареєструватись
          </Link>
        </form>
        <div className="mt-10 text-center text-sm">
          <Link href="/login" className="font-semibold text-ink transition-colors hover:text-primary">
            Вже є акаунт?
          </Link>
        </div>
      </div>
    </section>
  );
}
