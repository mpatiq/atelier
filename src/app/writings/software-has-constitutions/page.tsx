/**
 * -----------------------------------------------------------------------------
 * Software Has Constitutions
 *
 * Software Has Constitutions
 *
 * Software is governed not only by interfaces, databases, and APIs, but by the
 * constitutional rules that determine what is possible, what is permitted, and
 * where authority ultimately resides.
 *
 */

import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Software Has Constitutions — Atelier',
  description:
    'An argument that software systems embody governing rules, constraints, permissions, and assumptions whether their designers acknowledge them or not.',
  openGraph: {
    title: 'Software Has Constitutions — Atelier',
    description:
      'An argument that software systems embody governing rules, constraints, permissions, and assumptions whether their designers acknowledge them or not.',
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
    title: 'Software Has Constitutions — Atelier',
    description:
      'An argument that software systems embody governing rules, constraints, permissions, and assumptions whether their designers acknowledge them or not.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function SoftwareHasConstitutionsPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] px-8 pb-32 pt-40 text-white">
      <article className="mx-auto max-w-3xl">
        {/* ----------------------------------------------------------- */}
        {/* Return Navigation */}
        {/* ----------------------------------------------------------- */}

        <Link
          href="/writings"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
        >
          ← Writings
        </Link>

        {/* ----------------------------------------------------------- */}
        {/* Essay Identity */}
        {/* ----------------------------------------------------------- */}

        <header className="mt-12 border-b border-white/10 pb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            SOFTWARE
          </p>

          <h1 className="mt-6 text-5xl font-light leading-tight tracking-[0.03em]">
            Software Has Constitutions
          </h1>

          <p className="mt-5 text-base text-neutral-500">Uru Onyemaobi</p>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400">
            Software is governed not only by interfaces, databases, and APIs,
            but by constitutional rules that determine what is possible, what is
            permitted, and where authority ultimately resides.
          </p>
        </header>

        {/* ----------------------------------------------------------- */}
        {/* Essay Body */}
        {/* ----------------------------------------------------------- */}

        <section className="mt-20 space-y-8 text-lg leading-9 text-neutral-300">
          <p>The interaface.</p>

          <p>The database.</p>

          <p>The API.</p>

          <p>The features.</p>

          <p>Software is often described through its visible parts.</p>

          <p>These parts matter. But they never fully explain the system.</p>

          <p>
            Often, we become so familiar with these layers that entire careers are spent inside them. We become experts in interfaces, databases,
            frameworks, APIs, and infrastructure.
          </p>

          <p>But beneath these layers are rules.</p>

          <p>Rules that determine what is allowed.</p>

          <p>Rules that determine what can change.</p>

          <p>Rules that determine what states are even allowed to exist.</p>

          <p>
            Rules that determine which transitions are forbidden between those
            states.
          </p>

          <p>Rules that determine what happens when two actions conflict.</p>

          <p>Rules that determine who has authority over what.</p>

          <p>Together, these rules form the constitution of the software.</p>

          <p>
            The constitution may never be written down as a single document. It
            may exist across services, database constraints, domain models,
            permissions, and scattered conditions inside the interface.
          </p>

          <p>But it exists.</p>

          <p>Every software system has one.</p>

          <p>The only question is whether it was designed deliberately.</p>

          <p>
            A constitution is not the interface through which people use the
            system.
          </p>

          <p>The interface presents choices.</p>

          <p>The constitution determines which choices are valid.</p>

          <p>It is the ground floor of the building.</p>

          <p>Everything else is built upon it.</p>

          <p>Interfaces change.</p>

          <p>Services evolve.</p>

          <p>Features come and go.</p>

          <p>But none of them can exist before the ground floor does.</p>

          <p>
            A button may allow someone to close a record. But the button does
            not decide whether the record can be closed, who may close it, or
            what closing it means.
          </p>

          <p>Those decisions belong somewhere deeper.</p>

          <p>
            One of the easiest mistakes to make is misplacing where governance
            originates.
          </p>

          <p>
            When governing rules live inside the interface, presentation begins
            to control behavior.
          </p>

          <p>
            A condition is added to one page but forgotten on another. A mobile
            application interprets a state differently from the web application.
            A future interface bypasses a rule because the rule existed only
            inside an old component.
          </p>

          <p>The system no longer has one constitution.</p>

          <p>It has several competing interpretations.</p>

          <p>This is not merely untidy code.</p>

          <p>It is a failure of governance.</p>

          <p>A durable system separates what it is from how it is presented.</p>

          <p>The interface may change.</p>

          <p>The underlying rules should remain coherent.</p>

          <p>
            A record should not become valid because a particular page allowed
            it. A state should not change merely because a button was visible. A
            person should not gain authority because one interface failed to
            check whether they had it.
          </p>

          <p>The constitution must govern every path into the system.</p>

          <p>
            This is why software architecture is not only about organization.
          </p>

          <p>It is about authority.</p>

          <p>Where does the final decision live?</p>

          <p>Which layer is allowed to determine what is true?</p>

          <p>
            What can the interface request, and what must the system
            independently decide?
          </p>

          <p>These are constitutional questions.</p>

          <p>
            They become especially important when software represents things
            that matter beyond the screen.
          </p>

          <p>Responsibility.</p>

          <p>Money.</p>

          <p>Identity.</p>

          <p>Permission.</p>

          <p>Ownership.</p>

          <p>Care.</p>

          <p>Trust.</p>

          <p>
            In these systems, a poorly placed rule does not only produce a
            technical inconsistency.
          </p>

          <p>
            It can change what the system permits people to do and what it
            claims has happened.
          </p>

          <p>
            The governing rules therefore deserve the same care as the visible
            product.
          </p>

          <p>Often, they deserve more.</p>

          <p>Interfaces are replaced.</p>

          <p>Frameworks change.</p>

          <p>Databases are migrated.</p>

          <p>New applications are built on top of old systems.</p>

          <p>
            A constitution should be able to survive these changes without
            losing its meaning.
          </p>

          <p>This does not mean that constitutional rules can never evolve.</p>

          <p>They can.</p>

          <p>But they should change deliberately.</p>

          <p>
            A new feature should not silently rewrite the governing behavior of
            the system. A design revision should not accidentally alter what a
            state means. A shortcut in presentation should not become a new
            source of authority.
          </p>

          <p>
            Constitutional change should be visible as constitutional change.
          </p>

          <p>That requires separation.</p>

          <p>The interface presents the system.</p>

          <p>The constitution governs it.</p>

          <p>One may change how the system is seen.</p>

          <p>The other determines what the system is allowed to become.</p>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Reading Progression                                                */}
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
