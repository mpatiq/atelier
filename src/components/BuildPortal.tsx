import Image from 'next/image';
import Link from 'next/link';

/**
 * -----------------------------------------------------------------------------------
 * Build Portal
 *
 * A restrained live surface preview that acts as a portal into an active system
 * environment.
 *
 * ------------------------------------------------------------------------------------
 *
 */

type BuildAction = {
  label: string;
  href: string;
};

type BuildPortalProps = {
  title: string;

  image: string;
  surfaceHref: string;

  operationalState: string;

  statusColor: string;

  classification: string;

  codeAccess: string;

  actions: BuildAction[];

  imageObjectPosition?: string;
};

export default function BuildPortal({
  title,
  image,
  surfaceHref,
  operationalState,
  statusColor,
  classification,
  codeAccess,
  actions,
  imageObjectPosition,
}: BuildPortalProps) {
  return (
    <section className="mb-24">
      <div className="overflow-hidden border border-white/5 bg-white/2">
        <div className="grid gap-px bg-white/5 lg:grid-cols-[1.6fr_0.7fr]">
          {/* Live Surface */}
          <Link
            href={surfaceHref}
            target="_blank"
            className="group relative bg-[#0b1020] lg:min-h-full"
          >
            <div className="relative aspect-4/3 lg:aspect-auto h-full  overflow-hidden">
              <Image
                src={image}
                alt={`${title} live surface preview`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 70vw"
                style={{
                  objectPosition: imageObjectPosition ?? 'center',
                }}
                className="object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.01] group-hover:opacity-100"
              />
            </div>
          </Link>

          {/* Operational metadata */}
          <div className="flex flex-col justify-between bg-[#0b1020] p-8">
            <div>
              <p className="mb-6 text-sm tracking-[0.3em] text-neutral-500">
                Deployment Surface
              </p>

              <h2 className="mb-8 text-[2.25rem] font-light text-neutral-100">
                {title}
              </h2>

              <div className="space-y-6">
                {/* Operational state */}
                <div>
                  <p className="mb-2 text-xs tracking-[0.25em] text-neutral-600">
                    Operational State
                  </p>

                  <div className="flex items-center gap-3">
                    {/* Self-closing div with the color adjustment */}
                    <div className={`h-2 w-2 rounded-full ${statusColor}`} />

                    <span className="text-sm text-neutral-300">
                      {operationalState}
                    </span>
                  </div>
                </div>

                {/* Classification */}
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-600">
                    Classification
                  </p>

                  <p className="text-sm text-neutral-300">{classification}</p>
                </div>

                {/* Code posture */}
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-600">
                    Code Access
                  </p>

                  <p className="text-sm text-neutral-300">{codeAccess}</p>
                </div>
              </div>
            </div>

            {/* Surface links */}
            <div className="mt-16 flex flex-col gap-4">
              {actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  className="flex items-center justify-between border border-white/5 px-4 py-3 text-neutral-300 transition-colors hover:border-white/10 hover:bg-white/3 "
                >
                  <span>{action.label}</span>
                  <span>↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
