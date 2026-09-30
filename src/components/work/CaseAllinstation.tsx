import { useEffect, useRef } from 'react';
import { LightboxImg } from '../Lightbox';

/** Auto-scrolling marquee row — triplicates images to ensure no gaps */
function ScrollRow({
  images,
  basePath,
  label,
  reverse = false,
}: {
  images: string[];
  basePath: string;
  label: string;
  reverse?: boolean;
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

  // Triplicate images so there's always enough to fill + loop
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
  );
}

/** Mac-style browser frame with liquid glass */
function MacFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="liquid-glass"
      style={{
        borderRadius: '0.75rem',
        overflow: 'hidden',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: 'rgba(255,255,255,0.06)',
          padding: '0.625rem 0.875rem',
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
              width: '0.5rem',
              height: '0.5rem',
              borderRadius: '50%',
              background: c,
              display: 'inline-block',
            }}
          />
        ))}
        <span
          style={{
            marginLeft: '0.5rem',
            fontSize: '0.65rem',
            color: 'var(--muted-foreground)',
          }}
        >
          {alt}
        </span>
      </div>
      {/* Content */}
      <LightboxImg
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  );
}

export default function CaseAllinstation() {
  const analyticalInsight = Array.from({ length: 10 }, (_, i) => `insight-${i + 1}.png`);
  const marketNews = Array.from({ length: 9 }, (_, i) => `news-${i + 1}.png`);
  const projectsAnalytic = Array.from({ length: 14 }, (_, i) => `project-${i + 1}.png`);
  const memes = Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    const ext = (n === 2 || n === 9) ? 'jpg' : 'png';
    return `meme-${n}.${ext}`;
  });

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
          Allinstation serves Vietnamese readers following fast-moving financial
          and crypto markets. The editorial challenge was to make timely news
          and technical topics clear across the website and social channels.
        </p>
        <p>
          <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>
            Action:
          </strong>{' '}
          Researched and wrote market news, project explainers and sector analysis.
          Contributed to editorial scheduling, WordPress SEO and Facebook content,
          adapting the same topics into articles, visuals and short social formats.
        </p>
        {/* Key metrics — bold numbers */}
        <div
          className="grid-auto-3"
          style={{ gap: '1rem', marginTop: '0.5rem' }}
        >
          {[
            { number: 'Research', label: 'Market news and sector explainers' },
            { number: 'Editorial', label: 'Article planning and WordPress publishing' },
            { number: 'Social', label: 'Facebook formats and distribution' },
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

      {/* ===== Blog UI Showcase — compact 3-frame grid ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
          }}
        >
          Blog UI
        </p>
        <div
          className="grid-auto-3"
          style={{ gap: '0.75rem' }}
        >
          <MacFrame
            src="/assets/allinstation/articles/Article UI.png"
            alt="allinstation.com — Article page"
          />
          <MacFrame
            src="/assets/allinstation/articles/Blog UI.png"
            alt="allinstation.com — Blog homepage"
          />
          <MacFrame
            src="/assets/allinstation/articles/Overview Article.png"
            alt="allinstation.com — Overview"
          />
        </div>
      </div>

      {/* ===== Allinstation Blog Contents — 3 scrolling lines ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h4
          className="font-display"
          style={{
            fontSize: '1.25rem',
            color: 'var(--foreground)',
            fontWeight: 400,
          }}
        >
          Allinstation Blog Contents
        </h4>

        <ScrollRow
          images={analyticalInsight}
          basePath="/assets/allinstation/analytical-insight"
          label="Analytical Insight Articles"
          reverse={false}
        />

        <ScrollRow
          images={marketNews}
          basePath="/assets/allinstation/market-news"
          label="Market News"
          reverse={true}
        />

        <ScrollRow
          images={projectsAnalytic}
          basePath="/assets/allinstation/projects-analytic"
          label="Projects Analytic"
          reverse={false}
        />
      </div>

      {/* ===== Hulk Meme Comic ===== */}
      <ScrollRow
        images={memes}
        basePath="/assets/allinstation/meme"
        label="Hulk Meme Comic"
        reverse={true}
      />

      {/* ===== Facebook Fanpage Performance ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0.75rem',
          }}
        >
          <LightboxImg
            src="/assets/allinstation/facebook/fb-analytics.png"
            alt="Facebook analytics"
            loading="lazy"
            style={{ width: '100%', borderRadius: '0.75rem', display: 'block' }}
          />
          <LightboxImg
            src="/assets/allinstation/facebook/fb-reach-report.png"
            alt="Facebook reach report"
            loading="lazy"
            style={{ width: '100%', borderRadius: '0.75rem', display: 'block' }}
          />
        </div>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--muted-foreground)',
            textAlign: 'center',
            marginTop: '0.25rem',
          }}
        >
          Facebook Fanpage Performance
        </p>
      </div>

      {/* ===== YouTube ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--muted-foreground)',
            marginBottom: '0.25rem',
          }}
        >
          Video content
        </p>
        <LightboxImg
          src="/assets/allinstation/video-content.jpg"
          alt="Allinstation video content samples: Mint Blockchain, Banana Gun, SoMon, Bitlayer, Mantle and Nigella Chain"
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0.75rem' }}
        />
      </div>
    </div>
  );
}
