const STEPS = [
  {
    number: '01',
    title: 'Research',
    description:
      'Audience, market gaps, competitor blind spots. All before writing a single word.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Content pillars, format mix, publishing rhythm — all wired to business goals.',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'Write, design, ship. I own the pipeline from idea to live post.',
  },
  {
    number: '04',
    title: 'Optimize',
    description:
      'Track the numbers. Double down on what compounds, kill what flatlines.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-gradient"
      style={{
        backgroundColor: 'transparent',
        padding: '6rem 1.5rem',
        position: 'relative',
      }}
    >
      {/* Orbs */}
      <div className="orb orb-blue" style={{ width: '220px', height: '220px', top: '10%', right: '-5%', opacity: 0.4 }} />
      <div className="orb orb-white" style={{ width: '160px', height: '160px', bottom: '15%', left: '-3%', opacity: 0.3 }} />

      <div style={{ maxWidth: '64rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2
          className="scroll-fade font-display"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 400,
            color: 'var(--foreground)',
            marginBottom: '3rem',
          }}
        >
          How I Work
        </h2>

        <div
          className="scroll-fade process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}
        >
          {STEPS.map(({ number, title, description }) => (
            <div
              key={number}
              className="liquid-glass"
              style={{
                borderRadius: '1rem',
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: '2rem',
                  color: 'var(--muted-foreground)',
                  opacity: 0.4,
                  lineHeight: 1,
                }}
              >
                {number}
              </span>
              <h3
                className="font-display"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: 'var(--foreground)',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.65,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
