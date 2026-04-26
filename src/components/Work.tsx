import { useState } from 'react';
import CaseInterLink    from './work/CaseInterLink';
import CaseSomnia       from './work/CaseSomnia';
import CaseAllinstation from './work/CaseAllinstation';
import CaseHoldstation  from './work/CaseHoldstation';

interface CaseEntry {
  logo: string;
  company: string;
  role: string;
  headline: string;
  Component: React.ComponentType;
}

const CASES: CaseEntry[] = [
  {
    logo: '/assets/logos/interlink.jpg',
    company: 'InterLink',
    role: 'Growth Marketing Executive',
    headline: '1.5M verified users in 3 months — community-first growth for a human network',
    Component: CaseInterLink,
  },
  {
    logo: '/assets/logos/somnia.jpg',
    company: 'Somnia Insights',
    role: 'Content Strategy & Design',
    headline: 'Running a one-man media engine for an L1 ecosystem',
    Component: CaseSomnia,
  },
  {
    logo: '/assets/logos/allinstation.jpg',
    company: 'Allinstation',
    role: 'Editorial Strategy & Content Ops',
    headline: 'Engineering a daily habit for 600K readers',
    Component: CaseAllinstation,
  },
  {
    logo: '/assets/logos/holdstation.png',
    company: 'Holdstation',
    role: 'Growth Content & Brand Strategy',
    headline: '11M organic reach for a DeFi wallet in 90 days',
    Component: CaseHoldstation,
  },
];

function AccordionCase({ entry }: { entry: CaseEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="liquid-glass scroll-fade"
      style={{
        borderRadius: '1.25rem',
        overflow: 'hidden',
      }}
    >
      {/* Collapsed header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="case-header"
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '1.75rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'left',
          color: 'inherit',
        }}
      >
        <img
          src={entry.logo}
          alt={`${entry.company} logo`}
          style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '0.5rem',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span
              className="font-display"
              style={{ fontSize: '1.25rem', color: 'var(--foreground)' }}
            >
              {entry.company}
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted-foreground)',
              }}
            >
              {entry.role}
            </span>
          </div>
          <h3
            className="font-display"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.375rem)',
              fontWeight: 400,
              color: 'var(--foreground)',
              lineHeight: 1.2,
              marginTop: '0.375rem',
              opacity: 0.8,
            }}
          >
            {entry.headline}
          </h3>
        </div>

        {/* Chevron */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            color: 'var(--muted-foreground)',
          }}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Expanded content */}
      <div
        style={{
          maxHeight: open ? '6000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
        }}
      >
        <entry.Component />
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="section-gradient"
      style={{
        backgroundColor: 'transparent',
        padding: '6rem 1.5rem',
        position: 'relative',
      }}
    >
      {/* Orbs */}
      <div className="orb orb-indigo" style={{ width: '350px', height: '350px', top: '5%', left: '-10%', opacity: 0.4 }} />
      <div className="orb orb-blue" style={{ width: '250px', height: '250px', bottom: '15%', right: '-8%', opacity: 0.35 }} />
      <div className="orb orb-white" style={{ width: '150px', height: '150px', top: '40%', right: '5%', opacity: 0.3 }} />

      <div style={{ maxWidth: '64rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2
          className="scroll-fade font-display"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 400,
            color: 'var(--foreground)',
            marginBottom: '4rem',
          }}
        >
          Selected Work
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {CASES.map((entry) => (
            <AccordionCase key={entry.company} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
