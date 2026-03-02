import { useState, useEffect, useRef } from 'react';

/**
 * useUnmaskOnScroll - Hook para revelar secciones gradualmente al hacer scroll
 * @param {boolean} disabled - Si es true, el efecto está desactivado
 * @param {number} threshold - Porcentaje del elemento visible para activar (0-1)
 * @param {string} rootMargin - Margen adicional en px
 */
export const useUnmaskOnScroll = (disabled = false, threshold = 0.15, rootMargin = '-50px') => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (disabled) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
        triggerOnce: true
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [disabled, threshold, rootMargin]);

  return [ref, isVisible];
};
