import BuildPortal from '@/components/BuildPortal';
/**
 * -----------------------------------------------------------------------------------
 * MpatiQ
 *
 * Trust infrastructure for preserving and transporting records of lived responsibility
 * and witnessed conduct.
 *
 * -------------------------------------------------------------------------------------
 */

export default function MpatiQPage() {
  return (
    <main className="min-h-screen px-8 pb-32 pt-40">
      <section className="mx-auto max-w-5xl">
        {/* Build Identity */}
        <div className="mb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Infrastructure
          </p>

          <h1 className="font-light text-5xl tracking-[0.04em]">MpatiQ</h1>

          <p className="mt-8 text-lg leading-relaxed text-neutral-400">
            Trust infrastructure for preserving and transporting records of
            lived responsibility and witnessed conduct across jobs, communities,
            and platforms.
          </p>
        </div>

        <BuildPortal
          title="MpatiQ"
          image="/previews/mpatiq-portal.png"
          surfaceHref="https://www.mpatiq.com"
          operationalState="OPERATIONAL"
          statusColor="bg-emerald-400/70"
          classification="INFRASTRUCTURE"
          codeAccess="PRIVATE PROPRIETARY"
          actions={[
            {
              label: 'Visit Deployment',
              href: 'https://www.mpatiq.com',
            },

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
              Much of human trust is experienced, witnessed, and remembered, yet
              rarely preserved in structures that people can carry forward,
              across communities, opportunities, and systems.
            </p>

            <p className="leading-relaxed">
              A caregiver may become deeply trusted by families and remain
              invisible outside those relationships. A tradesperson may spend
              years earning confidence through consistency, skill, and care,
              only to begin again whenever context changes.
            </p>

            <p className="leading-relaxed">
              MpatiQ explores how lived responsibility and witnessed conduct can
              become transportable without reducing people to scores, rankings,
              follower counts, or engagement metrics.
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
            <p>Structure without reduction.</p>
            <p>Witness over aggregation.</p>
            <p>Context over compression.</p>
            <p>Continuity over performance.</p>
            <p>History should be preserved, not optimized.</p>
          </div>
        </section>

        {/* Architectural Notes */}
        <section className="mb-24">
          {/* Foundational Structures within MpatiQ */}
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Architectural Notes
          </p>

          <div className="space-y-10">
            {/* Constitutional Trust State Machine */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Constitutional Trust State Machine
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                The governing trust-state transitions underlying MpatiQ.
              </p>
            </div>

            {/* Claims and Reflection Infrastructure */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Claims and Reflection Infrastructure
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                How claims become witnessed records of conduct.
              </p>
            </div>

            {/* Trust Domains and Passports */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Trust Domains and Passports
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Context-specific trust representation without scoring.
              </p>
            </div>

            {/* Witness Reflection Architecture */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Witness Reflection Architecture
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Structured observation anchored to lived experience.
              </p>
            </div>

            {/* Dormancy and Continuity Preservation */}
            <div>
              <h3 className="text-neutral-200 text-lg">
                Dormancy and Continuity Preservation
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Preserving history without forcing perpetual activity.
              </p>
            </div>

            {/* Trust Portability Across Contexts */}
            <div>
              <h3 className="text-neutral-200 text-lg">
                Trust Portability Across Contexts
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Helping trust travel beyond the systems and environments that
                created it.
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

            {/* Research */}
            <div className="mt-10 space-y-2">
              <p>Research & Analysis</p>
            </div>

            {/* Modeling */}
            <div className="mt-10 space-y-2">
              <p>Domain-Driven Design</p>
              <p>Data Modeling</p>
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

            {/* Communication */}
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-600">
                Communication
              </h3>

              <div className="space-y-2 text-neutral-300">
                <p>Resend</p>
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

            {/* Deployment */}
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
      </section>
    </main>
  );
}
