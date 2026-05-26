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

import Link from "next/link";

export default function Navigation() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6">
        {/* Atelier identity */}
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Atelier
        </p>

        {/* Directional Structure */}

        <nav className="flex items-center gap-8">
          <Link
          href="/builds"
           className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-opacity hover:opacity-60 cursor-pointer">
            Builds
          </Link>

          <button className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-opacity hover:opacity-60 cursor-pointer">
            Notes
          </button>

          <button className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-opacity hover:opacity-60 cursor-pointer">
            Writings
          </button>

          <button className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-opacity hover:opacity-60 cursor-pointer">
            {/* Find a better word than case later -- maybe */}
            Case Reviews
          </button>
        </nav>
      </div>
    </header>
  );
}
