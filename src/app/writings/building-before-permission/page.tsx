/**
 * -----------------------------------------------------------------------------
 * Building Before Permission
 *
 * An essay on creation, possibility, and why reality, not permission, is the
 * final judge of what we build.
 * -----------------------------------------------------------------------------
 */

import Link from 'next/link';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Building Before Permission — Atelier',
  description:
    'On building, experimenting, and pursuing consequential work before external permission or institutional validation arrives.',
  openGraph: {
    title: 'Building Before Permission — Atelier',
    description:
      'On building, experimenting, and pursuing consequential work before external permission or institutional validation arrives.',
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
    title: 'Building Before Permission — Atelier',
    description:
      'On building, experimenting, and pursuing consequential work before external permission or institutional validation arrives.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function BuildingBeforePermissionPage() {
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
            LIFE
          </p>

          <h1 className="mt-6 text-5xl font-light leading-tight tracking-[0.03em]">
            Building Before Permission
          </h1>

          <p className="mt-5 text-base text-neutral-500">Uru Onyemaobi</p>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-400">
            On creation, possibility, and why reality—not permission—is the
            final judge of what we build
          </p>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* Essay Body                                                         */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-20 space-y-8 text-lg leading-9 text-neutral-300">
          <p>Why do you build?</p>

          <p>Why must you build?</p>

          <p>You build because everything around you was once built.</p>

          <p>Every road.</p>

          <p>Every bridge.</p>

          <p>Every institution.</p>

          <p>Every language.</p>

          <p>Every piece of software.</p>

          <p>
            Someone looked at the world as it was and imagined something that
            did not yet exist.
          </p>

          <p>Then they built it.</p>

          <p>
            It is easy to mistake the world we inherit for the natural state of
            things.
          </p>

          <p>It is not.</p>

          <p>The natural state is not the world we see around us.</p>

          <p>The natural state is possibility.</p>

          <p>
            Everything around us exists because someone, somewhere, refused to
            accept that what existed was all that could exist.
          </p>

          <p>They saw something else.</p>

          <p>Then they brought it into reality.</p>

          <p>That is one of humanity's rarest abilities.</p>

          <p>To imagine.</p>

          <p>To define.</p>

          <p>To create.</p>

          <p>To persist long enough to make imagination real.</p>

          <p>This is an endeavor of immense significance.</p>

          <p>Not because every creation succeeds.</p>

          <p>
            But because every meaningful change to the world begins as something
            that does not yet exist.
          </p>

          <p>
            This is why asking for permission misunderstands the nature of
            building.
          </p>

          <p>Creation is not granted.</p>

          <p>It is exercised.</p>

          <p>
            If you see something that ought to exist, no one else sees it
            exactly as you do.
          </p>

          <p>Only you have lived your experiences.</p>

          <p>Only you have made your observations.</p>

          <p>Only you have asked your questions.</p>

          <p>Only you can see what you see.</p>

          <p>Bring it to life.</p>

          <p>Then let reality be the judge.</p>

          <p>Reality is remarkably fair.</p>

          <p>If what you have built does not work, reality will reveal it.</p>

          <p>
            If what you have built serves no one, reality will reveal that too.
          </p>

          <p>
            If what you have built changes the world, reality will reveal that
            as well.
          </p>

          <p>Reality asks only one thing of the builder:</p>

          <blockquote className="border-l border-white/10 pl-6 text-xl font-light text-neutral-400">
            Build honestly enough that your work can confront it.
          </blockquote>

          <p>
            Whatever direction that confrontation takes, the endeavor itself
            must be undergone.
          </p>

          <p>Because building is not merely how we change the world.</p>

          <p>
            It is how the world discovers whether what we imagined was true.
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
