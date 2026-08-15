/**
 * -----------------------------------------------------------------------------
 * Environmental Bias
 *
 * The fifth note in the Trust Architecture series.
 *
 * This note explains why responsibility should be understood within the
 * environment in which it occurred rather than in isolation from it.
 * -----------------------------------------------------------------------------
 */

import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Environmental Bias — Atelier',
  description:
    'Exploring how environmental structure and bias shape navigation, adaptation, and emergent intelligent behavior.',
  openGraph: {
    title: 'Environmental Bias — Atelier',
    description:
      'Exploring how environmental structure and bias shape navigation, adaptation, and emergent intelligent behavior.',
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
    title: 'Environmental Bias — Atelier',
    description:
      'Exploring how environmental structure and bias shape navigation, adaptation, and emergent intelligent behavior.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function EnvironmentalBiasPage() {
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
            Complex Systems
          </p>

          <h1 className="mt-6 text-5xl font-light tracking-[0.03em] leading-tight">
            Environmental Bias
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400">
            How structured environments shape adaptive behavior
          </p>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* Note Body                                                          */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-20 space-y-8 text-lg leading-9 text-neutral-300">
          <p>
            Human behavior does not develop in isolation. It is shaped by the
            environments in which people live, work, and participate.
          </p>

          <p>
            Every environment rewards certain behaviors, discourages others, and
            quietly influences what becomes normal over time.
          </p>

          <p>
            This influence is not always intentional. Often it emerges from the
            structure of the environment itself.
          </p>

          <p>
            When observing responsibility, it is therefore important to remember
            that behavior may reflect both the individual and the environment in
            which that behavior occurred.
          </p>

          <p>Separating those influences is rarely straightforward.</p>

          <p>
            MpatiQ does not attempt to solve that problem by reducing people to
            a single measure of trust.
          </p>

          <p>
            Instead, it preserves bounded periods of lived responsibility and
            the reflections connected to those periods, allowing them to remain
            tied to their original context.
          </p>

          <p>Context does not remove responsibility.</p>

          <p>It helps explain it.</p>

          <p>
            Systems that seek to represent trust should remain aware that people
            and environments continually shape one another.
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
              href="/notes/constitutional-separation"
              className="mt-4 inline-flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
            >
              ← Constitutional Separation
            </Link>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Back to Notes
            </p>

            <Link
              href="/notes"
              className="mt-4 inline-flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
            >
              Notes →
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
