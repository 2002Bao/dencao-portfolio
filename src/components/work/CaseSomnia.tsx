import { LightboxImg } from '../Lightbox';

export default function CaseSomnia() {
  return (
    <div
      style={{
        padding: '0 2.5rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {/* Copy */}
      <div
        style={{
          color: 'var(--muted-foreground)',
          fontSize: '0.9375rem',
          lineHeight: 1.75,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        <p>
          <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>
            Context:
          </strong>{' '}
          Somnia needed an influencer-style presence on X to keep the community
          plugged into ecosystem updates, alpha, and opportunities — all
          delivered with credibility.
        </p>
        <p>
          <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>
            Action:
          </strong>{' '}
          Owned the entire pipeline solo. Built the content strategy, wrote
          every post, and designed all visuals in Figma. Positioned the account
          as a trusted insider voice — part analyst, part community compass.
          Covered ecosystem project highlights, partnership signals, and
          actionable insights on a consistent cadence.
        </p>
        <p>
          <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>
            Result:
          </strong>{' '}
          A fully operational X media channel built from scratch — strategy,
          copy, and design, all under one roof.
        </p>
      </div>

      {/* Asset placeholders */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* X posts row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {[
            'Campaign post.png',
            'Analytical posts.png',
            'Showcase post.png',
            'Tips & Trick posts.png',
          ].map((file) => (
            <div key={file} style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <LightboxImg
                src={`/assets/somnia/x-posts/${file}`}
                alt={file.replace('.png', '')}
                loading="lazy"
                style={{
                  width: '100%',
                  borderRadius: '0.75rem',
                  display: 'block',
                }}
              />
              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--muted-foreground)',
                  textAlign: 'center',
                }}
              >
                {file.replace('.png', '')}
              </p>
            </div>
          ))}
        </div>

        {/* Profile performance */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <LightboxImg
            src="/assets/somnia/profile-performance.png"
            alt="Account growth and profile performance"
            loading="lazy"
            style={{ width: '100%', borderRadius: '0.75rem', display: 'block' }}
          />
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--muted-foreground)',
              textAlign: 'center',
              marginTop: '0.25rem',
            }}
          >
            Account's Impression Growth since started
          </p>
        </div>
      </div>
    </div>
  );
}
