/**
 * ----------------------------------------------------------------------------
 * Atelier Mark
 *
 * Constructed geometric identity for Atelier.
 *
 * The mark will be built from a shared coordinate system
 * so every line, curve, and proportion remains deliberate.
 * ----------------------------------------------------------------------------
 */

type AtelierMarkProps = {
  className?: string;
};

export default function AtelierMark({ className }: AtelierMarkProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Geometry will be constructured here */}
      {/* ----------------------------------------------------------------- */}
      {/* Construction Circle */}

      {/* The governing geometry of the mark. */}
      {/* Every major element of Atelier's identity will relate back to this circle. */}
      {/* ----------------------------------------------------------------- */}
      <path
        d="
      M 159.4 340
      A 128 128 0 11 352.6 340
      "
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
      />

      {/* 
      -----------------------------------------------------------------------
      Vertical Construction Axis 
      Governing centerline for the mark.
      The apex, inner arch, and overall symmetry are all referenced from this axis.
      -----------------------------------------------------------------------
       */}
      <line x1="256" y1="100" x2="256" y2="412" stroke="currentColor" />

      {/* 
      -----------------------------------------------------------------------
      Horizontal Construction Datum
      Defines the baseline from which the letterform and inner arch are constructed.
      -----------------------------------------------------------------------
       */}
      <line
        x1="100"
        y1="340"
        x2="412"
        y2="340"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* -----------------------------------------------------------------------
Serif A

Moderate stroke contrast.

The left leg remains clearly thinner than the dominant right leg,
but retains enough body to read as a proper serif stroke.
Its foot widens independently through a curved serif flare.
----------------------------------------------------------------------- */}
      <path
      //  M 256 161 - the outer apex, moved 150 to 161
        d="
    M 256 161 

    L 372 390
    C 375 396, 381 400, 389 402
    L 389 404
    L 333 404
    L 333 402
    C 343 400, 349 396, 353 390

    L 256 184

    L 160 390

    C 162 396, 166 400, 174 402
    L 174 404
    L 128 404
    L 128 402
    C 136 400, 141 396, 145 390

    L 257 166
    L 256 166

    Z
  "
        fill="currentColor"
      />

      {/* 
      -----------------------------------------------------------------------
      Inner Arch
      Establishes the interior opening of the mark.
      -----------------------------------------------------------------------
       */}
      <path
        d="
       M 224 340
       L 224 300
       A 32 32 0 0 1 288 300
       L 288 340
       "
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
