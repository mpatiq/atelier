/**
 * -------------------------------------
 * Atelier's Navigation Surface
 *
 * Persistent directional surface shared
 * across the Atelier archive.
 *
 * Must keep the restrained tone of the rest
 * of the archive.
 *
 * Responsive by design:
 * - Desktop navigation
 * - Mobile navigation
 * ---------------------------------------
 */

import Link from 'next/link';
import MobileNavigation from './MobileNavigation';

export default function Navigation() {
  return (
    <header
      className="fixed top-0 z-50 w-full bg-[#0b0f19]/95 backdrop-blur-md
    border-b border-white/5"
    >
      <div className="mx-auto h-20 flex max-w-6xl items-center justify-between px-6 md:px-8">
        {/* Atelier identity */}
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.3em] text-neutral-500"
        >
          Atelier
        </Link>

        {/* ---------------------------------------------------------------- */}
        {/* Desktop Navigation */}
        {/* ---------------------------------------------------------------- */}

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/builds"
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Builds
          </Link>

          <Link
            href="/notes"
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Notes
          </Link>

          <Link
            href="/writings"
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Writings
          </Link>

          <Link
            href="/contact"
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Contact
          </Link>
        </nav>

        {/*  */}

        {/* ---------------------------------------------------------------- */}
        {/* Mobile Navigation
        {/* ---------------------------------------------------------------- */}
        <MobileNavigation />
      </div>
    </header>
  );
}
