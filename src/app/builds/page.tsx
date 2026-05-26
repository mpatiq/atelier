/**
 * --------------------------------------------------------------------------------
 * Builds Archive
 *
 * Primary outward-facing record of systems,
 * experiments, deployed products, and active work.
 *
 * --------------------------------------------------------------------------------
 */

// ---------------------------------------------------------------------------
// State Indicator System
// ---------------------------------------------------------------------------
const operationalStateStyles = {
  LIVE: 'bg-emerald-400/70',
  ACTIVE: 'bg-blue-400/70',
  RESEARCH: 'bg-amber-300/70',
  ARCHIVED: 'bg-neutral-500/70',
};

const builds = [
  {
    name: 'MpatiQ',
    operationalState: 'LIVE',
    classification: 'INFRASTRUCTURE',

    description:
      'Trust infrastructure for preserving and transporting records of lived responsibilty and witnessed conduct.',
  },

  {
    name: 'Atelier',
    operationalState: 'ACTIVE',
    classification: 'SYSTEM',

    description:
      'A living archive for systems work, architectural notes, writings, and technical craft.',
  },

  {
    name: 'MpatiQ — Foundational Surface (2025)',
    operationalState: 'LIVE',
    classification: 'FOUNDATIONAL',

    description:
      "MpatiQ's earliest outward-facing architectural surface and the beginnings of its trust infrastructure direction.",
  },

  {
    name: 'MpatiQ Constitutional State Machine',
    operationalState: 'ACTIVE',
    classification: 'FOUNDATIONAL',

    description:
      'Constitutional trust-state infrastructure governing reflection, continuity, and non-reductive trust transitions.',
  },

  {
    name: 'Instant Checkout Link',
    operationalState: 'ACTIVE',
    classification: 'SYSTEM',

    description:
      'Practical payment and checkout infrastructure designed for fast, direction transaction flow.',
  },

  {
    name: 'Nvert',
    operationalState: 'RESEARCH',
    classification: 'SYSTEM',

    description:
      'AI-assisted learning and intellectual companionship infrastructure centered on deep exploration and serendipity.',
  },

  {
    name: 'AshaGuard',
    operationalState: 'RESEARCH',
    classification: 'SYSTEM',

    description:
      'Trust-sensitive behavioral and caregiver insight system exploring early drift detection and reflective AI support.',
  },

  {
    name: 'E.coli Experiments',
    operationalState: 'RESEARCH',
    classification: 'SYSTEM',

    description:
      'Experiments exploring emergent intelligence, optimization behavior, and biased environmental navigation.',
  },

  {
    name: 'Echeta',
    operationalState: 'RESEARCH',
    classification: 'EXPERIMENTAL',

    description:
      'A reflective temporal system centered on mortality, urgency, and intentional living.',
  },
];

export default function BuildsPage() {
  return (
    <main className="min-h-screen px-8 pb-24 pt-40">
      <section className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Builds
          </p>

          <h1 className="text-5xl font-light tracking-[0.04em] text-neutral-100">
            Systems in motion.
          </h1>
        </div>

        {/* Build archive */}
        <div className="space-y-6">
          {builds.map((build) => (
            <article
              key={build.name}
              className="border border-white/5 bg-white/2 px-8 py-10 transition-colors hover:border-white/20 hover:bg-white/5 rounded-sm cursor-pointer"
            >
              <div className="mb-6 flex items-center justify-between">
                {/* Build Identity*/}
                <div>
                  <h2 className="text-2xl font-light text-neutral-100">
                    {build.name}
                  </h2>

                  {/* Build Classification */}
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-600">
                    {build.classification}
                  </p>
                </div>

                {/* Operational State */}
                <div className="flex items-center gap-3">

                  {/* Self-closing div of state's color */}
                  <div
                    className={`h-2 w-2 rounded-full ${
                      operationalStateStyles[
                        build.operationalState as keyof typeof operationalStateStyles
                      ]
                    }`}
                  />

                  <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    {build.operationalState}
                  </span>
                </div>
              </div>

              <p className="max-w-3xl leading-relaxed text-neutral-400">
                {build.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
