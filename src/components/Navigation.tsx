/**
 * -------------------------------------
 * Atelier's Navigation Surface
 *
 * Must keep the restrained tone of the rest
 * of the archive.
 *
 * Will serve as a persistent directional
 * surface across all of the archive.
 * ---------------------------------------
 */

import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#0b0f19] backdrop-blur-md
    border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6">
        {/* Atelier identity */}
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.3em] text-neutral-500"
        >
          Atelier
        </Link>

        {/* Directional Structure */}

        <nav className="flex items-center gap-8">
          <Link
            href="/builds"
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-opacity hover:text-neutral-300 cursor-pointer"
          >
            Builds
          </Link>

          <Link
            href="/notes"
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-opacity hover:text-neutral-300 cursor-pointer"
          >
            Notes
          </Link>

          <Link
            href="/writings"
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-opacity hover:text-neutral-300 cursor-pointer"
          >
            Writings
          </Link>

          <Link
            href="/case-reviews"
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-opacity hover:text-neutral-300 cursor-pointer"
          >
            Case Reviews
          </Link>
        </nav>
      </div>
    </header>
  );
}
