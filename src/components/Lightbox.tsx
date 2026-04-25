import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';

/* ── context ── */
const LightboxCtx = createContext<{
  open: (src: string, alt?: string) => void;
}>({ open: () => {} });

export const useLightbox = () => useContext(LightboxCtx);

/* ── provider wraps the whole app ── */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState('');

  const open = useCallback((s: string, a?: string) => {
    setSrc(s);
    setAlt(a || '');
  }, []);

  const close = useCallback(() => setSrc(null), []);

  /* close on Escape */
  useEffect(() => {
    if (!src) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [src, close]);

  /* lock body scroll when open */
  useEffect(() => {
    if (src) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [src]);

  return (
    <LightboxCtx.Provider value={{ open }}>
      {children}

      {/* overlay */}
      {src && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '2rem',
          }}
        >
          {/* close button */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            ✕
          </button>

          {/* image */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '0.5rem',
              cursor: 'default',
              animation: 'fade-rise 0.3s ease-out both',
            }}
          />
        </div>
      )}
    </LightboxCtx.Provider>
  );
}

/* ── drop-in replacement for <img> that opens lightbox on click ── */
export function LightboxImg(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  const { open } = useLightbox();

  return (
    <img
      {...props}
      onClick={(e) => {
        if (props.src) open(props.src, props.alt);
        props.onClick?.(e);
      }}
      style={{
        ...props.style,
        cursor: 'zoom-in',
      }}
    />
  );
}
