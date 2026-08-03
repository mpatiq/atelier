'use client';

/**
 * ----------------------------------------------------------------------------
 * Mobile Navigation
 *
 * Mobile directional surface.
 *
 * Responsibilities:
 * - Toggle Navigation
 * - Render mobile menu
 * - Close after navigation
 * ----------------------------------------------------------------------------
 *
 */

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }
  return (
    <div className="md:hidden">
      {/* Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
        className="flex h-10 w-10 items-center justify-center"
      >
        {isMenuOpen ? (
          <span className="text-3xl font-light text-neutral-400">×</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        )}
      </button>

      {/* ---------------------------------------------------------------- */}
      {/* Menu */}
      {/* ---------------------------------------------------------------- */}
      {isMenuOpen && (
        <nav
          className="
        absolute
        left-0
        top-full
        w-full
        border-t border-white/5
        bg-[#0b0f19]
        "
        >
          <div className="px-6 py-4">
            {/* Archive */}

            <div className="flex flex-col">
              {/* Builds Link */}
              <Link
                href="/builds"
                onClick={closeMenu}
                className="
                border-b border-white/5
                 py-5
                 text-sm
                 uppercase
                 tracking-[0.2em]
                 text-neutral-400
                 transition-colors
                 hover:text-neutral-200
                 "
              >
                Builds
              </Link>

              {/* Notes Link */}
              <Link
                href="/notes"
                onClick={closeMenu}
                className="
                border-b border-white/5
                 py-5
                 text-sm
                 uppercase
                 tracking-[0.2em]
                 text-neutral-400
                 transition-colors
                 hover:text-neutral-200
                 "
              >
                Notes
              </Link>

              {/* Writings Link */}
              <Link
                href="/writings"
                onClick={closeMenu}
                className="
                border-b border-white/5
                 py-5
                 text-sm
                 uppercase
                 tracking-[0.2em]
                 text-neutral-400
                 transition-colors
                 hover:text-neutral-200
                 "
              >
                Writings
              </Link>
            </div>

            {/* Contact */}
            <div className="mt-5">
              {/* Contact Link */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="
                border-b border-white/5
                 py-5
                 text-sm
                 uppercase
                 tracking-[0.2em]
                 text-neutral-400
                 transition-colors
                 hover:text-neutral-200
                 "
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
