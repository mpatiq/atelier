import BuildPortal from '@/components/BuildPortal';
/**
 * -----------------------------------------------------------------------------------
 * MpatiQ
 *
 * Foundations into how trust, reputation, and lived responsibility would be        represented beyond profiles, scores, and traditional credentials.
 *
 * -------------------------------------------------------------------------------------
 */

export default function AshaGuardPage() {
  return (
    <main className="min-h-screen px-8 pb-32 pt-40">
      <section className="mx-auto max-w-5xl">
        {/* Build Identity */}
        <div className="mb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Research
          </p>

          <h1 className="font-light text-5xl tracking-[0.04em]">
            AshaGuard — Care System Prototype
          </h1>

          <p className="mt-8 text-lg max-w-3xl leading-relaxed text-neutral-400">
            An early research prototype exploring trust-sensitive care systems
            through reflective interaction and behavioral observation, examining
            how future AI systems might help caregivers notice subtle behavioral
            and trust drift over time.
          </p>
        </div>

        <BuildPortal
          title="AshaGuard"
          image="/previews/ashaguard_3.png"
          surfaceHref="https://ashaguard.vercel.app/"
          operationalState="RESEARCH"
          statusColor="bg-amber-300/70"
          classification="CARE SYSTEM"
          codeAccess="OPEN SOURCE"
          imageObjectPosition="2.5% top"
          actions={[
            {
              label: 'Visit',
              href: 'https://ashaguard.vercel.app/',
            },

            {
              label: 'Codebase',
              href: 'https://github.com/mpatiq/ashaguard',
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
              Built in 2025, AshaGuard represents an early research exploration
              into trust-sensitive care systems. Developed within MpatiQ Labs,
              the prototype examined whether reflective writing and future
              AI-assisted interpretation could help caregivers notice subtle
              behavioral and trust drift in people living with Alzheimer's
              disease. While the implementation remained intentionally simple,
              the artifact preserves the original research question and
              interaction model that motivated the work.
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
              AshaGuard began with a core question: could structured reflection
              and future AI systems help caregivers notice subtle behavioral and
              trust drift that often emerges gradually over time?
            </p>

            <p className="leading-relaxed mt-10">
              Rather than attempting diagnosis or clinical decision-making, the
              prototype explored how reflective interaction might become an
              additional source of context for supporting care, preserving
              observations, and surfacing patterns that may otherwise go
              unnoticed.
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
            <p>Support care, not replace judgment.</p>
            <p>Surface patterns before conclusions.</p>
            <p>Treat reflection as meaningful context.</p>
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
              {/* Reflective Input Surface */}
              <h3 className="text-neutral-200 text-lg">
                Reflective Input Surface
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Capturing short personal reflections as structured inputs into
                future care-oriented interpretation systems.
              </p>
            </div>

            {/* Behavioral Signal Exploration */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Behavioral Signal Exploration
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Exploring whether ordinary reflective writing could become an
                additional signal for observing gradual behavioral and trust
                drift.
              </p>
            </div>

            {/* Reflective Interaction Model */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Reflective Interaction Model
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Prototyping the interaction between caregiver and patient
                reflections and future AI-assisted interpretation before
                implementing an intelligence layer.
              </p>
            </div>

            {/* Caregiver Support Framing */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Caregiver Support Framing
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Building AI as a supportive observational layer that augments
                caregiver awareness rather than replacing human judgment.
              </p>
            </div>

            {/* Trust-Sensitive Care Architecture */}
            <div>
              <h3 className="text-lg text-neutral-200">
                Trust-Sensitive Care Architecture
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Exploring how reflective systems might preserve contextual
                observations that accumulate meaning across time.
              </p>
            </div>

            {/* Prototype Interaction Loop */}
            <div>
              <h3 className="text-neutral-200 text-lg">
                Prototype Interaction Loop
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                Testing the complete flow from reflection, to interpretation, to
                insight as the foundational interaction model for future
                research and production.
              </p>
            </div>
          </div>
        </section>

        {/* Disciplines */}
        <section className="mb-24">
          {/* What kinds of work were exercised in AshaGuard's creation? */}
          <p className="mb-10 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Disciplines
          </p>

          <div className="text-neutral-400">
            {/* Care Systems */}
            <div className="space-y-2">
              <p>Care Systems Design</p>
              <p>Human-Centered Design</p>
            </div>

            {/* Research */}
            <div className="mt-10 space-y-2">
              <p>Research & Analysis</p>
              <p>Interaction Design</p>
            </div>

            {/* AI & Reflection */}
            <div className="mt-10 space-y-2">
              <p>AI Interaction Design</p>
              <p>Behavioral Modeling</p>
            </div>

            {/* Engineering */}
            <div className="mt-10 space-y-2">
              <p>Frontend Development</p>
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
      </section>
    </main>
  );
}
