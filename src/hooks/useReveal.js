import { useEffect, useRef } from 'react';

export default function useReveal(threshold = 0.14) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // If ref points to a single element, observe it.
    // Also observe any children with .reveal class
    if (el.classList.contains('reveal')) {
      observer.observe(el);
    }
    el.querySelectorAll('.reveal').forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
