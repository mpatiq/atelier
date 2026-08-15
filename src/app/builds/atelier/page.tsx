/**
 * ------------------------------------------------------------------------------
 * Atelier
 *
 * Living archive preserving an ongoing body of work across systems, software,
 * architecture, research, and writing
 *
 * ------------------------------------------------------------------------------
 */

import BuildPortal from '@/components/BuildPortal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atelier',
  description:
    'Living archive for systems work, architectural notes, writings, and technical craft.',
};

export default function AtelierPage() {
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
            System
          </p>

          <h1 className="font-light text-5xl tracking-[0.04em]">Atelier</h1>

          <p className="mt-8 text-lg max-w-3xl leading-relaxed text-neutral-400">
            A living archive for systems work, architectural notes, writings,
            and technical craft.
            <br />
            Preserved consciously.
          </p>
        </div>

        <BuildPortal
          title="Atelier"
          image="/previews/atelier_2.png"
          surfaceHref="https://atelier.mpatiq.com/"
          operationalState="OPERATIONAL"
          statusColor="bg-emerald-400/70"
          classification="PRESERVATION SYSTEM"
          codeAccess="OPEN SOURCE"
          actions={[
            {
              label: 'Visit',
              href: 'https://atelier.mpatiq.com/',
            },

            {
              label: 'Codebase',
              href: 'https://github.com/mpatiq/atelier',
            },
          ]}
        />

        {/* Core thesis */}
        <section className="mb-24">
          {/* Why this system exists */}
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Core Thesis
          </p>
          <div className="max-w-3xl space-y-6 text-neutral-300">
            <p className="leading-relaxed">Software.</p>

            <p className="leading-relaxed">Ideas.</p>

            <p className="leading-relaxed">Architectures.</p>

            <p className="leading-relaxed">Research.</p>

            <p className="leading-relaxed">
              Much of the work that shapes systems is rarely visible in one
              place.
            </p>

            <p className="leading-relaxed">
              Builds become disconnected from the thinking that produced them.
            </p>

            <p className="leading-relaxed">
              Notes disappear into private folders and untouched stacks.
            </p>

            <p className="leading-relaxed">
              Architectural decisions are forgotten once software ships.
            </p>

            <p className="leading-relaxed">
              Writing becomes separated from engineering.
            </p>

            <div className="mt-8">
              <p className="leading-relaxed">
                Atelier exists to preserve that continuity.
              </p>
            </div>
          </div>
        </section>

        {/* Systems Principles */}
        <section className="mb-24">
          {/* The laws that govern the system */}
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            System Principles
          </p>
          <div className="space-y-4 text-neutral-300">
            <p>Work should remain connected to its thinking.</p>
            <p>Ideas deserve preservation.</p>
            <p>Revisit your work.</p>
            <p>Purify it.</p>
            <p>Remain recursive.</p>
          </div>
        </section>

        {/* Architectural Notes */}
        <section className="mb-24">
          {/* Foundational Structures within Atelier */}
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Architectural Notes
          </p>

          <div className="space-y-10">
            {/* Builds */}
            <div>
              <h3 className="text-lg text-neutral-200">Builds</h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                The primary record of systems, products, experiments, and
                ongoing work. Each build preserves not only what was created,
                but the architectural thinking and engineering disciplines that
                shaped it.
              </p>
            </div>

            {/* Notes */}
            <div>
              <h3 className="text-lg text-neutral-200">Notes</h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Architectural observations, engineering notes, and meta-patterns
                identified through the building and examination of systems.
              </p>
            </div>

            {/* Writings */}
            <div>
              <h3 className="text-lg text-neutral-200">Writings</h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Long-form essays on software, invention, trust infrastructure,
                architecture, and the intellectual foundations that shape
                enduring systems.
              </p>
            </div>

            {/* Shared Build Portal */}
            <div>
              <h3 className="text-lg text-neutral-200">Shared Build Portal</h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                A reusable presentation surface providing a consistent
                structural language across builds while allowing each project to
                express its own identity, status, disciplines, and tooling.
              </p>
            </div>

            {/* Information Architecture */}
            <div>
              <h3 className="text-neutral-200 text-lg">
                Information Architecture
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                An information architecture designed to preserve the
                relationships between builds, writings, and notes, keeping
                builds, ideas, and context connected across independent pages.
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
              <p>Information Architecture</p>
            </div>

            {/* Writing & Ontology */}
            <div className="mt-10 space-y-2">
              <p>Writing</p>
            </div>

            {/* Engineering & Design */}
            <div className="mt-10 space-y-2">
              <p>Product Engineering</p>
              <p>Front-End Development</p>
            </div>

            {/* Design & Visuals */}
            <div className="mt-10 space-y-2">
              <p>Interaction Design</p>
              <p>Visual Systems</p>
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
                <p>React</p>
                <p>Next.js</p>
              </div>
            </div>

            {/* Interface */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600">
                Interface
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Tailwind CSS</p>
              </div>
            </div>

            {/* Deployment */}
            <div>
              <h3 className="text-neutral-600 uppercase tracking-[0.2em] mb-3 text-sm">
                Deployment
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Vercel</p>
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
              href="/builds/mpatiq"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              ← MpatiQ
            </Link>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Next Build
            </p>

            <Link
              href="/builds/mpatiq-foundational-surface-2025"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              MpatiQ — Foundational Surface (2025) →
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
