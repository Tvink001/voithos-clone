import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Voithos AI - AI assistant for online meetings",
  description:
    "Records video of online meetings, creates transcription and a summary of the conversation.",
};

export default function EnHomePage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
          <Link href="/en" aria-label="Voithos AI">
            <Image src="/logo.png" alt="Voithos AI" width={44} height={44} priority className="h-11 w-11 rounded object-contain" />
          </Link>
          <nav className="hidden flex-1 items-center gap-1 text-sm text-muted md:flex">
            <Link href="#advantages" className="px-3 py-2 transition-colors hover:text-ink">Advantages</Link>
            <Link href="#pricing" className="px-3 py-2 transition-colors hover:text-ink">Pricing</Link>
            <Link href="/contacts" className="px-3 py-2 transition-colors hover:text-ink">Contacts</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <div className="text-center">
              <h1 className="font-heading text-5xl text-ink-strong">Voithos AI</h1>
              <p className="mt-4 text-2xl text-muted">for meetings</p>
              <span className="mt-4 inline-block rounded border border-line px-2 py-0.5 text-sm font-semibold text-beta">
                beta
              </span>
            </div>
            <div className="mt-8 flex flex-col items-end gap-3 sm:absolute sm:right-4 sm:top-8 sm:mt-0">
              <Button href="/login">Sign In</Button>
              <Button href="/signup" variant="outline">Sign Up</Button>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center">
            <p className="text-2xl leading-relaxed text-ink">
              Voithos AI is your smart AI assistant that can record a video of your online
              meetings and make a summary of the conversation
            </p>
          </div>
        </section>

        <section id="advantages" className="bg-surface">
          <div className="mx-auto max-w-3xl space-y-5 px-4 py-14 text-muted">
            <p>Works with Google Meet, Zoom та MS Teams</p>
            <p>You get transcription, summary and video in a few minutes</p>
            <p>AI Training. Highly Customizable.</p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4 px-4 py-14">
            <Button href="/login">Sign In</Button>
            <Button href="/signup" variant="outline">Sign Up</Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-center sm:gap-8">
          <Link href="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
          <span>© Voithos AI 2026</span>
          <Link href="/about" className="transition-colors hover:text-primary">About</Link>
        </div>
      </footer>
    </>
  );
}
