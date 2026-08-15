

import Link from 'next/link';
import AtelierMark from '@/components/branding/AtelierMark';
/**
 * -------------------------------------------------------------------------
 *  Atelier - Opening Surface
 *
 * This first surface establishes the emotional and architectural tone I'm going for, for this entire environment.
 *
 * The interface must feel:
 * - spacious
 * - calm
 * - archival
 * - engineered
 * - a craftsman's home
 *
 * Nothing here should feel loud, rushed, or performative.
 * The work itself must carry the weight.
 * -------------------------------------------------------------------------
 */

export default function HomePage() {
  return (
    <>
      <main className="flex min-h-[calc(100vh-5rem)] flex-col pt-20">
        {/*-------------------------------------------------------------------------
        Primary atmospheric container.

        Keeps the opening field vertically centered while preserving generous 
        horizontal breathing room on wider displays.
        -------------------------------------------------------------------
      */}

        <section className="mx-auto flex w-full flex-1 max-w-6xl items-center justify-between gap-16 px-8">
          {/*-------------------------------------------------------------------
         Core textual field.
         Constrains line width intentionally.
         -------------------------------------------------------------------
      */}
          <div className="max-w-4xl">
            {/* Premise */}
            <h1 className="text-4xl font-light leading-[1.15] tracking-[0.03em] text-neutral-100 sm:text-5xl md:text-6xl">
              Systems, trust infrastructure,
              <br />
              software craft, and architecture.
            </h1>

            {/* Orientation */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
              A living archive of builds, writings, notes, and technical craft
              by Uru Onyemaobi.
            </p>

            {/* Directional links */}
            <div className="mt-12 flex items-center gap-8">
              <Link
                href="/builds"
                className="text-sm uppercase tracking-[0.2em] text-neutral-200 transition-opacity hover:opacity-60 cursor-pointer"
              >
                View Builds
              </Link>

              <Link
                href="/notes"
                className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-opacity hover:opacity-60 cursor-pointer"
              >
                Read Notes
              </Link>
            </div>
          </div>

          {/* Atelier architectural mark */}
          <div className="hidden shrink-0 lg:translate-x-10 lg:-translate-y-4 lg:flex lg:items-center lg:justify-center">
            <AtelierMark className="h-82 w-82 text-neutral-100" />
          </div>
        </section>
      </main>
    </>
  );
}
