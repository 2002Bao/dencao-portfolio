import { LightboxImg } from './Lightbox';

/** Laptop-style browser frame — Mac bezel with traffic lights */
export function LaptopFrame({
  src,
  alt,
  caption,
  urlBar,
  imgMaxHeight,
}: {
  src: string;
  alt: string;
  caption?: string;
  urlBar?: string;
  imgMaxHeight?: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ maxWidth: '100%' }}>
        {/* Screen bezel */}
        <div
          style={{
            background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
            borderRadius: '0.75rem 0.75rem 0 0',
            padding: '0.4rem 0.4rem 0',
            border: '1px solid rgba(255,255,255,0.08)',
            borderBottom: 'none',
          }}
        >
          {/* Webcam dot */}
          <div
            style={{
              width: '0.3rem',
              height: '0.3rem',
              borderRadius: '50%',
              background: '#333',
              margin: '0 auto 0.3rem',
            }}
          />
          {/* Screen area */}
          <div
            style={{
              borderRadius: '0.2rem 0.2rem 0 0',
              overflow: 'hidden',
              background: '#000',
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                padding: '0.4rem 0.6rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                <span
                  key={c}
                  style={{
                    width: '0.35rem',
                    height: '0.35rem',
                    borderRadius: '50%',
                    background: c,
                    display: 'inline-block',
                  }}
                />
              ))}
              {urlBar && (
                <span
                  style={{
                    marginLeft: '0.4rem',
                    fontSize: '0.55rem',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {urlBar}
                </span>
              )}
            </div>
            {/* Screenshot */}
            <LightboxImg
              src={src}
              alt={alt}
              loading="lazy"
              style={{
                width: '100%',
                display: 'block',
                ...(imgMaxHeight
                  ? { maxHeight: imgMaxHeight, objectFit: 'cover', objectPosition: 'center top' }
                  : {}),
              }}
            />
          </div>
        </div>
        {/* Laptop chin */}
        <div
          style={{
            background: 'linear-gradient(180deg, #1a1a2e, #0f0f23)',
            borderRadius: '0 0 0.2rem 0.2rem',
            height: '0.5rem',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: 'none',
          }}
        />
        {/* Hinge */}
        <div
          style={{
            width: '35%',
            height: '0.2rem',
            margin: '0 auto',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            borderRadius: '0 0 0.4rem 0.4rem',
          }}
        />
      </div>
      {caption && (
        <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', textAlign: 'center' }}>
          {caption}
        </p>
      )}
    </div>
  );
}

/** iPhone-style phone frame — Dynamic Island, edge-to-edge */
export function PhoneFrame({
  src,
  alt,
  caption,
  width = '220px',
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <div
        style={{
          width,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            background: '#000',
            borderRadius: '2.25rem',
            padding: '0.3rem',
            border: '2px solid #333',
            boxShadow:
              '0 16px 48px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
            position: 'relative',
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: '0.6rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '3.5rem',
              height: '0.9rem',
              background: '#000',
              borderRadius: '0.75rem',
              zIndex: 2,
            }}
          />
          {/* Screen */}
          <div
            style={{
              borderRadius: '2rem',
              overflow: 'hidden',
              background: '#111',
            }}
          >
            <LightboxImg
              src={src}
              alt={alt}
              loading="lazy"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
          {/* Home indicator */}
          <div
            style={{
              width: '28%',
              height: '0.18rem',
              background: 'rgba(255,255,255,0.25)',
              borderRadius: '0.2rem',
              margin: '0.4rem auto 0.2rem',
            }}
          />
        </div>
      </div>
      {caption && (
        <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', textAlign: 'center' }}>
          {caption}
        </p>
      )}
    </div>
  );
}
