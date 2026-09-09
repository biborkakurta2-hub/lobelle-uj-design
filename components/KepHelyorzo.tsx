import Csillanas from "./Csillanas";

/**
 * Képhelyőrző.
 *
 * ⚠️ Akkor jelenik meg, amikor egy szekcióhoz nem áll rendelkezésre valós fotó.
 *    A lobelle.hu nem volt elérhető, így termék- és életkép-fotókat nem tudtunk
 *    átvenni — kitalált képet pedig szándékosan nem teszünk be.
 *    Amint megvannak a fotók, ezt a komponenst `next/image`-re kell cserélni.
 */
export default function KepHelyorzo({
  felirat,
  arany = "aspect-[4/3]",
  className = "",
}: {
  /** Mit ábrázolna a kép — a helyőrzőn is megjelenik */
  felirat: string;
  /** Tailwind képarány osztály, pl. `aspect-[4/3]` */
  arany?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${felirat} — fotó feltöltés alatt`}
      className={`relative flex ${arany} w-full items-center justify-center overflow-hidden rounded-kartya border border-arany/30 bg-femes-meleg ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-[50%] border border-arany/25"
      />
      <div className="relative px-6 text-center">
        <Csillanas lukteto className="mx-auto h-5 w-5 text-arany/70" />
        <p className="cimke mt-3">{felirat}</p>
        <p className="mt-2 text-xs text-szilva/70">Fotó feltöltés alatt</p>
      </div>
    </div>
  );
}
