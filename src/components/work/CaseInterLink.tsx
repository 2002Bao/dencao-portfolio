import { useEffect, useRef } from 'react';
import { LightboxImg } from '../Lightbox';
import { LaptopFrame, PhoneFrame } from '../DeviceMockups';

/** Auto-scrolling marquee row */
function ScrollRow({
  images,
  basePath,
  label,
  reverse = false,
  height = '220px',
}: {
  images: string[];
  basePath: string;
  label: string;
  reverse?: boolean;
  height?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = reverse ? -(track.scrollWidth / 3) : 0;
    let animId: number;
    const step = () => {
      pos += reverse ? 0.4 : -0.4;
      const third = track.scrollWidth / 3;
      if (!reverse && Math.abs(pos) >= third) pos = 0;
      if (reverse && pos >= 0) pos = -third;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [reverse]);

  const tripled = [...images, ...images, ...images];

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
        {label}
      </p>
      <div style={{ overflow: 'hidden', borderRadius: '0.75rem', width: '100%' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '0.75rem',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {tripled.map((file, i) => (
            <LightboxImg
              key={`${file}-${i}`}
              src={`${basePath}/${file}`}
              alt={label}
              loading="lazy"
              className="scroll-row-img"
              style={{
                height,
                borderRadius: '0.5rem',
                display: 'block',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Auto-scrolling marquee with per-image captions */
function CaptionScrollRow({
  items,
  basePath,
  label,
  reverse = false,
  height = '220px',
}: {
  items: { file: string; caption: string }[];
  basePath: string;
  label: string;
  reverse?: boolean;
  height?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = reverse ? -(track.scrollWidth / 3) : 0;
    let animId: number;
    const step = () => {
      pos += reverse ? 0.4 : -0.4;
      const third = track.scrollWidth / 3;
      if (!reverse && Math.abs(pos) >= third) pos = 0;
      if (reverse && pos >= 0) pos = -third;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [reverse]);

  const tripled = [...items, ...items, ...items];

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
        {label}
      </p>
      <div style={{ overflow: 'hidden', borderRadius: '0.75rem', width: '100%' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '0.75rem',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {tripled.map(({ file, caption }, i) => (
            <div
              key={`${file}-${i}`}
              style={{
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.375rem',
              }}
            >
              <LightboxImg
                src={`${basePath}/${file}`}
                alt={caption}
                loading="lazy"
                className="scroll-row-img"
                style={{
                  height,
                  borderRadius: '0.5rem',
                  display: 'block',
                }}
              />
              <p style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)', textAlign: 'center', letterSpacing: '0.04em' }}>
                {caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseInterLink() {
  const onlineCommunity = [
    'Interlink Game Tournament.jpg',
    'Interlink online game tournament.jpg',
    'Interlink chat to earn.jpg',
    'interlink merch.jpg',
    'interlink merch2.jpg',
    '1.jpg',
    'photo_2026-04-22_00-27-11.jpg',
    'photo_2026-04-22_00-27-13.jpg',
    'photo_2026-04-22_00-27-17.jpg',
    'photo_2026-04-22_00-27-58.jpg',
  ];

  return (
    <div
      style={{
        padding: '0 2.5rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* ===== Context & Action ===== */}
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
          InterLink was launching a decentralized human network from stealth — needed
          to scale fast without attracting the low-quality bot traffic that plagues
          most refer-to-earn models.
        </p>
        <p>
          <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>
            Action:
          </strong>{' '}
          Designed the full growth engine: localized GTM for Vietnam and Indonesia,
          built a 3,000+ ambassador program as an organic distribution channel,
          repositioned the brand from a standard crypto project to an institutional-grade
          super app, and ran a signature campaign that rewarded real in-app activity
          over hollow referrals.
        </p>
      </div>

      {/* ===== Key Metrics ===== */}
      <div
        className="grid-auto-3"
        style={{ gap: '1rem' }}
      >
        {[
          { number: '1.5M+', label: 'Verified users in 3 months' },
          { number: '3,000+', label: 'Global ambassadors activated' },
          { number: 'Top 2', label: 'Focus markets built from zero (VN & ID)' },
        ].map(({ number, label }) => (
          <div
            key={label}
            className="liquid-glass"
            style={{
              padding: '1.5rem 1.25rem',
              borderRadius: '1rem',
              textAlign: 'center',
              background:
                'linear-gradient(135deg, rgba(56, 189, 248, 0.06) 0%, rgba(99, 102, 241, 0.04) 100%)',
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
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--muted-foreground)',
                marginTop: '0.5rem',
                display: 'block',
                lineHeight: 1.4,
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* ===== Growth Data ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
          }}
        >
          Growth Data
        </p>

        {/* User Growth — hero laptop frame */}
        <LaptopFrame
          src="/assets/interlink/Campaign/Interlink - User Growth Data.jpg"
          alt="User Growth Dashboard"
          caption="User Growth Dashboard — 1.9M+ total users"
          urlBar="interlink.app/admin/analytics"
        />

        {/* X Analytics — chart + metric cards */}
        <div
          className="grid-auto-2"
          style={{
            gap: '1rem',
            alignItems: 'start',
          }}
        >
          {/* Left — cropped chart in laptop frame */}
          <LaptopFrame
            src="/assets/interlink/Campaign/X-Analytics-Chart.png"
            alt="X Post Activity Chart"
            caption="X Post Activity (Mar–Aug)"
            urlBar="analytics.x.com"
            imgMaxHeight="180px"
          />

          {/* Right — key X metrics as liquid-glass cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
              alignContent: 'start',
            }}
          >
            {[
              { number: '17M', label: 'Impressions' },
              { number: '155.8K', label: 'Profile Visits' },
              { number: '1.2M', label: 'Engagements' },
              { number: '7.3%', label: 'Engagement Rate' },
            ].map(({ number, label }) => (
              <div
                key={label}
                className="liquid-glass"
                style={{
                  padding: '1.25rem 1rem',
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(99, 102, 241, 0.03) 100%)',
                }}
              >
                <span
                  className="font-tech"
                  style={{
                    fontSize: 'clamp(1.1rem, 4vw, 1.6rem)',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    display: 'block',
                    lineHeight: 1.1,
                    textShadow: '0 0 20px rgba(56, 189, 248, 0.35)',
                  }}
                >
                  {number}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', marginTop: '0.375rem', display: 'block' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== GTM Strategy ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
          }}
        >
          Go-To-Market Strategy
        </p>
        <div
          className="grid-auto-2"
          style={{ gap: '1rem' }}
        >
          <div
            className="liquid-glass"
            style={{
              borderRadius: '1rem',
              padding: '1.5rem',
              background:
                'linear-gradient(135deg, rgba(56, 189, 248, 0.04) 0%, rgba(99, 102, 241, 0.02) 100%)',
            }}
          >
            <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
              Vietnam — TikTok-First
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
              Empowered local ambassadors to produce short-form content with
              built-in incentive-sharing loops — turning viewers into active users
              organically without paid media spend.
            </p>
          </div>
          <div
            className="liquid-glass"
            style={{
              borderRadius: '1rem',
              padding: '1.5rem',
              background:
                'linear-gradient(135deg, rgba(56, 189, 248, 0.04) 0%, rgba(99, 102, 241, 0.02) 100%)',
            }}
          >
            <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
              Indonesia — Trust-First Funnel
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
              Airdrop awareness → ambassador onboarding → offline community events →
              in-app retention. Built real-world brand trust through locally hosted
              meetups before pushing digital conversion.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Campaigns ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
          }}
        >
          Key Campaigns
        </p>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--muted-foreground)',
            lineHeight: 1.65,
            maxWidth: '48rem',
          }}
        >
          Each campaign was designed around a specific growth lever — acquisition,
          activation, retention, or partnerships. Every one shipped with clear KPIs
          and a feedback loop back into the product.
        </p>

        {/* Campaign cards — scrollable row */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.15) transparent',
          }}
        >
          {[
            {
              file: 'Interlink - Active User Bounty Program.jpg',
              title: 'Active Human Bounty',
              url: 'https://x.com/inter_link/status/1907634055014961505',
              metric: '+250K',
              metricLabel: 'new users in the first month',
            },
            {
              file: 'Interlink - Ambassador Program.jpg',
              title: 'Ambassador Program',
              url: 'https://x.com/inter_link/status/1915933857876218179',
              metric: '3,000+',
              metricLabel: 'ambassadors joined — top Tier 1s drove 200K+ referrals',
            },
            {
              file: 'Interlinl - Weekly quiz.jpg',
              title: 'Weekly Quiz',
              url: 'https://x.com/inter_link/status/1926096483981386048',
              metric: '44K+',
              metricLabel: 'participants engaged',
            },
            {
              file: 'Interlink - Partnership campaign.jpg',
              title: 'Partnership Campaign',
              url: 'https://x.com/inter_link/status/1929888175885038053',
              metric: '+6,000',
              metricLabel: 'users converted to partner app installs',
            },
            {
              file: 'Interlink Game Tournament.jpg',
              title: 'Game Tournament (Weekly)',
              url: 'https://x.com/interlinklabsid/status/1938166470019539060',
              metric: '100+',
              metricLabel: 'live participants per session with streaming',
              imgBasePath: '/assets/interlink/Community/Online Events',
            },
          ].map(({ file, title, url, metric, metricLabel, imgBasePath }) => (
            <a
              key={file}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="campaign-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '280px',
                flexShrink: 0,
                borderRadius: '1rem',
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'transform 0.3s, border-color 0.3s',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Banner image */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={`${imgBasePath || '/assets/interlink/Campaign'}/${file}`}
                  alt={title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {/* Hover overlay with external link hint */}
                <div
                  className="campaign-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </div>

              {/* Info + metric — liquid glass bottom */}
              <div
                className="liquid-glass"
                style={{
                  padding: '1rem 1rem 1.25rem',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(99, 102, 241, 0.03) 100%)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                  borderRadius: 0,
                  border: 'none',
                }}
              >
                <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--foreground)', lineHeight: 1.3 }}>
                  {title}
                </p>
                <div>
                  <span
                    className="font-display"
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--accent)',
                      display: 'block',
                      lineHeight: 1.1,
                      textShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
                    }}
                  >
                    {metric}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', lineHeight: 1.4, marginTop: '0.25rem', display: 'block' }}>
                    {metricLabel}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <style>{`
          .campaign-card:hover { transform: translateY(-4px) scale(1.02); border-color: rgba(56, 189, 248, 0.25) !important; }
          .campaign-card:hover .campaign-overlay { opacity: 1 !important; }
        `}</style>
      </div>

      {/* ===== KOL Ambassador Profiles ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
          }}
        >
          KOL & Ambassador Program
        </p>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--muted-foreground)',
            lineHeight: 1.65,
            maxWidth: '48rem',
          }}
        >
          Collaborated with top-tier KOLs — mapping custom content pillars per creator,
          syncing output with product milestones weekly. Every creator sounded like
          themselves with a purpose.
        </p>
        {/* Phone mockups for KOL profiles — 3 phones in a row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { file: 'Tier 1 Ambassador.png', caption: 'Tier 1 Ambassador' },
            { file: 'Tier 1 Ambassador(1).png', caption: 'Tier 1 Ambassador' },
            { file: 'Tier 1 Ambassador(2).png', caption: 'Tier 1 Ambassador' },
          ].map(({ file, caption }) => (
            <PhoneFrame
              key={file}
              src={`/assets/interlink/kol-profiles/${file}`}
              alt={caption}
              width="180px"
            />
          ))}
        </div>
        {/* YouTube KOL — laptop frame, smaller */}
        <div style={{ maxWidth: '36rem', width: '100%', margin: '0 auto' }}>
          <LaptopFrame
            src="/assets/interlink/kol-profiles/image_2026-04-15_01-33-46.png"
            alt="KOL YouTube content"
            caption="YouTube KOL Content"
            urlBar="youtube.com"
          />
        </div>
      </div>

      {/* ===== Ambassador Performance — laptop mockups ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
          }}
        >
          Ambassador Performance
        </p>
        <div
          className="grid-auto-2"
          style={{
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          <LaptopFrame
            src="/assets/interlink/results/Tier 1 vs Tier 2 Ambassador.png"
            alt="Tier 1 vs Tier 2 Ambassador Conversion"
            caption="Tier 1 vs Tier 2 Conversion Growth"
            urlBar="analytics"
          />
          <LaptopFrame
            src="/assets/interlink/results/Tier 1 Ambassador Performance.png"
            alt="Tier 1 Ambassador Performance"
            caption="Tier 1 Ambassador 3-Month Performance"
            urlBar="analytics"
          />
        </div>
      </div>

      {/* ===== Community Data — laptop + phone mockups ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
          }}
        >
          Community as Distribution
        </p>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--muted-foreground)',
            lineHeight: 1.65,
            maxWidth: '48rem',
          }}
        >
          Transformed Discord and Telegram from passive chat rooms into interactive
          retention hubs — Task-to-Earn, Meme Wars, Game Tournaments, and Chat-to-Earn
          driving daily engagement and habitual app usage.
        </p>

        {/* Telegram data — phone mockups */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <PhoneFrame
            src="/assets/interlink/Community/Online Events/Interlink - Telegram Community Data.jpg"
            alt="Telegram Community Data"
            caption="Telegram Community"
            width="200px"
          />
          <PhoneFrame
            src="/assets/interlink/Community/Online Events/Interlin - Telegram New Members data.jpg"
            alt="Telegram New Members"
            caption="New Members Growth"
            width="200px"
          />
          <PhoneFrame
            src="/assets/interlink/Community/Online Events/Interlink - Number of active chat.jpg"
            alt="Active Chat Volume"
            caption="Active Chat Volume"
            width="200px"
          />
        </div>

        {/* Discord data — laptop mockups */}
        <div
          className="grid-auto-2"
          style={{
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          <LaptopFrame
            src="/assets/interlink/Community/Online Events/InterLink - Discord Number.jpg"
            alt="Discord Members"
            caption="Discord Members"
            urlBar="discord.com/server-insights"
          />
          <LaptopFrame
            src="/assets/interlink/Community/Online Events/Interlink - Discord Key Metrics.jpg"
            alt="Discord Key Metrics"
            caption="Discord Key Metrics"
            urlBar="discord.com/server-insights"
          />
        </div>
      </div>

      {/* ===== Online Events & Activities — scroll row ===== */}
      <ScrollRow
        images={onlineCommunity}
        basePath="/assets/interlink/Community/Online Events"
        label="Online Events & Activities"
        reverse={false}
        height="200px"
      />

      {/* ===== Offline Events — scroll row with captions ===== */}
      <CaptionScrollRow
        items={[
          { file: 'Interlink Meet up Viet Nam.jpg', caption: 'Vietnam' },
          { file: 'Interlink Meetup VietNam.jpg', caption: 'Vietnam' },
          { file: 'Interlink VietNam meet up.jpg', caption: 'Vietnam' },
          { file: 'Interlink Meetup Indonesia.jpg', caption: 'Indonesia' },
          { file: 'Interlink India Meet Up.jpg', caption: 'India' },
          { file: 'Interlink meet up India.jpg', caption: 'India' },
          { file: 'Interlink Meetup India.jpg', caption: 'India' },
          { file: 'Meetup Nigeria.jpg', caption: 'Nigeria' },
        ]}
        basePath="/assets/interlink/Community/Offline Events"
        label="Offline Community Events"
        reverse={true}
        height="220px"
      />
    </div>
  );
}
