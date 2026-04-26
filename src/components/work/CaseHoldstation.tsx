import { LightboxImg } from '../Lightbox';

/** Laptop-style frame with X timeline via syndication iframe */
function XTimelineEmbed({ username }: { username: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <p
        style={{
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--muted-foreground)',
        }}
      >
        X Posts
      </p>
      {/* Laptop body */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Screen bezel */}
        <div
          style={{
            background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
            borderRadius: '1rem 1rem 0 0',
            padding: '0.5rem 0.5rem 0',
            border: '1px solid rgba(255,255,255,0.08)',
            borderBottom: 'none',
          }}
        >
          {/* Webcam dot */}
          <div
            style={{
              width: '0.375rem',
              height: '0.375rem',
              borderRadius: '50%',
              background: '#333',
              margin: '0 auto 0.375rem',
            }}
          />
          {/* Screen area */}
          <div
            style={{
              borderRadius: '0.25rem 0.25rem 0 0',
              overflow: 'hidden',
              background: '#000',
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                padding: '0.5rem 0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                <span
                  key={c}
                  style={{
                    width: '0.4rem',
                    height: '0.4rem',
                    borderRadius: '50%',
                    background: c,
                    display: 'inline-block',
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: '0.5rem',
                  fontSize: '0.6rem',
                  color: 'var(--muted-foreground)',
                }}
              >
                x.com/{username}
              </span>
            </div>
            {/* Timeline via syndication iframe */}
            <iframe
              src={`https://syndication.twitter.com/srv/timeline-profile/screen-name/${username}?dnt=true&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=true&hideFooter=true&hideHeader=true&hideScrollBar=false&lang=en&theme=dark&transparent=true`}
              style={{
                width: '100%',
                height: '480px',
                border: 'none',
                background: '#000',
              }}
              title={`@${username} X timeline`}
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>
        {/* Laptop bottom chin / keyboard area */}
        <div
          style={{
            background: 'linear-gradient(180deg, #1a1a2e, #0f0f23)',
            borderRadius: '0 0 0.25rem 0.25rem',
            height: '0.75rem',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: 'none',
          }}
        />
        {/* Laptop base / hinge */}
        <div
          style={{
            width: '40%',
            height: '0.25rem',
            margin: '0 auto',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            borderRadius: '0 0 0.5rem 0.5rem',
          }}
        />
      </div>
    </div>
  );
}

export default function CaseHoldstation() {
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
          Holdstation needed to cut through a saturated DeFi market. The play:
          earn attention and trust simultaneously.
        </p>
        <p>
          <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>
            Action:
          </strong>{' '}
          Blended sharp crypto humor with premium brand aesthetics. Took dense
          DeFAI mechanics and distilled them into bite-sized formats that hit
          both veterans and curious newcomers. Redesigned key landing pages to
          actually catch the traffic we were generating.
        </p>
        {/* Key metrics — bold numbers */}
        <div
          className="grid-auto-3"
          style={{ gap: '1rem', marginTop: '0.5rem' }}
        >
          {[
            { number: '11M+', label: 'Organic reach across X & Facebook in 90 days' },
            { number: '↑', label: 'Measurable lift in landing page conversion' },
            { number: '1', label: 'Content framework adopted across Holdstation ecosystem' },
          ].map(({ number, label }) => (
            <div
              key={label}
              className="liquid-glass"
              style={{
                padding: '1.5rem 1.25rem',
                borderRadius: '1rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.06) 0%, rgba(99, 102, 241, 0.04) 100%)',
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--accent)',
                  display: 'block',
                  lineHeight: 1.1,
                  textShadow: '0 0 24px rgba(56, 189, 248, 0.35)',
                }}
              >
                {number}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', marginTop: '0.5rem', display: 'block', lineHeight: 1.4 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* X Performance Data — large */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <LightboxImg
          src="/assets/holdstation/x-posts/Analytics number.jpg"
          alt="1Y X Performance Data"
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
          1Y X Performance Data
        </p>
      </div>

      {/* X Posts — live timeline in laptop frame */}
      <XTimelineEmbed username="HoldstationW" />

      {/* Facebook Posts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
          }}
        >
          Facebook Posts
        </p>

        {/* Analytics left + iPhone right */}
        <div
          className="grid-fb-phone"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '1.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left — analytics, height matched to phone */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div
              style={{
                height: '560px',
                overflow: 'hidden',
                borderRadius: '0.75rem',
              }}
            >
              <LightboxImg
                src="/assets/holdstation/facebook/Analytic.png"
                alt="Facebook Fanpage Performance"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: '0.75rem',
                  display: 'block',
                }}
              />
            </div>
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'var(--muted-foreground)',
                textAlign: 'center',
              }}
            >
              Facebook Fanpage Performance
            </p>
          </div>

          {/* Right — iPhone */}
          <div style={{ width: '240px', flexShrink: 0 }}>
            <div
              style={{
                background: '#000',
                borderRadius: '2.75rem',
                padding: '0.375rem',
                border: '2px solid #333',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4.5rem',
                  height: '1.1rem',
                  background: '#000',
                  borderRadius: '1rem',
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  borderRadius: '2.5rem',
                  overflow: 'hidden',
                  background: '#fff',
                }}
              >
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHoldstation&tabs=timeline&width=232&height=520&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                  style={{
                    width: '232px',
                    height: '520px',
                    border: 'none',
                    display: 'block',
                  }}
                  title="Holdstation Facebook Page"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
              <div
                style={{
                  width: '30%',
                  height: '0.2rem',
                  background: 'rgba(255,255,255,0.25)',
                  borderRadius: '0.2rem',
                  margin: '0.5rem auto 0.25rem',
                }}
              />
            </div>
          </div>
        </div>

        {/* Content posts — horizontal scroll row */}
        <div>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
              marginBottom: '0.25rem',
            }}
          >
            Facebook Content Types
          </p>
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--muted-foreground)',
              lineHeight: 1.6,
              marginBottom: '0.75rem',
              maxWidth: '42rem',
            }}
          >
            Market-story driven content built for virality, blended with brand storytelling and educational pieces engineered for conversion.
          </p>
        </div>
        <div style={{ overflow: 'hidden', borderRadius: '0.75rem', width: '100%' }}>
          <div
            className="fb-scroll-track"
            style={{
              display: 'flex',
              gap: '0.75rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.15) transparent',
            }}
          >
            {[
              'Education Content.png',
              'Education Content 2.png',
              'Investing content.png',
              'News content.png',
              'News content(1).png',
              'News cotnent 2.png',
              'Product relate content.png',
              'image_2026-04-16_01-14-47.png',
            ].map((file) => (
              <LightboxImg
                key={file}
                src={`/assets/holdstation/facebook/${file}`}
                alt={file.replace(/\.(png|jpg)$/, '')}
                loading="lazy"
                style={{
                  height: '220px',
                  borderRadius: '0.5rem',
                  display: 'block',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Landing pages — clickable cards that link to live sites */}
      <div>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
            marginBottom: '0.75rem',
          }}
        >
          Landing Page Redesign
        </p>
        <div
          className="grid-auto-2"
          style={{ gap: '1.5rem' }}
        >
          {/* holdstation.com */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href="https://holdstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-card"
              style={{
                display: 'block',
                position: 'relative',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
            >
              <img
                src="/assets/holdstation/landing-page/holdstation-com.png"
                alt="holdstation.com landing page"
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
              <div
                className="landing-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span style={{ color: '#fff', fontSize: '0.8125rem', fontWeight: 500 }}>
                  Visit holdstation.com
                </span>
              </div>
            </a>
            <div style={{ padding: '0 0.25rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--foreground)', fontWeight: 500 }}>
                holdstation.com
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginTop: '0.25rem' }}>
                Redesigned the main landing page for both Vietnamese and global audiences — clarifying Holdstation's product suite, building trust signals, and optimizing the funnel for paid and organic traffic conversion.
              </p>
            </div>
          </div>

          {/* pay.holdstation.com */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href="https://pay.holdstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-card"
              style={{
                display: 'block',
                position: 'relative',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
            >
              <img
                src="/assets/holdstation/landing-page/pay-holdstation-com.png"
                alt="pay.holdstation.com landing page"
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
              <div
                className="landing-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span style={{ color: '#fff', fontSize: '0.8125rem', fontWeight: 500 }}>
                  Visit pay.holdstation.com
                </span>
              </div>
            </a>
            <div style={{ padding: '0 0.25rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--foreground)', fontWeight: 500 }}>
                pay.holdstation.com
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginTop: '0.25rem' }}>
                Landing page for Holdstation Pay — a stablecoin conversion gateway. Designed for conversion and marketing, redirecting users straight into the webapp to transact.
              </p>
            </div>
            {/* GA data */}
            <div style={{ marginTop: '0.25rem' }}>
              <LightboxImg
                src="/assets/holdstation/landing-page/GA-payholdstation.png"
                alt="Google Analytics — pay.holdstation.com"
                loading="lazy"
                style={{ width: '100%', borderRadius: '0.5rem', display: 'block' }}
              />
              <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', textAlign: 'center', marginTop: '0.375rem' }}>
                Google Analytics — pay.holdstation.com
              </p>
            </div>
          </div>
        </div>
        <style>{`
          .landing-card:hover { transform: scale(1.02); border-color: rgba(255,255,255,0.25) !important; }
          .landing-card:hover .landing-overlay { opacity: 1 !important; }
        `}</style>
      </div>

      {/* Video ads */}
      <div>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--muted-foreground)',
            marginBottom: '0.75rem',
          }}
        >
          Video ads
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {['Advertising Holdstation Pay.mp4', 'USD1.mp4'].map((file) => (
            <video
              key={file}
              controls
              preload="metadata"
              style={{ width: '100%', borderRadius: '0.75rem', display: 'block' }}
            >
              <source
                src={`/assets/holdstation/videos/${encodeURIComponent(file)}`}
                type="video/mp4"
              />
            </video>
          ))}
        </div>
      </div>
    </div>
  );
}
