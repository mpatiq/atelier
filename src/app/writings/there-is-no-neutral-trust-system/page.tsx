/**
 * -----------------------------------------------------------------------------
 * There Is No Neutral Trust System
 *
 * Every trust system embodies a philosophy. Before discussing implementation,
 * it is worth asking what assumptions about trust have already been encoded
 * into the system itself.
 * -----------------------------------------------------------------------------
 */

import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'There Is No Neutral Trust System — Atelier',
  description:
    'An examination of how every trust system encodes assumptions about what should be preserved, recognized, and made consequential.',
  openGraph: {
    title: 'There Is No Neutral Trust System — Atelier',
    description:
      'An examination of how every trust system encodes assumptions about what should be preserved, recognized, and made consequential.',
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
    title: 'There Is No Neutral Trust System — Atelier',
    description:
      'An examination of how every trust system encodes assumptions about what should be preserved, recognized, and made consequential.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function ThereIsNoNeutralTrustSystemPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] px-8 pb-32 pt-40 text-white">
      <article className="mx-auto max-w-3xl">
        {/* ------------------------------------------------------------------ */}
        {/* Return Navigation                                                  */}
        {/* ------------------------------------------------------------------ */}

        <Link
          href="/writings"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
        >
          ← Writings
        </Link>

        {/* ------------------------------------------------------------------ */}
        {/* Essay Identity                                                     */}
        {/* ------------------------------------------------------------------ */}

        <header className="mt-12 border-b border-white/10 pb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            TRUST
          </p>

          <h1 className="mt-6 text-5xl font-light leading-tight tracking-[0.03em]">
            There Is No Neutral Trust System
          </h1>

          <p className="mt-5 text-base text-neutral-500">Uru Onyemaobi</p>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400">
            Every trust system embodies a philosophy. Before discussing effects
            or implementation, it is worth asking what assumptions about trust
            have already been encoded into the system itself.
          </p>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* Essay Body                                                         */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-20 space-y-8 text-lg leading-9 text-neutral-300">
          <p>
            We often get lost in words like <em>software</em>. We get lost in
            the systems we use every day simply because they are familiar.
          </p>

          <p>
            It is easy to forget that we are almost never interacting with a
            neutral system.
          </p>

          <p>That is where conversations about trust should begin.</p>

          <p>
            When we talk about trust systems, the conversation usually begins
            with either effects or implementation.
          </p>

          <blockquote className="border-l border-white/10 pl-6 italic text-neutral-400">
            <p>"I got a five-star rating."</p>
            <p className="mt-3">"I scored a ninety-two out of a hundred."</p>
          </blockquote>

          <p>These are effects.</p>

          <p>Or it begins with implementation questions.</p>

          <p>
            Should trust be represented by stars or points? Should people be
            verified? Should ratings decay over time? Should recent activity
            matter more than older activity? Should trust be aggregated into a
            single score?
          </p>

          <p>These are implementation details.</p>

          <p>These questions assume something that is rarely examined.</p>

          <p>They assume the system itself is neutral.</p>

          <p>It isn't.</p>

          <p>Every trust system embodies a philosophy.</p>

          <p>
            A five-star rating says that different experiences can be compressed
            into a single number. A reputation score says that trust can be
            accumulated over time. A ranking algorithm says that some people
            should be more visible than others. A recency model says that what
            happened yesterday matters more than what happened last year.
          </p>

          <p>None of these are purely technical decisions.</p>

          <p>They are beliefs about how trust ought to be represented.</p>

          <p>
            Every builder encodes a philosophy into a system. It becomes the
            foundation upon which every other decision is made. This is
            inescapable—for better or worse.
          </p>

          <p>
            Once those beliefs are encoded into software, they become part of
            the environment people inhabit. People adapt to them. They optimize
            for them. Over time, the architecture of the system begins shaping
            the behavior of the people inside it.
          </p>

          <p>
            This is why trust systems deserve more attention than they often
            receive.
          </p>

          <p>
            They are not simply databases for recording interactions or
            collecting data for analysis. They quietly establish incentives,
            define what becomes visible, and determine which forms of behavior
            are rewarded.
          </p>

          <p>
            Changing a trust system is therefore not only a technical exercise.
          </p>

          <p>It is a philosophical one.</p>

          <p>
            Before asking how trust should be measured, it is worth asking a
            simpler question.
          </p>

          <p>What is trust?</p>

          <p>Not as a feeling.</p>

          <p>Not as a score.</p>

          <p>But as something that exists between people.</p>

          <p>This is a first-principles question.</p>

          <p>Different answers lead to different systems.</p>

          <p>
            If trust is understood as accumulated reputation, one architecture
            follows naturally.
          </p>

          <p>
            If trust is understood as contextual responsibility, another
            architecture becomes possible.
          </p>

          <p>Neither system is neutral.</p>

          <p>
            Each reflects a different understanding of what trust is and what
            should be preserved.
          </p>

          <p>
            For that reason, conversations about trust systems should begin with
            first principles rather than implementation details.
          </p>

          <p>The interface can wait.</p>

          <p>The database can wait.</p>

          <p>Even the algorithms can wait.</p>

          <p>The philosophy cannot.</p>

          <p>
            Because once a philosophy is encoded into software, every technical
            decision that follows becomes an expression of it.
          </p>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Reading Progression                                                */}
        {/* ------------------------------------------------------------------ */}

        <footer className="mt-28 flex justify-end border-t border-white/10 pt-12">
          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Back to Writings
            </p>

            <Link
              href="/writings"
              className="mt-4 inline-flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
            >
              Writings →
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
