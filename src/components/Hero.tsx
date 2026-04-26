import { useEffect, useRef, useState, useCallback } from 'react';
import Nav from './Nav';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwlXH07IWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4';

const FLOAT_IMAGES = [
  // Top row
  { file: 'defi-layer-of-somnia.jpg', x: '3%',  y: '8%',  w: '170px', delay: 0, rotate: -6 },
  { file: '0104-67m-2.png',           x: '22%', y: '5%',  w: '150px', delay: 0.3, rotate: 3 },
  { file: '120326-app-cover-02-2.jpg', x: '55%', y: '3%',  w: '140px', delay: 0.8, rotate: 5 },
  { file: 'stock-category.jpg',       x: '78%', y: '7%',  w: '160px', delay: 1.1, rotate: -4 },
  // Middle-upper
  { file: 'somia-dream-blizt.jpg',    x: '0%',  y: '30%', w: '155px', delay: 0.5, rotate: 4 },
  { file: 'nfts-minting-phase-1.jpg', x: '82%', y: '25%', w: '140px', delay: 0.6, rotate: -7 },
  // Middle — away from center text
  { file: '060226-gac-lai-phien-lo-vi-tet-la-sum-hop.png', x: '1%', y: '48%', w: '120px', delay: 1.4, rotate: 3 },
  { file: '0303-aion-rebooted-predict-and-earn-en.png',    x: '85%', y: '45%', w: '130px', delay: 0.9, rotate: -5 },
  // Lower
  { file: 'somnia-gaming-era.jpg',     x: '8%',  y: '65%', w: '180px', delay: 1.2, rotate: -3 },
  { file: '0904-grab-a-share-of-2.png', x: '28%', y: '70%', w: '130px', delay: 0.4, rotate: 8 },
  { file: '2402-tokenized-u-s-stocks-ecosystem-map-2.png', x: '48%', y: '75%', w: '160px', delay: 1.7, rotate: -2 },
  { file: 'winner-2.jpg',             x: '72%', y: '68%', w: '150px', delay: 1.6, rotate: -5 },
  { file: '0402-tet-eng-x.png',       x: '0%',  y: '80%', w: '140px', delay: 2, rotate: 4 },
  // Bottom corners
  { file: '100326-cong-nap-rut-token-hold.png', x: '88%', y: '78%', w: '130px', delay: 1.8, rotate: 6 },
  { file: 'a-thesis-on-somi-tge-listing-price.jpg', x: '40%', y: '4%', w: '130px', delay: 0.2, rotate: -3 },
  { file: '0502-gom-tron-phong-vi-tet-moi-tron-ay.png', x: '60%', y: '72%', w: '140px', delay: 1.3, rotate: 2 },
];

/** Radius (px) within which images start brightening */
const REVEAL_RADIUS = 250;

function FloatingImage({
  file, x, y, w, delay, rotate, mouseX, mouseY,
}: {
  file: string; x: string; y: string; w: string;
  delay: number; rotate: number;
  mouseX: number; mouseY: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const floatRef = useRef({ t: delay * 1000, animId: 0 });

  // Float animation
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const state = floatRef.current;
    const step = () => {
      state.t += 16;
      const fy = Math.sin(state.t / 3000) * 10;
      const fx = Math.cos(state.t / 4000) * 6;
      el.style.transform = `translate(${fx}px, ${fy}px) rotate(${rotate}deg)`;
      state.animId = requestAnimationFrame(step);
    };
    state.animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(state.animId);
  }, [delay, rotate]);

  // Proximity-based brightness
  const elRef = useRef<DOMRect | null>(null);
  useEffect(() => {
    if (ref.current) {
      elRef.current = ref.current.getBoundingClientRect();
    }
  });

  let proximity = 1; // 1 = far, 0 = on top
  if (elRef.current && mouseX > 0) {
    const rect = elRef.current;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dist = Math.sqrt((mouseX - cx) ** 2 + (mouseY - cy) ** 2);
    proximity = Math.min(dist / REVEAL_RADIUS, 1);
  }

  // Map proximity to visual values
  const opacity = 0.25 + (1 - proximity) * 0.75;    // 0.25 → 1.0
  const brightness = 0.5 + (1 - proximity) * 0.5;   // 0.5 → 1.0
  const blur = proximity * 1.5;                       // 1.5px → 0px
  const scale = 1 + (1 - proximity) * 0.08;          // 1.0 → 1.08

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        borderRadius: '0.75rem',
        overflow: 'hidden',
        boxShadow: proximity < 0.5
          ? `0 8px 40px rgba(255,255,255,${0.1 * (1 - proximity)}), 0 0 60px rgba(100,140,255,${0.15 * (1 - proximity)})`
          : '0 8px 32px rgba(0,0,0,0.5)',
        opacity: 0,
        filter: `blur(${blur}px) brightness(${brightness})`,
        animation: `heroImgIn 1s ease ${delay}s forwards`,
        zIndex: proximity < 0.3 ? 5 : 2,
        pointerEvents: 'none',
        transition: 'filter 0.15s ease, box-shadow 0.2s ease',
        '--reveal-opacity': opacity,
      } as React.CSSProperties}
    >
      <img
        src={`/assets/design-showcase/${file}`}
        alt=""
        loading="eager"
        style={{
          width: '100%',
          display: 'block',
          transform: `scale(${scale})`,
          transition: 'transform 0.2s ease',
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  }, []);

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouse}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.35)',
        }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 1,
        }}
      />

      {/* Floating design images — proximity reveal */}
      <div
        className="hero-floats"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        {FLOAT_IMAGES.map((img) => (
          <FloatingImage
            key={img.file}
            {...img}
            mouseX={mouse.x}
            mouseY={mouse.y}
          />
        ))}
      </div>

      {/* Nav */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Nav />
      </div>

      {/* Hero content */}
      <div
        className="hero-content-pad"
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '8rem 1.5rem 10rem',
        }}
      >
        <h1
          className="animate-fade-rise font-display"
          style={{
            fontSize: 'clamp(2.75rem, 8vw, 6rem)',
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
            fontWeight: 400,
            color: '#fff',
            maxWidth: '80rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.3)',
          }}
        >
          Clear content for{' '}
          <em className="not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
            complex
          </em>{' '}
          markets.
        </h1>

        <p
          className="animate-fade-rise-delay"
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            maxWidth: '42rem',
            marginTop: '2rem',
            lineHeight: 1.7,
            textShadow: '0 1px 10px rgba(0,0,0,0.5)',
          }}
        >
          Content strategist, finance brain. I help brands turn heavy
          technical lifts into stories people actually stick around to read.
        </p>

        <button
          className="liquid-glass animate-fade-rise-delay-2"
          onClick={handleScrollToWork}
          style={{
            borderRadius: '9999px',
            padding: '1.25rem 3.5rem',
            fontSize: '1rem',
            color: 'var(--foreground)',
            marginTop: '3rem',
            cursor: 'pointer',
            background: 'transparent',
            border: 'none',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.transform = 'scale(1.03)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')
          }
        >
          See the work
        </button>
      </div>

      <style>{`
        @keyframes heroImgIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to   { opacity: var(--reveal-opacity, 0.25); }
        }
        @media (max-width: 768px) {
          .hero-floats { display: none; }
        }
        @media (max-width: 640px) {
          .hero-content-pad { padding: 5rem 1.25rem 5rem !important; }
        }
      `}</style>
    </section>
  );
}
