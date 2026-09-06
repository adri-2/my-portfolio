import { useEffect, useState } from "react";

/**
 * Retourne `true` dès que la page a défilé au-delà de `threshold` pixels.
 * L'écouteur est passif et throttlé via requestAnimationFrame pour éviter
 * de déclencher un re-render à chaque pixel scrollé (contrairement à un
 * handler brut sur "scroll").
 */
export function useScrolledPast(threshold = 200) {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolledPast(window.scrollY > threshold);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolledPast;
}
