/**
 * ------------------------------------------------------------------------------
 * MpatiQ Constitutional State Machine
 *
 * Constitutional framework governing bounded trust states, constrained transitions,
 * and preservation of trust without erasure.
 *
 *
 *
 * -------------------------------------------------------------------------------
 */
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MpatiQ Constitutional State Machine — Atelier',
  description:
    'Constitutional trust-state infrastructure governing reflection, continuity, and non-reductive trust transitions.',

  openGraph: {
    title: 'MpatiQ Constitutional State Machine — Atelier',
    description:
      'Constitutional trust-state infrastructure governing reflection, continuity, and non-reductive trust transitions.',
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
    title: 'MpatiQ Constitutional State Machine — Atelier',
    description:
      'Constitutional trust-state infrastructure governing reflection, continuity, and non-reductive trust transitions.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function MpatiQConstitutionalStateMachine() {
  return (
    <main className="min-h-screen px-8 pb-32 pt-40">
      <section className="mx-auto max-w-5xl">
        {/* --------------------------------------------------------------- */}
        {/* Return Navigation */}
        {/* --------------------------------------------------------------- */}
        <Link
          href="/builds"
          className="inline-flex items-center gap-2 text-sm text-white/40
        transition-colors duration-200 hover:text-white/70"
        >
          ← Builds
        </Link>

        {/* Build Identity */}
        <div className="mt-10 mb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Foundational
          </p>

          <h1 className="font-light text-5xl tracking-[0.04em]">
            MpatiQ Constitutional State Machine
          </h1>

          <p className="mt-8 text-lg max-w-3xl leading-relaxed text-neutral-400">
            Constitutional trust-state infrastructure governing reflection,
            continuity, and non-reductive trust transitions.
          </p>
        </div>

        {/* Constitutional Surface */}
        <section className="mb-24">
          <div className="border  border-white/5 bg-white/2 p-10">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Constitutional Excerpt
            </p>

            <div className="space-y-6">
              {/* States */}
              {/* UNREFLECTED */}
              <div>
                <h3 className="text-neutral-200">UNREFLECTED</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  A complete trust state without reflections. Private by
                  default.
                </p>
              </div>

              {/* REFLECTED_LIGHT */}
              <div>
                <h3 className="text-neutral-200">REFLECTED_LIGHT</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Recognition anchored to witnessed conduct within a bounded
                  context.
                </p>
              </div>

              {/* REFLECTED_STABLE */}
              <div>
                <h3 className="text-neutral-200">REFLECTED_STABLE</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  A state requiring multiple aligned reflections.
                </p>
              </div>

              {/* DORMANT */}
              <div>
                <h3 className="text-neutral-200">DORMANT</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Preserved history withdrawn from active presentation without
                  erasure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core thesis */}
        <section className="mb-24">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Core Thesis
          </p>
          <div className="max-w-3xl space-y-6 text-neutral-300">
            <p className="leading-relaxed">
              The Constitutional State Machine exists to establish the
              constitutional rules by which trust may be represented, preserved,
              and transitioned in MpatiQ. It constrains state changes, protects
              historical continuity, and prevents trust from becoming an
              optimization target. Rather than asking how trust can be
              maximized, the state machine asks how trust can be represented
              faithfully.
            </p>
          </div>
        </section>

        {/* Systems Principles */}
        <section className="mb-24">
          {/* The laws that govern the system */}
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            System Principles
          </p>
          <div className="space-y-4 text-neutral-300">
            <p>Trust states are qualitative.</p>
            <p>History should be preserved.</p>
            <p>Dormancy is not failure.</p>
            <p>Transitions must remain constrained.</p>
            <p>Trust should not be optimized.</p>
          </div>
        </section>

        {/* Architectural Notes */}
        <section className="mb-24">
          {/* Foundational Structures within MpatiQ */}
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Architectural Notes
          </p>

          <div className="space-y-10">
            <div>
              {/* Trust State Definitions */}
              <h3 className="text-neutral-200 text-lg">
                Trust State Definitions
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                The constitutional states governing trust representation and
                continuity.
              </p>
            </div>

            {/* Transition Invariants */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Transition Invariants
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Rules constraining movement between trust states.
              </p>
            </div>

            {/* Reflection Alignment Logic */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Reflection Alignment Logic
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Conditions under which witnessed conduct may influence state.
              </p>
            </div>

            {/* Dormancy Architecture */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Dormancy Architecture
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Preserving history without requiring constant activity.
              </p>
            </div>

            {/* Constitutional Separation */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Constitutional Separation
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Separating governance from interface and presentation.
              </p>
            </div>

            {/* Historical Preservation Model */}
            <div>
              <h3 className="text-neutral-200 text-lg">
                Historical Preservation Model
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Maintaining continuity without erasure.
              </p>
            </div>
          </div>
        </section>

        {/* Disciplines */}
        <section className="mb-24">
          {/* What kinds of work were exercised in MpatiQ's creation? */}
          <p className="mb-10 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Disciplines
          </p>

          <div className="text-neutral-400">
            {/* Systems */}
            <div className="space-y-2">
              <p>Systems Design</p>
              <p>Trust Architecture</p>
            </div>

            {/* Writing & Ontology */}
            <div className="mt-10 space-y-2">
              <p>State Machine Design</p>
              <p>Ontology Design</p>
            </div>

            {/* Research & Analysis */}
            <div className="mt-10 space-y-2">
              <p>Research & Analysis</p>
            </div>
          </div>
        </section>

        {/* Tooling */}
        <section>
          {/* Technologies currently powering the system */}
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Tooling
          </p>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Foundation */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600">
                Foundation
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>TypeScript</p>
              </div>
            </div>

            {/* Documentation */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600">
                Documentation
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Markdown</p>
              </div>
            </div>

            {/* Quality Assurance */}
            <div>
              <h3 className="text-neutral-600 uppercase tracking-[0.2em] mb-3 text-sm">
                Quality Assurance
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Jest</p>
              </div>
            </div>

            {/* Closing div of entire grid is directly below */}
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Build Progression                                                */}
        {/* ------------------------------------------------------------------ */}

        <footer className="mt-28 flex items-center justify-between border-t border-white/10 pt-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Previous
            </p>

            <Link
              href="/builds/mpatiq-foundational-surface-2025"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              ← MpatiQ — Foundational Surface (2025)
            </Link>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Next Build
            </p>

            <Link
              href="/builds/nvert"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              Nvert →
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
