import Navigation from '@/components/navigation/Navigation';
import Link from 'next/link';
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
      <Navigation />
      <main className="min-h-screen">
        {/*-------------------------------------------------------------------------
        Primary atmospheric container.

        Keeps the opening field vertically centered while preserving generous 
        horizontal breathing room on wider displays.
        -------------------------------------------------------------------
      */}

        <section className="mx-auto flex min-h-screen max-w-6xl items-center px-8">
          {/*-------------------------------------------------------------------
         Core textual field.
         Constrains line width identionally.
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
        </section>
      </main>
    </>
  );
}
