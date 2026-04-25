export default function Nav() {
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{ position: 'relative', zIndex: 10 }}
      className="w-full"
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <span
          className="font-display"
          style={{
            fontSize: '1.5rem',
            letterSpacing: '-0.02em',
            color: 'var(--foreground)',
            cursor: 'default',
          }}
        >
          Den Cao
        </span>

        {/* Links — hidden on mobile */}
        <ul
          style={{
            display: 'none',
            gap: '2rem',
            listStyle: 'none',
          }}
          className="md-nav"
        >
          {[
            { label: 'Work',    id: 'work'    },
            { label: 'About',   id: 'about'   },
            { label: 'Process', id: 'process' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleScroll(id)}
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted-foreground)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--foreground)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--muted-foreground)')
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Inline responsive style — show links on md+ */}
      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
