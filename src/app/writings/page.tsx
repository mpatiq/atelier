/**
 * ---------------------------------------------------------------------
 * Writings
 *
 * Long-form essays exploring software, trust, systems, craft, and the
 * ideas that emerge through building.
 * ---------------------------------------------------------------------
 */

import Link from 'next/link';

const writings = [
  {
    title: 'There Is No Neutral Trust System',
    category: 'TRUST',
    href: '/writings/there-is-no-neutral-trust-system',

    summary:
      'Every trust system embodies a philosophy, whether it acknowledges it or not.',
  },

  {
    title: 'Software Has Constitutions',
    category: 'SOFTWARE',
    href: '/writings/software-has-constitutions',

    summary:
      'Why the governing rules of a software system deserve as much attention as its features.',
  },

  {
    title: 'Building Before Permission',
    category: 'LIFE',
    href: '/writings/software-has-constitutions',

    summary:
      'On building before recognition, certainty, or external validation. ',
  },

  {
    title: 'Why I build Infrastructure',
    category: 'PERSONAL',
    href: '/writings/why-i-build-infrastructure',

    summary:
      'A reflection on the systems I keep returning to and the work they make possible.',
  },

  {
    title: 'Craft — A Way of Being and Its Cost',
    category: 'CRAFT',
    href: '/writings/craft-a-way-of-being-and-its-cost',

    summary:
      'On reality, judgment, mastery, and the lifelong discipline of caring deeply about the work.',
  },
];

export default function WritingsPage() {
  return (
    <main className="min-h-screen px-8 pb-24 pt-40">
      <section className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-20">
          <p
            className="mb-4 text-sm uppercase tracking-[0.3em]
                    text-neutral-500"
          >
            Writings
          </p>

          <h1
            className="text-5xl font-light tracking-[0.04em]
                    text-neutral-500"
          >
            Essays in progress.
          </h1>

          <p
            className="mt-8 max-w-3xl text-lg leading-relaxed
                    text-neutral-400"
          >
            Long-form essays on craft, trust, systems, and what emerges through
            the process of building and submersion.
          </p>
        </div>

        {/* Writings Archive */}
        <div className="space-y-5">
          {writings.map((writing) => (
            <Link
              key={writing.title}
              href={writing.href}
              className="group block border border-white/5 bg-[#0b0f19] px-8 py-8 transition-colors hover:border-white/20
            hover:bg-white/3"
            >
              {/* Layout manager */}
              {/* The core object decomposed - this will house it all. This flex container therefore has one responsibility: Arrange two things horizontally ~ (1). the content (2). the arrow */}

              <div className="flex items-start justify-between gap-12">
                {/* Start of object's properties render */}
                <div className="max-3-xl">
                  {/* Title of the writing */}
                  <h2 className="text-2xl font-light text-neutral-100">
                    {writing.title}
                  </h2>

                  {/* Category of the writing */}
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-600">
                    {writing.category}
                  </p>

                  {/* Summary of the writing */}
                  <p className="mt-6 leading-relaxed text-neutral-400">
                    {writing.summary}
                  </p>
                </div>

                {/* The accessory - the other flex-child: The arrow */}
                <span className="mt-1 text-lg text-neutral-700 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
