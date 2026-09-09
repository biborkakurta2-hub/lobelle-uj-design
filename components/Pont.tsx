/**
 * Finom pont — listajelölő és elválasztó.
 *
 * A korábbi csillanás-motívum helyett ez a visszatérő apró elem: rózsás
 * mályva pont, amely a paletta másodlagos akcentjét viszi végig az oldalon.
 * Tisztán dekoratív, a képernyőolvasó nem látja.
 */
export default function Pont({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-malyva ${className}`}
    />
  );
}
