import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to all elements with .scroll-fade
 * inside the given container (defaults to document). Adds .is-visible
 * once they enter the viewport.
 */
export function useScrollFade() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.scroll-fade');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);
}
