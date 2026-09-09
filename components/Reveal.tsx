"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Görgetésre megjelenő blokk — fade + felfelé csúszás.
 *
 * A mozgás karaktere azonos a Szépítész Műhely `felszallas` animációjáéval
 * (0.7s ease-out, 18px elmozdulás), így a két oldal egyformán „mozog”.
 * `prefers-reduced-motion` esetén a globals.css kikapcsolja.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Késleltetés ezredmásodpercben — lépcsőzetes megjelenéshez */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [lathato, setLathato] = useState(false);

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    // Ha nincs IntersectionObserver, azonnal megjelenítjük
    if (typeof IntersectionObserver === "undefined") {
      setLathato(true);
      return;
    }

    const figyelo = new IntersectionObserver(
      ([bejegyzes]) => {
        if (bejegyzes.isIntersecting) {
          setLathato(true);
          figyelo.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    figyelo.observe(elem);
    return () => figyelo.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal transition-all duration-700 ease-out ${
        lathato ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
