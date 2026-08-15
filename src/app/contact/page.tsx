import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Atelier',
  description:
    'Contact Uru Onyemaobi regarding systems work, research, collaboration, or other inquiries.',

  openGraph: {
    title: 'Contact — Atelier',
    description:
      'Contact Uru Onyemaobi regarding systems work, research, collaboration, or other inquiries.',
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
    title: 'Contact — Atelier',
    description:
      'Contact Uru Onyemaobi regarding systems work, research, collaboration, or other inquiries.',
    images: ['/previews/atelier-open-graph.png'],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-8 pb-32 pt-40">
      <section className="mx-auto max-w-5xl">
        {/* --------------------------------------------------------------- */}
        {/* Contact Identity                                                */}
        {/* --------------------------------------------------------------- */}

        <div className="mb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Contact
          </p>

          <h1 className="max-w-3xl text-5xl font-light tracking-[-0.04em] text-neutral-100">
            Get in touch.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
            For conversations around systems, software, research, collaboration,
            or other work.
          </p>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* Contact Routes                                                  */}
        {/* --------------------------------------------------------------- */}

        <div className="max-w-3xl border-t border-white/10">
          {/* Email */}
          <a
            href="mailto:uru@mpatiq.com"
            className="group flex items-center justify-between border-b border-white/10 py-8 transition-colors hover:border-white/20"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">
                Email
              </p>

              <p className="mt-3 text-lg font-light text-neutral-200">
                uru@mpatiq.com
              </p>
            </div>

            <span className="text-lg text-neutral-700 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/uru-onyemaobi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-white/10 py-8 transition-colors hover:border-white/20"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">
                LinkedIn
              </p>

              <p className="mt-3 text-lg font-light text-neutral-200">
                Uru Onyemaobi
              </p>
            </div>

            <span className="text-lg text-neutral-700 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* Personal GitHub */}
          <a
            href="https://github.com/UruBuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-white/10 py-8 transition-colors hover:border-white/20"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">
                GitHub
              </p>

              <p className="mt-3 text-lg font-light text-neutral-200">
                UruBuilds
              </p>
            </div>

            <span className="text-lg text-neutral-700 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* MpatiQ GitHub */}
          <a
            href="https://github.com/mpatiq"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-white/10 py-8 transition-colors hover:border-white/20"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">
                GitHub — Organization
              </p>

              <p className="mt-3 text-lg font-light text-neutral-200">MpatiQ</p>
            </div>

            <span className="text-lg text-neutral-700 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
