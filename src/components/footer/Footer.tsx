/**
 * ----------------------------------------------------------------------------
 * Atelier Footer
 *
 * Closing surface shared across the archive.
 *
 * Purpose:
 * - establish a quiet ending
 * - provide durable external references to me.
 * - preserve the restrained tone of Atelier.
 *
 * ----------------------------------------------------------------------------
 *
 */

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div
        className="
      mx-auto
      flex
      max-w-6xl
      flex-col
      gap-8
      px-6
      py-8
      md:flex-row
      md:items-center
      md:justify-between
      md:px-8
      "
      >
        {/* ---------------------------------------------------------------- */}
        {/* Identity */}
        {/* ---------------------------------------------------------------- */}
        <p className="text-sm text-neutral-600">© 2026 Uru Onyemaobi</p>

        {/* ---------------------------------------------------------------- */}
        {/* External References */}
        {/* ---------------------------------------------------------------- */}
        <nav
          className="
        flex
        flex-wrap
        items-center
        gap-4
        text-sm
        text-neutral-500
        "
        >
          {/* GitHub Link */}
          <Link
            href="https://github.com/UruBuilds"
            target="_blank"
            className="transition-colors hover:text-neutral-300"
          >
            GitHub
          </Link>
          <span className="text-neutral-700">.</span>

          {/* X Link */}
          <Link
            href="https://x.com/anwuobodo"
            target="_blank"
            className="transition-colors hover:text-neutral-300"
          >
            X
          </Link>

          <span className="text-neutral-700">.</span>

          {/* Email Link */}
          <Link
            href="mailto:uru@mpatiq.com"
            className="transition-colors hover:text-neutral-300"
          >
            Email
          </Link>
        </nav>
      </div>
    </footer>
  );
}
