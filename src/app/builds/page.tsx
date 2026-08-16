import Link from 'next/link';

/**
 * ----------------------------------------------------------------------------
 * Builds Archive
 *
 * Primary outward-facing record of systems,
 * experiments, deployed products, and active work.
 * ----------------------------------------------------------------------------
 */

const operationalStateStyles = {
  OPERATIONAL: 'bg-emerald-400/70',
  'ACTIVE DEVELOPMENT': 'bg-blue-400/70',
  RESEARCH: 'bg-amber-300/70',
  ARCHIVED: 'bg-neutral-500/70',
};

const builds = [
  {
    name: 'MpatiQ',
    operationalState: 'OPERATIONAL',
    classification: 'INFRASTRUCTURE',
    href: '/builds/mpatiq',

    description:
      'Trust infrastructure for building, preserving, and transporting person-owned contextual records of work and responsibility.',
  },

  {
    name: 'Instant Checkout Link',
    operationalState: 'ACTIVE DEVELOPMENT',
    classification: 'INFRASTRUCTURE',
    href: '/builds/instant-checkout-link',

    description:
      'Payment and checkout infrastructure designed for fast, direct transaction flow.',
  },

  {
    name: 'Atelier',
    operationalState: 'OPERATIONAL',
    classification: 'SYSTEM',
    href: '/builds/atelier',

    description:
      'Living archive for systems work, architectural notes, writings, and technical craft.',
  },

  {
    name: 'MpatiQ — Foundational Surface (2025)',
    operationalState: 'OPERATIONAL',
    classification: 'FOUNDATIONAL',
    href: '/builds/mpatiq-foundational-surface-2025',

    description:
      'Earliest outward-facing architectural surface of MpatiQ and the beginning of its trust infrastructure direction.',
  },

  {
    name: 'MpatiQ Constitutional State Machine',
    operationalState: 'ACTIVE DEVELOPMENT',
    classification: 'FOUNDATIONAL',
    href: '/builds/mpatiq-constitutional-state-machine',

    description:
      'Constitutional trust-state infrastructure governing reflection, continuity, and non-reductive trust transitions.',
  },

  {
    name: 'AshaGuard',
    operationalState: 'RESEARCH',
    classification: 'SYSTEM',
    href: '/builds/ashaguard',

    description:
      'Trust-sensitive behavioral and caregiver insight system exploring early drift detection and reflective AI support.',
  },

  {
    name: 'Nvert',
    operationalState: 'RESEARCH',
    classification: 'SYSTEM',
    href: '/builds/nvert',

    description:
      'Learning and intellectual companionship system centered on meaningful knowledge exploration, and serendipitous discovery.',
  },

  {
    name: 'E.coli Experiments',
    operationalState: 'RESEARCH',
    classification: 'EXPERIMENTAL',
    href: '/builds/e-coli-experiments',

    description:
      'Experiments exploring emergent intelligence, optimization behavior, and biased environmental navigation.',
  },

  {
    name: 'Echeta',
    operationalState: 'RESEARCH',
    classification: 'EXPERIMENTAL',
    href: '/builds/echeta',

    description:
      'Reflective time system centered on mortality, urgency, and intentional living.',
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

          <h1 className="text-5xl font-light tracking-[-0.04em] text-neutral-100">
            Systems in motion.
          </h1>
        </div>

        {/* Build archive */}
        <div className="space-y-6">
          {builds.map((build) => {
            const cardContent = (
              <>
                <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  {/* Build identity */}
                  <div>
                    <h2 className="text-xl md:text-2xl font-light text-neutral-100">
                      {build.name}
                    </h2>

                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-600">
                      {build.classification}
                    </p>
                  </div>

                  {/* Operational state + directional cue */}
                  <div className="flex items-center justify-between md:justify-start md:gap-6">
                    <div className="flex items-center gap-3">
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

                    <span className="text-lg text-neutral-700 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>

                <p className="max-w-3xl leading-relaxed text-neutral-400">
                  {build.description}
                </p>
              </>
            );

            return (
              <Link
                key={build.name}
                href={build.href}
                className="group block border border-white/5 bg-white/2 px-6 py-8 md:px-8 md:py-10 transition-colors hover:border-white/20 hover:bg-white/5"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
