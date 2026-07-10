import { useEffect, useRef } from 'react';

/**
 * useInView – a simple hook that returns a ref to be attached to a DOM element.
 * When the element enters the viewport, the hook adds the CSS class "inView"
 * which triggers the fade‑in animation defined in `styles/sections.css`.
 */
export default function useInView() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('inView');
        } else {
          element.classList.remove('inView');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
