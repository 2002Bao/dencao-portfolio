export default function About() {
  return (
    <section
      id="about"
      className="section-gradient"
      style={{
        backgroundColor: 'transparent',
        padding: '6rem 1.5rem',
        position: 'relative',
      }}
    >
      {/* Orbs */}
      <div className="orb orb-blue" style={{ width: '300px', height: '300px', top: '-5%', right: '-8%', opacity: 0.5 }} />
      <div className="orb orb-cyan" style={{ width: '180px', height: '180px', bottom: '10%', left: '-5%', opacity: 0.4 }} />
      <div style={{ maxWidth: '64rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2
          className="scroll-fade font-display"
          style={{
            fontSize: '1.875rem',
            fontWeight: 400,
            color: 'var(--foreground)',
            marginBottom: '2rem',
          }}
        >
          Background
        </h2>

        <div
          className="scroll-fade"
          style={{
            color: 'var(--muted-foreground)',
            fontSize: '1rem',
            lineHeight: 1.8,
            maxWidth: '48rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <p>
            Based in Saigon. Applied Finance degree. Two years deep in Web3
            content — scaling an editorial site to 600K+ monthly readers,
            running social plays that hit 11M+ organic reach.
          </p>
          <p>
            The thing I care about: making complex financial ideas land with
            real people. Every post that performs has a system behind it. I
            build the research pipelines, editorial calendars, and distribution
            loops that keep audiences coming back on autopilot.
          </p>
          <p>
            Currently into: content strategy, personal branding, and turning
            niche expertise into trust at scale.
          </p>
        </div>
      </div>
    </section>
  );
}
