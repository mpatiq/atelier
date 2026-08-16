/**
 * ------------------------------------------------------------------------------
 * Nvert
 *
 * A learning and collaboration system exploring how meaningful learning relationships might emerge through shared curiosity, serendipity, sustained exploration, and intellectual companionship.
 *
 * ------------------------------------------------------------------------------
 */
import BuildPortal from '@/components/BuildPortal';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nvert — Atelier',
  description:
    'Learning and intellectual companionship system centered on meaningful knowledge exploration and serendipitous discovery.',

  openGraph: {
    title: 'Nvert — Atelier',
    description:
      'Learning and intellectual companionship system centered on meaningful knowledge exploration and serendipitous discovery.',
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
    title: 'Nvert — Atelier',
    description:
      'Learning and intellectual companionship system centered on meaningful knowledge exploration and serendipitous discovery.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function Nvert() {
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

          <h1 className="font-light text-5xl tracking-[0.04em]">Nvert</h1>

          <p className="mt-8 text-lg max-w-3xl leading-relaxed text-neutral-400">
            Learning system for fostering intellectual companionship,
            serendipitous discovery, and meaningful knowledge exploration.
          </p>
        </div>

        <BuildPortal
          title="Nvert"
          image="/previews/nvert.png"
          surfaceHref="https://nvert-revamp.web.app/"
          operationalState="RESEARCH"
          statusColor="bg-amber-300/70"
          classification="LEARNING SYSTEM"
          codeAccess="PRIVATE PROPRIETARY"
          actions={[
            {
              label: 'Visit',
              href: 'https://nvert-revamp.web.app/',
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
            <p className="leading-relaxed">
              Nvert began as an exploration of a simple question: how might
              people pursuing difficult paths find meaningful intellectual
              companionship without relying on chance? The project explores
              structures for learning together, matching curiosities across
              disciplines, and creating environments where exploration could
              become shared in resonance.
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
            <p>Curiousity deserves structure.</p>
            <p>Depth matters more than volume.</p>
            <p>Serendipity should be cultivated.</p>
            <p>Learning is relational.</p>
            <p>Resonant companionship can accelerate growth.</p>
          </div>
        </section>

        {/* Architectural Notes */}
        <section className="mb-24">
          {/* Foundational Structures within Instant Checkout Link */}
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Architectural Notes
          </p>

          <div className="space-y-10">
            <div>
              {/* Intellectual Companionship Systems */}
              <h3 className="text-neutral-200 text-lg">
                Intellectual Companionship Systems
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Structures for helping Nverters find resonant collaboration
                within and across disciplines.
              </p>
            </div>

            {/* Matching System Foundations */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Matching System Foundations
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Explorations into compatibility, interests, motivation, and
                learning styles.
              </p>
            </div>

            {/* Study Room Architecture */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Study Room Architecture
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Shared environments designed to support focused exploration.
              </p>
            </div>

            {/* Profile and Identity Modeling */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Learning Context Modeling
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Structuring the signals needed for meaningful matching and
                exploration.
              </p>
            </div>

            {/* Structured Serendipity */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Structured Serendipity
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Designing systems that encourage valuable unexpected encounters.
              </p>
            </div>

            {/* Exploration Continuity */}
            <div>
              <h3 className="text-neutral-200 text-lg">
                Exploration Continuity
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Understanding learning as an ongoing journey rather than
                isolated sessions.
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
              <p>Matching Systems</p>
              <p>Learning Systems</p>
            </div>

            {/* Design */}
            <div className="mt-10 space-y-2">
              <p>Human-Centered Design</p>
            </div>

            {/* Engineering */}
            <div className="mt-10 space-y-2">
              <p>Product Engineering</p>
              <p>Full Stack Development</p>
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

            {/* Identity */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600 ">
                Identity
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Firebase Authentication</p>
              </div>
            </div>

            {/* Deployment */}
            <div>
              <h3 className="text-neutral-600 uppercase tracking-[0.2em] mb-3 text-sm">
                Deployment
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Firebase Hosting</p>
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
              href="/builds/ashaguard"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              ← AshaGuard
            </Link>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Next Build
            </p>

            <Link
              href="/builds/e-coli-experiments"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              E.coli Experiments →
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
