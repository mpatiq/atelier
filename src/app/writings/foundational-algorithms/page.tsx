/**
 * -----------------------------------------------------------------------------
 * Foundational Algorithms
 *
 * An essay on the foundational logic that brings software systems into
 * existence, and the difference between invention and optimization.
 * -----------------------------------------------------------------------------
 */

import Link from 'next/link';

export default function FoundationalAlgorithmsPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] px-8 pb-32 pt-40 text-white">
      <article className="mx-auto max-w-3xl">
        {/* ------------------------------------------------------------------ */}
        {/* Return Navigation                                                  */}
        {/* ------------------------------------------------------------------ */}

        <Link
          href="/writings"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
        >
          ← Writings
        </Link>

        {/* ------------------------------------------------------------------ */}
        {/* Essay Identity                                                     */}
        {/* ------------------------------------------------------------------ */}

        <header className="mt-12 border-b border-white/10 pb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Software
          </p>

          <h1 className="mt-6 text-5xl font-light leading-tight tracking-[0.03em]">
            Foundational Algorithms
          </h1>

          <p className="mt-5 text-base text-neutral-500">Uru Onyemaobi</p>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400">
            On the foundational logic that brings systems into existence, and
            why invention and optimization are different disciplines
          </p>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* Essay Body                                                         */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-20 space-y-8 text-lg leading-9 text-neutral-300">
          <p>
            When we hear about algorithms, our minds usually go to the popular
            ones.
          </p>

          <p>Search algorithms.</p>

          <p>Sorting algorithms.</p>

          <p>Graphs.</p>

          <p>Today, increasingly, AI-based algorithms.</p>

          <p>Decision trees.</p>

          <p>Clustering.</p>

          <p>Neural networks.</p>

          <p>These are important.</p>

          <p>They solve difficult problems.</p>

          <p>But they are not the first algorithms.</p>

          <p>
            There is another layer that every software system must first rest
            upon.
          </p>

          <p>The constitutions of software.</p>

          <p>
            The algorithms that determine what the system is before anyone
            begins deciding how well it performs.
          </p>

          <p>
            The nature of our profession makes these algorithms easy to
            overlook.
          </p>

          <p>
            Most of us interview into companies whose foundations already exist.
          </p>

          <p>The business already runs.</p>

          <p>The product already exists.</p>

          <p>The states have already been defined.</p>

          <p>The relationships have already been established.</p>

          <p>The system can already survive without us.</p>

          <p>We are usually being invited to make it better.</p>

          <p>Reduce latency.</p>

          <p>Improve reliability.</p>

          <p>Scale the infrastructure.</p>

          <p>Build another feature.</p>

          <p>Refactor the code.</p>

          <p>These are valuable problems.</p>

          <p>But they are optimization problems.</p>

          <p>
            Because we spend most of our careers solving optimization problems,
            our understanding of algorithms becomes silently shaped by them.
          </p>

          <p>
            We begin to think of algorithms primarily as things that optimize.
          </p>

          <p>Search faster.</p>

          <p>Sort faster.</p>

          <p>Recommend better.</p>

          <p>Predict more accurately.</p>

          <p>
            We rarely stop to ask what had to exist before any of those
            questions could even be asked.
          </p>

          <p>Foundational algorithms ask different questions.</p>

          <p>What is this thing?</p>

          <p>What states can it occupy?</p>

          <p>Which states should never exist?</p>

          <p>How does one state become another?</p>

          <p>What relationships exist between the things inside the system?</p>

          <p>Who has authority?</p>

          <p>What should never change?</p>

          <p>These are not optimization questions.</p>

          <p>They are first-principles questions.</p>

          <p>They are questions of definition.</p>

          <p>Of ontology.</p>

          <p>Of state.</p>

          <p>Of relationships.</p>

          <p>
            They are the skeletal structures that allow a system to exist at
            all.
          </p>

          <p>
            The procedures that enforce these foundational definitions and state
            transitions are themselves algorithms. They determine not merely how
            the system behaves, but what behavior is possible in the first
            place.
          </p>

          <p>After all, you cannot optimize what doesn't exist.</p>

          <p>You need a road before you can identify the shortest path.</p>

          <p>
            This is why invention and optimization are different disciplines.
          </p>

          <p>Optimization begins with something that already exists.</p>

          <p>
            Invention begins with the question of what ought to exist in the
            first place.
          </p>

          <p>Neither is superior.</p>

          <p>Every invention eventually demands optimization.</p>

          <p>
            Every optimization depends upon an invention that came before it.
          </p>

          <p>The mistake is believing they are the same activity.</p>

          <p>They are not.</p>

          <p>One asks,</p>

          <blockquote className='border-l border-white/10 pl-6 text-xl font-light text-neutral-400'>
            “How can this become better?”
          </blockquote>

          <p>The other asks,</p>

          <blockquote className="border-l border-white/10 pl-6 text-xl font-light text-neutral-400">
            “What should exist at all?”
          </blockquote>

          <p>The second question is usually the lonelier one.</p>

          <p>There are no benchmarks.</p>

          <p>No existing architecture.</p>

          <p>No accepted definitions.</p>

          <p>Only first principles.</p>

          <p>You are deciding the nature of the thing itself.</p>

          <p>Everything that follows inherits those decisions.</p>

          <p>Long before the first optimization algorithm is ever written.</p>

          <p className="text-white">
            That is where the work of invention begins.
          </p>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Return to Writings                                                 */}
        {/* ------------------------------------------------------------------ */}

        <footer className="mt-28 flex justify-end border-t border-white/10 pt-12">
          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Back to Writings
            </p>

            <Link
              href="/writings"
              className="mt-4 inline-flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
            >
              Writings →
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
