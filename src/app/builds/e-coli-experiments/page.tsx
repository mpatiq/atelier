/**
 * -----------------------------------------------------------------------------
 * E.coli Experiments
 *
 * Experimental research investigating emergent intelligence, adaptive behavior,
 * and environmental optimization through simple agent interactions.
 *
 * ----------------------------------------------------------------------------
 */

import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'E.coli Experiments — Atelier',
  description:
    'Experiments exploring emergent intelligence, optimization behavior, and biased environmental navigation.',
  openGraph: {
    title: 'E.coli Experiments — Atelier',
    description:
      'Experiments exploring emergent intelligence, optimization behavior, and biased environmental navigation.',
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
    title: 'E.coli Experiments — Atelier',
    description:
      'Experiments exploring emergent intelligence, optimization behavior, and biased environmental navigation.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function EColiExperiments() {
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
            Experimental
          </p>

          <h1 className="font-light text-5xl tracking-[0.04em]">
            E.coli Experiments
          </h1>

          <p className="mt-8 text-lg max-w-3xl leading-relaxed text-neutral-400">
            Experiments exploring emergent intelligence, optimization behavior,
            and biased environmental navigation.
          </p>
        </div>

        {/* Research Surface */}
        <section className="mb-24">
          <div className="border border-white/5 bg-white/2 p-10">
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Research Program
            </p>

            <div className="space-y-8">
              {/* Focus */}

              <div>
                <h3 className="text-neutral-200">Focus</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Emergent intelligence arising from simple adaptive agents
                  operating within biased environments.
                </p>
              </div>

              {/* Research Question */}
              <div>
                <h3 className="text-neutral-200">Research Question</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  How can simple local rules produce intelligent navigation
                  without centralized knowledge or global awareness?
                </p>
              </div>

              {/* Method */}
              <div>
                <h3 className="text-neutral-200">Method</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Simulation-based experimentation exploring environmental
                  gradients, optimization behavior, and adaptive navigation.
                </p>
              </div>

              {/* Current Phase */}
              <div>
                <h3 className="text-neutral-200">Current Phase</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Experimental design and simulation planning.
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
              E.coli Experiments investigates how adaptive behavior emerges from
              simple local rules. Inspired by the navigational strategies of{' '}
              <i>Escherichia coli</i>, the project explores how constrained
              agents interact with biased environments to produce optimization,
              exploration, and seemingly intelligent behavior without
              centralized control.
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
            <p>Simple rules can produce complex behavior.</p>
            <p>Local information can guide adaptation.</p>
            <p>
              Intelligence emerges from continuous interaction between an
              adaptive agent and its environment.
            </p>
            <p>Optimization emerges through interaction.</p>
            <p>Bias influences exploration.</p>
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
              {/* Environmental Modeling */}
              <h3 className="text-neutral-200 text-lg">
                Environmental Modeling
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Designing navigable environments with controllable gradients,
                constraints, and reward structures.
              </p>
            </div>

            {/* Agent Navigation */}
            <div>
              <h3 className="text-lg text-neutral-200">Agent Navigation</h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Exploring movement through local sensing rather than global
                awareness.
              </p>
            </div>

            {/* Optimization Dynamics */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Optimization Dynamics
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Studying how repeated interaction produces increasingly adaptive
                behavior.
              </p>
            </div>

            {/* Emergent Intelligence */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Emergent Intelligence
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Observing complex system behavior arising from simple decision
                rules.
              </p>
            </div>

            {/* Experimental Framework */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Experimental Framework
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Building repeatable simulation environments for comparing
                behavioral outcomes.
              </p>
            </div>

            {/* Bias and Adaptation */}
            <div>
              <h3 className="text-neutral-200 text-lg">Bias and Adaptation</h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Investigating how environmental bias influences exploration,
                optimization, and long-term navigation.
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
            {/* Intelligence & Complexity */}
            <div className="space-y-2">
              <p>Artificial Intelligence</p>
              <p>Complex Systems</p>
            </div>

            {/* Design */}
            <div className="mt-10 space-y-2">
              <p>Simulation Design</p>
              <p>Optimization Research</p>
            </div>

            {/* Computing & Research */}
            <div className="mt-10 space-y-2">
              <p>Scientific Computing</p>
              <p>Research & Analysis</p>
            </div>
          </div>
        </section>

        {/* Tooling */}
        <section>
          {/* Technologies that will power the work */}
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
                <p>Python</p>
              </div>
            </div>

            {/* Scientific Computing */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600">
                Scientific Computing
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>NumPy</p>
              </div>
            </div>

            {/* Research */}
            <div>
              <h3 className="text-neutral-600 uppercase tracking-[0.2em] mb-3 text-sm">
                Research
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Jupyter Notebook</p>
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
              href="/builds/echeta"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              Echeta →
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
