/**
 * ------------------------------------------------------------------------------
 * MpatiQ
 *
 * Foundations into how trust, reputation, and lived responsibility would be        represented beyond profiles, scores, and traditional credentials.
 *
 * -------------------------------------------------------------------------------
 */

import BuildPortal from '@/components/BuildPortal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MpatiQ — Foundational Surface (2025) — Atelier',
  description:
    'Earliest outward-facing architectural surface of MpatiQ and the beginning of its trust infrastructure direction.',

  openGraph: {
    title: 'MpatiQ — Foundational Surface (2025) — Atelier',
    description:
      'Earliest outward-facing architectural surface of MpatiQ and the beginning of its trust infrastructure direction.',
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
    title: 'MpatiQ — Foundational Surface (2025) — Atelier',
    description:
      'Earliest outward-facing architectural surface of MpatiQ and the beginning of its trust infrastructure direction.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

// ---------------------------------------------------------------------------------
// The core page
// ---------------------------------------------------------------------------------

export default function MpatiQFoundationalPage() {
  return (
    <main className="min-h-screen px-8 pb-32 pt-40">
      <section className="mx-auto max-w-5xl">
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
            MpatiQ — Foundational Surface (2025)
          </h1>

          <p className="mt-8 text-lg max-w-3xl leading-relaxed text-neutral-400">
            The earliest outward-facing architectural surface of MpatiQ and the
            beginning of its trust infrastructure direction.
          </p>
        </div>

        <BuildPortal
          title="MpatiQ (2025)"
          image="/previews/mpatiq-foundational2.png"
          surfaceHref="https://origin.mpatiq.com/"
          operationalState="OPERATIONAL"
          statusColor="bg-emerald-400/70"
          classification="FOUNDATIONAL"
          codeAccess="OPEN SOURCE"
          actions={[
            {
              label: 'Visit',
              href: 'https://origin.mpatiq.com/',
            },

            {
              label: 'Codebase',
              href: 'https://github.com/mpatiq/mpatiq-foundational-surface',
            },
          ]}
        />

        {/* Historical Context */}
        <section className="mb-24">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Historical Context
          </p>
          <div className="max-w-3xl text-neutral-300">
            <p className="leading-relaxed">
              Built in 2025, this surface represents the first public
              articulation of MpatiQ's direction. While the system has evolved
              substantially since then, this artifact remains an important
              record of its emergence, premise, and early language.
            </p>
          </div>
        </section>

        {/* Core thesis */}
        <section className="mb-24">
          {/* Why this system exists */}
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Core Thesis
          </p>
          <div className="max-w-3xl space-y-6 text-neutral-300">
            <p className="leading-relaxed">
              The foundational surface was an attempt to make a simple
              observation visible: many of the people most trusted in real
              communities carry reputations that do not travel well.
            </p>

            <p className="leading-relaxed">
              Rather than introducing a finished trust system, the goal was to
              articulate the problem clearly enough that others could see the
              gap between lived trust and digital representation.
            </p>

            <p className="leading-relaxed">
              The work was also not intended to communicate the problem alone.
              Building it sharpened the observation itself, created the core
              ontology, and birthed early system decisions that defined the
              later system's build.
            </p>

            <p className="leading-relaxed mt-10">
              This surface therefore marked the beginning of MpatiQ's
              exploration into portability, continuity, witness, and trust as
              infrastructure.
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
            <p>Trust is infrastructure.</p>
            <p>Context gives trust meaning.</p>
            <p>Trust is not a side-effect.</p>
            <p>Continuity reveals character.</p>
            <p>Reduction loses something important.</p>
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
              {/* Origins of the Trust Infrastructure Thesis */}
              <h3 className="text-neutral-200 text-lg">
                Origins of the Trust Infrastructure Thesis
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                The observations and questions that eventually evolved into
                MpatiQ's broader trust architecture and constitutional design.
              </p>
            </div>

            {/* Foundational Trust Language */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Foundational Trust Language
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                The earliest public vocabulary used to describe trust as
                infrastructure rather than reputation, engagement, or
                visibility.
              </p>
            </div>

            {/* Early Trust Claims */}
            <div>
              <h3 className="text-lg text-neutral-200">Early Trust Claims</h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Foundational designs to preserve records of lived responsibility
                in forms that could survive movement across roles, communities,
                and systems.
              </p>
            </div>

            {/* Trust Portability Concepts */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Trust Portability Concepts
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Foundational designs for how trust would travel across
                communities, roles, and digital systems without losing context.
              </p>
            </div>

            {/* First Public System Framing */}
            <div>
              <h3 className="text-lg text-neutral-200">
                First Public System Framing
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                The earliest outward-facing articulation of the problem MpatiQ
                was attempting to solve and the direction it proposed.
              </p>
            </div>

            {/* Foundational Surface Architecture */}
            <div>
              <h3 className="text-neutral-200 text-lg">
                Foundational Surface Architecture
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                The structure, sequencing, and narrative choices used to
                transform an emerging idea into a public artifact.
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
              <p>Naming & Ontology Design</p>
              <p>Writing</p>
            </div>

            {/* Research & Analysis */}
            <div className="mt-10 space-y-2">
              <p>Research & Analysis</p>
            </div>

            {/* Engineering */}
            <div className="mt-10 space-y-2">
              <p>Frontend Development</p>
              <p>Managed Backend Service</p>
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
                <p>JavaScript</p>
                <p>React</p>
                <p>Vite</p>
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

            {/* Data & Persistence */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600">
                Data & Persistence
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Firebase</p>
                <p>Firestore</p>
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
              href="/builds/atelier"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              ← Atelier
            </Link>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Next Build
            </p>

            <Link
              href="/builds/mpatiq-constitutional-state-machine"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              MpatiQ Constitutional State Machine →
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
