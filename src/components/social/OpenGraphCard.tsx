import AtelierMark from '../branding/AtelierMark';

type OpenGraphCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function OpenGraphCard({
  eyebrow,
  title,
  description,
}: OpenGraphCardProps) {
  return (
    <div
    id="open-graph-card"
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#0b0f19',
        color: '#f5f5f5',
        padding: '88px 96px',
      }}
    >
      {/* ------------------------------------------------------------------- */}
      {/* Text Content */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '610px',
        }}
      >
        {eyebrow && (
          <div
            style={{
              fontSize: '20px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#737373',
            }}
          >
            {eyebrow}
          </div>
        )}

        <div
          style={{
            marginTop: eyebrow ? '32px' : 0,
            fontSize: '64px',
            lineHeight: 1.08,
            fontWeight: 300,
          }}
        >
          {title}
        </div>

        {description && (
          <div
            style={{
              marginTop: '32px',
              maxWidth: '680px',
              fontSize: '24px',
              lineHeight: 1.5,
              color: '#a3a3a3',
            }}
          >
            {description}
          </div>
        )}
      </div>

      {/* ↑ THIS closes the text-content container. */}

      {/* -------------------------------------------------------------- */}
      {/* Atelier Mark                                                   */}
      {/* -------------------------------------------------------------- */}

      <div
        style={{
          display: 'flex',
          width: '357px',
          height: '357px',
          flexShrink: 0,
        }}
      >
        <AtelierMark />
      </div>

      {/* ↓ THIS closes the entire 1200 × 630 card. */}
    </div>
  );
}
