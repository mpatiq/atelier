/**
 * -----------------------------------------------------------------------------
 * Dormancy
 *
 * The third note in the Trust Architecture series.
 *
 * This note explains why inactivity should not diminish a preserved record of
 * responsibility. Dormancy acknowledges inactivity without treating it as
 * decline.
 * -----------------------------------------------------------------------------
 */

import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Dormancy — Atelier',
  description:
    'Preserving trust history and continuity without requiring perpetual activity.',
  openGraph: {
    title: 'Dormancy — Atelier',
    description:
      'Preserving trust history and continuity without requiring perpetual activity.',
    images: [
      {
        url: '/previews/atelier-open-graph.png',
        width: 1200,
        height: 630,
        alt: 'Atelier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dormancy — Atelier',
    description:
      'Preserving trust history and continuity without requiring perpetual activity.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function DormancyPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] px-8 pb-32 pt-40 text-white">
      <article className="mx-auto max-w-3xl">
        {/* ------------------------------------------------------------------ */}
        {/* Return Navigation                                                  */}
        {/* ------------------------------------------------------------------ */}

        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
        >
          ← Notes
        </Link>

        {/* ------------------------------------------------------------------ */}
        {/* Note Identity                                                      */}
        {/* ------------------------------------------------------------------ */}

        <header className="mt-12 border-b border-white/10 pb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Trust Architecture
          </p>

          <h1 className="mt-6 text-5xl font-light tracking-[0.03em] leading-tight">
            Dormancy
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400">
            Why inactivity should not diminish preserved responsibility
          </p>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* Note Body                                                          */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-20 space-y-8 text-lg leading-9 text-neutral-300">
          <p>
            Most digital systems today treat inactivity as decline. Records become
            less visible, less relevant, or less trusted simply because time has
            passed without further activity.
          </p>

          <p>Dormancy rejects that assumption.</p>

          <p>
            A Dormant record in MpatiQ is not a diminished record. It is a preserved
            record whose inactivity has been acknowledged without changing what
            the record represents.
          </p>

          <p>
            Dormancy does not reduce the integrity of a record. It does not
            lower its value. It does not reinterpret what happened during the
            period it preserves.
          </p>

          <p>It simply communicates that the record is currently inactive.</p>

          <p>
            Unlike many systems, Dormancy is also user controlled. The owner of
            the record decides when it should become Dormant and when it should
            become active again.
          </p>

          <p>
            Reactivating a record does not recover from a penalty, because no
            penalty was ever applied.
          </p>

          <p>The state changes.</p>

          <p>The preserved record does not.</p>

          <p>
            Time alone should not diminish the truth of a preserved period of
            responsibility.
          </p>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Reading Progression                                                */}
        {/* ------------------------------------------------------------------ */}

        <footer className="mt-28 flex items-center justify-between border-t border-white/10 pt-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Previous
            </p>

            <Link
              href="/notes/trust-windows"
              className="mt-4 inline-flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
            >
              ← Trust Windows
            </Link>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Continue Reading
            </p>

            <Link
              href="/notes/constitutional-separation"
              className="mt-4 inline-flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
            >
              Constitutional Separation →
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
