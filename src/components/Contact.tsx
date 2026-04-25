const SOCIAL_LINKS = [
  { label: '@inter_link',      href: 'https://x.com/inter_link'      },
  { label: '@HoldstationW',    href: 'https://x.com/HoldstationW'    },
  { label: '@SEADePIN',        href: 'https://x.com/SEADePIN'        },
  { label: '@somniainsights',  href: 'https://x.com/somniainsights'  },
];

function XIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.254 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-gradient"
      style={{
        backgroundColor: 'transparent',
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
      }}
    >
      {/* Orbs */}
      <div className="orb orb-indigo" style={{ width: '260px', height: '260px', top: '-10%', left: '20%', opacity: 0.35 }} />
      <div className="orb orb-cyan" style={{ width: '180px', height: '180px', bottom: '10%', right: '-5%', opacity: 0.3 }} />

      <div
        style={{
          maxWidth: '64rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <div className="scroll-fade">
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 400,
              color: 'var(--foreground)',
              marginBottom: '1rem',
              lineHeight: 1.1,
            }}
          >
            Let's build something.
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem' }}>
            Open to remote roles in content strategy and personal branding.
            Drop a line.
          </p>
        </div>

        {/* Email */}
        <a
          className="scroll-fade"
          href="mailto:cao.huanbao@gmail.com"
          style={{
            color: 'var(--foreground)',
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            paddingBottom: '0.125rem',
            alignSelf: 'flex-start',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor =
              'rgba(255,255,255,0.7)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor =
              'rgba(255,255,255,0.2)')
          }
        >
          cao.huanbao@gmail.com
        </a>

        {/* Social links */}
        <div
          className="scroll-fade"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
        >
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.875rem',
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  'var(--foreground)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  'var(--muted-foreground)')
              }
            >
              <XIcon />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          maxWidth: '64rem',
          margin: '4rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}
        >
          © 2026 Den Cao
        </span>
      </div>
    </section>
  );
}
