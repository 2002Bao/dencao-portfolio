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
            fontSize: 'clamp(2rem, 5vw, 3rem)',
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
            Based in Ho Chi Minh City. My background combines Applied Finance,
            equity research and hands-on content marketing across Web3 products
            and media. I turn market research into explainers, social content
            and campaigns that people can understand.
          </p>
          <p>
            My work spans editorial planning at Allinstation, building the Somnia
            Insights X channel, KOL and community campaigns at InterLink, and
            product education at Holdstation. The samples below show the writing,
            visual work and distribution behind those projects.
          </p>
          <p>
            At Holdstation, my recent focus includes World App activation messages,
            notification planning and performance dashboards. That work connects
            content decisions with how people actually use a product.
          </p>
        </div>
      </div>
    </section>
  );
}
