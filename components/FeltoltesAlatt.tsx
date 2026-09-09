import Link from "next/link";

/**
 * A kategóriaoldalak üres állapota.
 *
 * ⚠️ Ez NEM dizájnelem, hanem őszinte állapotjelzés: a valós termékadatok
 *    (nevek, árak, variánsok) nem álltak rendelkezésre, és kitalált terméket
 *    szándékosan nem teszünk az oldalra. Amint a `data/products.ts`
 *    `TERMEKEK` tömbje feltöltődik, ez a blokk automatikusan eltűnik.
 */
export default function FeltoltesAlatt() {
  return (
    <div className="kartya-meleg mx-auto max-w-2xl text-center">
      <p className="cimke mt-5">Feltöltés alatt</p>
      <p className="mt-5 font-cim text-2xl leading-snug text-szilva">
        A kategória termékei hamarosan elérhetők.
      </p>
      <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-szilva/75">
        Amíg a webshop feltöltése tart, telefonon és emailben is szívesen adunk tájékoztatást a
        kínálatról, az árakról és a szállításról.
      </p>
      <Link href="/kapcsolat" className="gomb-elsodleges mt-9">
        Érdeklődöm a kategóriáról
      </Link>
    </div>
  );
}
