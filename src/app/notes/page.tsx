import Link from 'next/link';

/**
 * ---------------------------------------------------------
 * Notes Archive
 *
 * Durable architectural observations, research insights, and
 * systems thinking developed alongside the process of building,
 * experimentation, and thinking about building.
 * ---------------------------------------------------------
 */

const notes = [
  {
    title: 'Stability Without Scoring',
    category: 'TRUST ARCHITECTURE',
    href: '/notes/stability-without-scoring',

    summary: "Beyond Ratings: Why Trust Shouldn't Be a Continuous Metric",
  },

  {
    title: 'Trust Windows',
    category: 'TRUST ARCHITECTURE',
    href: '/notes/trust-windows',

    summary:
      'Representing trust through bounded periods of lived responsibility',
  },

  {
    title: 'Dormancy',
    category: 'TRUST ARCHITECTURE',
    href: '/notes/dormancy',

    summary: 'Why inactivity should not diminish preserved responsibility',
  },

  {
    title: 'Constitutional Separation',
    category: 'TRUST ARCHITECTURE',
    href: '/notes/constitutional-separation',

    summary:
      'Why governance should remain independent from interface and presentation',
  },

  {
    title: 'Environmental Bias',
    category: 'COMPLEX SYSTEMS',
    href: '/notes/environmental-bias',

    summary: 'How structured environments shape adaptive behavior',
  },
];

export default function NotesPage() {
  return (
    <main className="min-h-screen px-8 pb-24 pt-40">
      <section className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-20">
          <p
            className="mb-4 text-sm uppercase tracking-[0.3em]
                    text-neutral-500"
          >
            Notes
          </p>

          <h1
            className="text-5xl font-light tracking-[0.04em]
                    text-neutral-500"
          >
            Thinking in progress.
          </h1>

          <p
            className="mt-8 max-w-3xl text-lg leading-relaxed
                    text-neutral-400"
          >
            Architectural observations, research insights, and systems thinking
            developed through the process of building.
          </p>
        </div>

        {/* Notes Archive */}
        <div className="space-y-5">
          {notes.map((note) => (
            <Link
              key={note.title}
              href={note.href}
              className="group block border border-white/5 bg-[#0b0f19] px-8 py-8 transition-colors hover:border-white/20
            hover:bg-white/3"
            >
              {/* The core object decomposed below - This will house it all. This flex container therefore has one responsibility: Arrange two things horizontally ~ (1). the content (2). the arrow  */}
              <div className="flex items-start justify-between gap-12">
                {/* Start of object's properties render */}
                <div className="max-w-3xl">
                  {/* Title of the note */}
                  <h2 className="text-2xl font-light text-neutral-100">
                    {note.title}
                  </h2>

                  {/* Category of the note */}
                  <p
                    className="mt-2 text-xs uppercase tracking-[0.25em]
                        text-neutral-600"
                  >
                    {note.category}
                  </p>

                  {/* Summary of the note */}
                  <p className="mt-6 leading-relaxed text-neutral-400">
                    {note.summary}
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
