/**
 * CSILLANÁS — a Lobelle visszatérő dekoratív motívuma.
 *
 * A négyágú csillanás magából a Lobelle logóból származik (a fül-szimbólum
 * mellett látható), tehát nem kitalált elem, hanem a márka sajátja.
 *
 * Ez az a motívum, ami ezen az oldalon megvan, a testvéroldalon (Szépítész
 * Műhely) nincs — ott az akvarell sáv tölti be ezt a szerepet.
 * Lásd STYLE-ANALYSIS.md 7/e pont.
 */

import type { CSSProperties } from "react";

type CsillanasProps = {
  className?: string;
  /** Lassú, alig érzékelhető lüktetés (dekoratív háttérelemeknél) */
  lukteto?: boolean;
  style?: CSSProperties;
};

export default function Csillanas({ className = "", lukteto = false, style }: CsillanasProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={style}
      className={`${lukteto ? "animate-csillan" : ""} ${className}`}
    >
      {/*
        Négyágú csillag homorú oldalakkal — a logó csillanás-elemének arányai.
        A csúcsok a 12/24 tengelyeken, a köztes vezérlőpontok a középpont felé
        húzva adják a karcsú, „szikrázó” formát.
      */}
      <path
        d="M12 0 C12.6 7.2 16.8 11.4 24 12 C16.8 12.6 12.6 16.8 12 24 C11.4 16.8 7.2 12.6 0 12 C7.2 11.4 11.4 7.2 12 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Szórt csillanás-mező — dekoratív háttér a heróhoz és a kiemelt szekciókhoz.
 * Tisztán dekoratív, a képernyőolvasó számára láthatatlan.
 */
export function CsillanasMezo({ className = "" }: { className?: string }) {
  /* Fix pozíciók — nem véletlenszerűek, hogy szerverem és kliensen azonos legyen */
  const pontok = [
    { top: "8%", left: "6%", meret: "h-3 w-3", kesleltetes: "0s", szin: "text-arany/70" },
    { top: "22%", left: "88%", meret: "h-5 w-5", kesleltetes: "0.8s", szin: "text-arany/50" },
    { top: "58%", left: "3%", meret: "h-4 w-4", kesleltetes: "1.6s", szin: "text-malyva/45" },
    { top: "74%", left: "80%", meret: "h-2.5 w-2.5", kesleltetes: "2.4s", szin: "text-arany/60" },
    { top: "40%", left: "94%", meret: "h-2 w-2", kesleltetes: "3.2s", szin: "text-malyva/40" },
    { top: "88%", left: "40%", meret: "h-2.5 w-2.5", kesleltetes: "1.2s", szin: "text-arany/40" },
  ];

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {pontok.map((p, i) => (
        <Csillanas
          key={i}
          lukteto
          className={`absolute ${p.meret} ${p.szin}`}
          style={{ top: p.top, left: p.left, animationDelay: p.kesleltetes }}
        />
      ))}
    </div>
  );
}
