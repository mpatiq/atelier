/**
 * -----------------------------------------------------------------------------
 * Constitutional Separation
 *
 * The fourth note in the Trust Architecture series.
 *
 * This note explains why the constitutional rules governing trust should remain
 * independent from the way those rules are presented to people.
 * -----------------------------------------------------------------------------
 */

import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Constitutional Separation — Atelier',
  description:
    'Exploring the separation of constitutional rules from application behavior in trust infrastructure.',
  openGraph: {
    title: 'Constitutional Separation — Atelier',
    description:
      'Exploring the separation of constitutional rules from application behavior in trust infrastructure.',
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
    title: 'Constitutional Separation — Atelier',
    description:
      'Exploring the separation of constitutional rules from application behavior in trust infrastructure.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function ConstitutionalSeparationPage() {
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
            Constitutional Separation
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400">
            Why governance should remain independent from interface and
            presentation
          </p>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* Note Body                                                          */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-20 space-y-8 text-lg leading-9 text-neutral-300">
          <p>
            Every system contains rules that determine how it behaves. Those
            rules should exist independently of the interface through which
            people interact with them.
          </p>

          <p>
            In MpatiQ, those rules form the constitutional layer of the system.
          </p>

          <p>
            The constitution defines what a Trust Window is, how it moves
            through its lifecycle, how reflections relate to it, and the
            conditions under which its state may change.
          </p>

          <p>
            These rules should not depend on a web page, a mobile application,
            or any particular interface.
          </p>

          <p>The interface may change.</p>

          <p>The constitution should not.</p>

          <p>
            Separating governance from presentation allows every interface to
            behave consistently because they all rely on the same underlying
            rules rather than implementing their own interpretations.
          </p>

          <p>
            It also makes those rules easier to understand, test, and evolve.
            Changes to the presentation do not alter the governing behavior of
            the system, and changes to the constitution are made deliberately
            rather than accidentally through interface logic.
          </p>

          <p>
            This separation is not unique to trust systems. It is a principle of
            durable software systems.
          </p>

          <p>The interface presents the system.</p>

          <p>The constitution governs it.</p>
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
              href="/notes/dormancy"
              className="mt-4 inline-flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
            >
              ← Dormancy
            </Link>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Continue Reading
            </p>

            <Link
              href="/notes/environmental-bias"
              className="mt-4 inline-flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
            >
              Environmental Bias →
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
