/**
 * -----------------------------------------------------------------------------
 * Stability Without Scoring
 *
 * The opening note in the Trust Architecture series.
 *
 * This note introduces the central philosophical departure behind MpatiQ:
 * trust should not be appreciated as a continuously accumulating metric, but
 * as preserved records of lived responsibility.
 *
 *
 * ----------------------------------------------------------------------------
 */

import Link from 'next/link';

export default function StabilityWithoutScoringPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] px-8 pb-32 pt-40 text-white">
      <article className="mx-auto max-w-3xl">
        {/* --------------------------------------------------------------- */}
        {/* Return Navigation */}
        {/* --------------------------------------------------------------- */}
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-sm text-white/40
        transition-colors duration-200 hover:text-white/70"
        >
          ← Notes
        </Link>
        {/* --------------------------------------------------------------- */}
        {/* Note Identity */}
        {/* --------------------------------------------------------------- */}

        <header className="mt-12 border-b border-white/10 pb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Trust Architecture
          </p>
          <h1 className="mt-6 text-5xl font-light tracking-[0.03em] leading-tight">
            Stability Without Scoring
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400">
            Beyond Ratings: Why Trust Shouldn't Be a Continuous Metric
          </p>
        </header>

        {/* --------------------------------------------------------------- */}
        {/* Note body */}
        {/* --------------------------------------------------------------- */}

        <section className="mt-20 space-y-8 text-lg leading-9 text-neutral-300">
          <p>
            Most digital trust systems today represent trust as a continuously
            changing value. Every interaction adds to it, subtracts from it, or
            recalculates it. Over time, a person's history is compressed into a
            single number that attempts to summarize who they are.
          </p>
          {/* Paragraph 2 */}
          <p>
            This approach is attractive because it is simple. Numbers are easy
            to compare, rank, aggregate, and automate. They allow platforms to
            make rapid decisions while presenting trust as something immediately
            understandable.
          </p>
          <p>The simplification, however, comes at a cost.</p>

          <p>
            Trust is not a resource that accumulates continuously. It is
            expressed through responsibility, context, and time. The confidence
            someone has earned as a teacher says little about how they perform
            as a contractor. The reliability demonstrated during one period of
            work does not automatically describe another separated by years,
            different responsibilities, or changed circumstances.
          </p>

          <p>
            Continuous scoring assumes that trust behaves like a bank account.
            Good actions increase the balance. Bad actions reduce it. The
            system's objective becomes maintaining a lifetime total.
          </p>
          <p>Human trust rarely works this way.</p>

          <p>
            Instead, trust is usually formed around bounded experiences. We
            remember how someone conducted themselves during a project,
            throughout a season of employment, while caring for a family member,
            or over the course of building a home. Those experiences possess
            beginnings, endings, participants, and witnesses.
          </p>

          <p>
            Representing trust as a continuous metric dissolves those
            boundaries. Independent periods become blended together until their
            individual meaning is lost. Context gives way to accumulation.
          </p>
          <p>
            A trust system should preserve experiences rather than compress
            them.
          </p>

          <p>
            Its objective is not to produce a universal measure of character. It
            is to preserve accurate records of responsibility within the
            circumstances where that responsibility was actually observed.
          </p>

          <p>
            When trust is represented as preserved experiences instead of
            accumulated scores, interpretation returns to people rather than
            algorithms. Readers are free to examine the context, the duration,
            and the individuals involved before forming their own judgment.
          </p>
          <p>The role of the system is not to decide who is trustworthy.</p>
          <p className="text-white">
            Its responsibility is to preserve trustworthy evidence.
          </p>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* Reading Progression */}
        {/* ------------------------------------------------------------ */}
        <footer className="mt-28 border-t border-white/10 pt-12">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Continue Reading
          </p>
          {/* Link to next note */}
          <Link
            href="/notes/trust-windows"
            className="mt-5 inline-flex items-center gap-3 text-2xl font-light transition-opacity duration-200 hover:opacity-70"
          >
            Trust Windows
            <span aria-hidden>→</span>
          </Link>
        </footer>
      </article>
    </main>
  );
}
