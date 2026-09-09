import Image from "next/image";

/**
 * A Lobelle logó.
 *
 * A fájlok VÁLTOZTATÁS NÉLKÜL a `biborkakurta2-hub/lobelle` projektből
 * származnak (ez szolgálja ki a lobelle.vercel.app oldalt, ahol a logó
 * helyesen jelenik meg). Nem lett újrarajzolva és nem lett átalakítva.
 *
 *  - /logo.png       – teljes logó: fül-szimbólum + „lobelle” + alcím (1112×805)
 *  - /logo-mark.png  – csak a fül-szimbólum (741×1194)
 *
 * SVG változat nem állt rendelkezésre, ezért a legjobb minőségű PNG-t használjuk.
 */

type LogoProps = {
  /** "teljes" = szimbólum + felirat + alcím, "jel" = csak a fül-szimbólum */
  valtozat?: "teljes" | "jel";
  className?: string;
  /** Fejlécben/hero-ban igaz: elsőbbségi betöltés */
  priority?: boolean;
  sizes?: string;
};

export default function Logo({
  valtozat = "teljes",
  className = "",
  priority = false,
  sizes,
}: LogoProps) {
  if (valtozat === "jel") {
    return (
      <Image
        src="/logo-mark.png"
        alt=""
        aria-hidden="true"
        width={741}
        height={1194}
        sizes={sizes}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src="/logo.png"
      alt="Lobelle – Titan Ear Piercing Technologies"
      width={1112}
      height={805}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}
