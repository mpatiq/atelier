/**
 * -------------------------------------------------------------------------------
 * Instant Checkout Link
 *
 * Commerce infrastructure for creating, sharing,
 * and tracking payment links without a storefront.
 *
 * -------------------------------------------------------------------------------
 */
import BuildPortal from '@/components/BuildPortal';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instant Checkout Link — Atelier',
  description:
    'Payment and checkout infrastructure designed for fast, direct transaction flow.',

  openGraph: {
    title: 'Instant Checkout Link — Atelier',
    description:
      'Payment and checkout infrastructure designed for fast, direct transaction flow.',
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
    title: 'Instant Checkout Link — Atelier',
    description:
      'Payment and checkout infrastructure designed for fast, direct transaction flow.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function InstantCheckoutLink() {
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
            Commerce System
          </p>

          <h1 className="font-light text-5xl tracking-[0.04em]">
            Instant Checkout Link
          </h1>

          <p className="mt-8 text-lg max-w-3xl leading-relaxed text-neutral-400">
            A commerce system designed around fast, direct payment and checkout
            flows.
          </p>
        </div>

        <BuildPortal
          title="Instant Checkout Link"
          image="/previews/instant-checkout-link-overview.png"
          surfaceHref="https://github.com/mpatiq"
          operationalState="ACTIVE DEVELOPMENT"
          statusColor="bg-blue-400/70"
          classification="COMMERCE SYSTEM"
          codeAccess="PRIVATE PROPRIETARY"
          actions={[
            {
              label: 'Organization',
              href: 'https://github.com/mpatiq',
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
              Instant Checkout Link sets out to reduce transactional friction.
            </p>

            <p className="leading-relaxed">
              It provides a way for merchants to move from intent to transaction
              with minimal ceremony.
            </p>

            <p className="leading-relaxed">
              The system is designed around making payment and checkout flows
              direct, portable, and simple to use.
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
            <p>Reduce friction.</p>
            <p>Shorten the path from intent to action.</p>
            <p>Make payment portable.</p>
            <p>Preserve clarity.</p>
            <p>Keep complexity behind the surface.</p>
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
              {/* Checkout Link Generation */}
              <h3 className="text-neutral-200 text-lg">
                Checkout Link Generation
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Creating portable payment surfaces.
              </p>
            </div>

            {/* Product Configuration Model */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Product Configuration Model
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Defining purchasable offerings and metadata.
              </p>
            </div>

            {/* Payment Flow Architecture */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Payment Flow Architecture
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Managing transitions from link to transaction.
              </p>
            </div>

            {/* Merchant Surface Design */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Merchant Surface Design
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Presenting products with minimal friction.
              </p>
            </div>

            {/* Link Distribution Model */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Link Distribution Model
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Enabling checkout portability across channels.
              </p>
            </div>

            {/* Transaction Completion Flow */}
            <div>
              <h3 className="text-neutral-200 text-lg">
                Transaction Completion Flow
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Handling successful and failed payment outcomes.
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
              <p>Payments Integration</p>
            </div>

            {/* Research & Analysis */}
            <div className="mt-10 space-y-2">
              <p>Research & Analysis</p>
            </div>

            {/* Engineering */}
            <div className="mt-10 space-y-2">
              <p>Product Engineering</p>
              <p>Full Stack Development</p>
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

            {/* Data & Persistence */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600">
                Data & Persistence
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Prisma</p>
                <p>Supabase</p>
              </div>
            </div>

            {/* External Services */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600 ">
                External Services
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Stripe API</p>
              </div>
            </div>

            {/* Events Infrastructure */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600 ">
                Events Infrastructure
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Stripe Webhooks</p>
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
              href="/builds/nvert"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              ← Nvert
            </Link>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Next Build
            </p>

            <Link
              href="/builds/ashaguard"
              className="mt-4 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-70"
            >
              AshaGuard →
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
