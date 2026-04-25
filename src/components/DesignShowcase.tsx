import { useEffect, useRef } from 'react';
import { LightboxImg } from './Lightbox';

const LANDSCAPE = [
  { file: 'defi-layer-of-somnia.jpg',                          project: 'Somnia — DeFi Layer' },
  { file: 'somnia-gaming-era.jpg',                              project: 'Somnia — Gaming Era' },
  { file: 'somia-dream-blizt.jpg',                              project: 'Somnia — Dream Blitz' },
  { file: 'a-thesis-on-somi-tge-listing-price.jpg',             project: 'Somnia — $SOMI TGE Thesis' },
  { file: 'winner-2.jpg',                                       project: 'Winner' },
  { file: '0402-tet-eng-x.png',                                 project: 'Holdstation — Tết Campaign' },
  { file: '0502-gom-tron-phong-vi-tet-moi-tron-ay.png',         project: 'Holdstation — Tết Visual' },
  { file: '100326-cong-nap-rut-token-hold.png',                 project: 'Holdstation — Token Gateway' },
  { file: '160326-trade-global-assets-on-holdstation.png',       project: 'Holdstation — Global Assets' },
  { file: '1803-go-to-fiat-gateway-for-the-future-of-payment.png', project: 'Holdstation — Fiat Gateway' },
  { file: '2402-tokenized-u-s-stocks-ecosystem-map-2.png',      project: 'Holdstation — US Stocks Map' },
  { file: '0104-67m-2.png',                                     project: 'Holdstation — 67M Milestone' },
  { file: 'stock-category.jpg',                                  project: 'Allinstation Stock Map' },
  { file: '1901-mua-co-san-loc-750x448.png',                    project: 'Holdstation — Mua Cổ Săn Lộc' },
];

const SQUARE = [
  { file: '0904-grab-a-share-of-2.png',                         project: 'Holdstation — Grab a Share' },
  { file: '120326-app-cover-02-2.jpg',                           project: 'Holdstation — App Cover' },
  { file: '2003-so-huu-co-phieu-vinfast-vfson-ngay-tren-ien-thoai.png', project: 'Holdstation — VinFast Stocks' },
  { file: '3003-vietnams-crypto-tax-framework-2.png',            project: 'Holdstation — Crypto Tax Framework' },
  { file: '060226-gac-lai-phien-lo-vi-tet-la-sum-hop.png',      project: 'Holdstation — Tết Greeting' },
  { file: '0204-hold-exclusive-10-000-wld-drop-en-2.png',       project: 'Holdstation — WLD Drop' },
  { file: '0303-aion-rebooted-predict-and-earn-en.png',          project: 'Holdstation — AION Rebooted' },
  { file: 'nfts-minting-phase-1.jpg',                           project: 'Somnia — NFTs Minting' },
  { file: 'vietnam-crypto-sandbox.png',                          project: 'Allinstation VN Crypto' },
  { file: 'vietnam-crypto-sandbox-2.png',                        project: 'Allinstation VN Crypto 2' },
  { file: 'this-week-on-somnia-2.png',                           project: 'This Week on Somnia #2' },
];

function DesignScrollRow({
  items, height, label, reverse = false,
}: {
  items: { file: string; project: string }[];
  height: string;
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
      pos += reverse ? 0.35 : -0.35;
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
          fontSize: '0.7rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--muted-foreground)',
          paddingLeft: '1.5rem',
        }}
      >
        {label}
      </p>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '0.75rem',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {tripled.map(({ file, project }, i) => (
            <div
              key={`${file}-${i}`}
              className="design-item"
              style={{
                position: 'relative',
                height,
                flexShrink: 0,
                borderRadius: '0.5rem',
                overflow: 'hidden',
              }}
            >
              <LightboxImg
                src={`/assets/design-showcase/${file}`}
                alt={project}
                loading="lazy"
                style={{ height: '100%', display: 'block', borderRadius: '0.5rem' }}
              />
              <div
                className="design-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  borderRadius: '0.5rem',
                }}
              >
                <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 500, textAlign: 'center', padding: '0 0.75rem' }}>
                  {project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DesignShowcase() {
  return (
    <section
      id="designs"
      className="section-gradient"
      style={{ backgroundColor: 'transparent', padding: '6rem 0', overflow: 'hidden', position: 'relative' }}
    >
      {/* Orbs */}
      <div className="orb orb-cyan" style={{ width: '280px', height: '280px', top: '-8%', left: '15%', opacity: 0.4 }} />
      <div className="orb orb-indigo" style={{ width: '200px', height: '200px', bottom: '5%', right: '10%', opacity: 0.35 }} />

      <div className="scroll-fade" style={{ maxWidth: '64rem', margin: '0 auto 3rem', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--foreground)', marginBottom: '0.75rem' }}
        >
          Selected Designs
        </h2>
        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9375rem' }}>
          Visual work across projects — social assets, infographics, brand materials. All Figma + Canva.
        </p>
      </div>

      <div className="scroll-fade" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
        <DesignScrollRow items={LANDSCAPE} height="200px" label="Banners & Covers" reverse={false} />
        <DesignScrollRow items={SQUARE} height="240px" label="Social Assets" reverse={true} />
      </div>

      <style>{`
        .design-item:hover .design-overlay { opacity: 1 !important; }
        .design-item:hover { transform: scale(1.03); transition: transform 0.3s; z-index: 2; }
      `}</style>
    </section>
  );
}
