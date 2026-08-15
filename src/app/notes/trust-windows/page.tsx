/**
 * -----------------------------------------------------------------------------
 * Trust Windows
 *
 * The second note in the Trust Architecture series.
 *
 * This note introduces the Trust Window as the primary unit through which trust
 * is represented. Rather than accumulating indefinitely, trust is preserved
 * within bounded periods of lived responsibility.
 * -----------------------------------------------------------------------------
 */

import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Trust Windows — Atelier',
  description:
    'A temporal structure for preserving the context, continuity, and witnessed history of lived responsibility.',
  openGraph: {
    title: 'Trust Windows — Atelier',
    description:
      'A temporal structure for preserving the context, continuity, and witnessed history of lived responsibility.',
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
    title: 'Trust Windows — Atelier',
    description:
      'A temporal structure for preserving the context, continuity, and witnessed history of lived responsibility.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function TrustWindowsPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] px-8 pb-32 pt-40 text-white">
      <article className="mx-auto max-w-3xl">
        {/* ------------------------------------------------------------------ */}
        {/* Return Navigation                                                   */}
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

          <h1 className="mt-6 text-5xl font-light leading-tight tracking-[0.03em]">
            Trust Windows
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400">
            Representing trust through bounded periods of lived responsibility
          </p>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* Note Body                                                          */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-20 space-y-8 text-lg leading-9 text-neutral-300">
          <p>
            If trust should not be represented as a continuously accumulating
            metric, it requires a different unit of representation.
          </p>

          <p>That unit is the Trust Window.</p>

          <p>
            A Trust Window represents a bounded period during which a particular
            responsibility is lived. It is defined by a beginning, an ending,
            and the circumstances under which that responsibility was carried
            out.
          </p>

          <p>
            Every window exists within a claim of responsibility, but it is the
            window that preserves when and how that responsibility was actually
            lived. The Trust Window also provides a means for first-hand
            witnesses to reflect on what happened during that period—what they
            experienced.
          </p>

          <p>
            The boundary of a Trust Window is not an implementation detail. It
            is the defining characteristic of the record. In this way, the
            record remains one-to-one with the reality it represents.
          </p>

          <p>
            By preserving trust within bounded periods, each experience retains
            its own context. A construction engagement carried out between May
            2019 and December 2023 remains distinct from another undertaken
            between June 2025 and November 2025. In this way, one period does
            not silently absorb another.
          </p>

          <p>
            This reflects how people naturally remember trust. We rarely think
            of someone as having accumulated a lifetime total. Instead, we
            remember particular periods in which responsibility was accepted,
            demonstrated, and observed.
          </p>

          <p>A Trust Window preserves exactly those periods.</p>

          <p>
            Because every window has a beginning, it also has an ending. When
            the responsibility concludes, the record does not disappear. It
            becomes a preserved account of that lived experience, available for
            future reflection without being rewritten by unrelated events.
          </p>

          <p>The objective is not to continuously update trust.</p>
          <p>The objective is not to recalculate trust.</p>

          <p>The objective is to preserve responsibility.</p>
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
              href="/notes/stability-without-scoring"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              ← Stability Without Scoring
            </Link>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Continue Reading
            </p>

            <Link
              href="/notes/dormancy"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              Dormancy →
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
