/**
 * TERMÉKADATOK
 * ============
 *
 * A termékkategóriák leírásai a Lobelle márkaanyagából származnak.
 *
 * ⚠️  A KONKRÉT TERMÉKEK (nevek, árak, variánsok) LISTÁJA SZÁNDÉKOSAN ÜRES.
 *     A lobelle.hu nem volt elérhető a projekt készítésekor, és kitalált
 *     terméket vagy árat nem teszünk az oldalra. Amíg a `TERMEKEK` tömb üres,
 *     a kategóriaoldalak őszinte „Feltöltés alatt” állapotot mutatnak.
 *
 *     Feltöltéshez elég ebbe a fájlba felvenni a termékeket a `Termek`
 *     típus szerint — a kategóriaoldalak, a rendezés és a termékrács
 *     változtatás nélkül működnek tovább.
 */

export type Termek = {
  /** Egyedi azonosító (URL-barát) */
  id: string;
  /** Termék neve, ahogy a boltban szerepel */
  nev: string;
  /** Melyik kategóriába tartozik — a `Kategoria.slug` értékek egyike */
  kategoria: string;
  /** Ár forintban. `null`, ha egyedi árazású vagy nincs megadva. */
  ar: number | null;
  /** Rövid leírás a kártyán */
  leiras?: string;
  /** Bővebb leírás a termékoldalon */
  reszletesLeiras?: string;
  /** Választható variánsok (pl. méret, szín) */
  variansok?: string[];
  /** Kép a `public/termekek/` mappából, pl. `/termekek/standard/lobelle-01.jpg` */
  kep?: string;
  /** Kép alt szövege — akadálymentességhez kötelező, ha van kép */
  kepAlt?: string;
};

export type Kategoria = {
  slug: string;
  /** Teljes név a navigációban */
  nev: string;
  /** Rövid név a kártyákon */
  rovidNev: string;
  /** Oldalcím */
  cim: string;
  /** Egymondatos leírás a kategóriakártyán */
  leiras: string;
  /** Bővebb kategórialeírás a kategóriaoldal fejlécében */
  hosszuLeiras: string;
};

export const KATEGORIAK: Kategoria[] = [
  {
    slug: "standard-ekszerek",
    nev: "Standard ékszerek korosztály nélkül",
    rovidNev: "Standard ékszerek",
    cim: "Standard ékszerek",
    leiras: "Korosztály nélkül — letisztult formák minden napra.",
    hosszuLeiras:
      "Implantátum minőségű, ASTM F136 szabványú Grade 23 titánból készült fülbevalók, amelyeket korosztálytól függetlenül bárki biztonsággal viselhet. Teljesen nikkelmentesek, nem oxidálódnak és nem színeződnek el — a rendkívül vékony szár és a lekerekített hátsó kapocs pedig a mindennapi viseletet is kényelmessé teszi.",
  },
  {
    slug: "gyerek-ekszerek",
    nev: "Gyerek ékszerek",
    rovidNev: "Gyerek ékszerek",
    cim: "Gyerek ékszerek",
    leiras: "Játékos, mégis elegáns darabok a legkisebbeknek.",
    hosszuLeiras:
      "Gyerekeknek tervezett titánium fülbevalók: játékos formák, biztonságos, lekerekített hátsó kapocs, amely alvás közben sem szúr. A nikkelmentes, biokompatibilis anyag az érzékeny gyerekbőrnek is kíméletes — a szülő nyugalma pedig nem extra, hanem alapfelszereltség.",
  },
  {
    slug: "baba-ekszerek",
    nev: "Baba ékszerek dobozzal együtt",
    rovidNev: "Baba ékszerek",
    cim: "Baba ékszerek díszdobozzal",
    leiras: "Elegáns díszdobozzal — ajándéknak is tökéletes.",
    hosszuLeiras:
      "Az első fülbevaló egyszeri alkalom — ehhez méltó kivitelben kínáljuk. Minden baba ékszer elegáns díszdobozban érkezik, így ajándéknak is tökéletes. A rendkívül vékony titánium szár kíméletes lyukasztást tesz lehetővé, a lekerekített kapocs pedig a legkisebbeknek is kényelmes.",
  },
  {
    slug: "orr-piercingek",
    nev: "Orr piercingek",
    rovidNev: "Orr piercingek",
    cim: "Orr piercingek",
    leiras: "Precíz, kíméletes titánium orrékszerek.",
    hosszuLeiras:
      "Titánium orrékszerek, amelyek ugyanabból az implantátum minőségű alapanyagból készülnek, mint a fülbevalóink. A biokompatibilis, nikkelmentes titán gyorsabb gyógyulást és kevesebb irritációt jelent — pontosan ott, ahol a bőr a legérzékenyebb.",
  },
  {
    slug: "kellekek-eszkozok",
    nev: "Kellékek, eszközök",
    rovidNev: "Kellékek, eszközök",
    cim: "Kellékek és eszközök",
    leiras: "Utóápolók, csipeszek és minden, ami a munkához kell.",
    hosszuLeiras:
      "Minden, ami a professzionális munkához kell: utóápoló oldatok, speciális eltávolító csipeszek, sebészeti jelölőtollak, fertőtlenítők és gyakorló kellékek. Ugyanazzal az igényességgel válogatva, mint az ékszereink — mert a prémium szolgáltatás a részleteken múlik.",
  },
  {
    slug: "ful-es-orrlyukaszto-keszulek",
    nev: "Fül- és orrlyukasztó készülék",
    rovidNev: "Lyukasztó készülék",
    cim: "Fül- és orrlyukasztó készülék",
    leiras: "A Lobelle-rendszer szíve: professzionális készülék.",
    hosszuLeiras:
      "A Lobelle-rendszer szíve: professzionális fül- és orrlyukasztó készülék, amelyet kifejezetten a rendkívül vékony titánium ékszereinkhez terveztek. A precíz mechanika kíméletes, alig érezhető lyukasztást tesz lehetővé — babáknál és felnőtteknél egyaránt.",
  },
];

/**
 * ⚠️ Üres, amíg a valós termékadatok meg nem érkeznek a lobelle.hu-ról.
 *    Ne töltsd fel kitalált adattal.
 */
export const TERMEKEK: Termek[] = [];

export function getKategoria(slug: string): Kategoria | undefined {
  return KATEGORIAK.find((k) => k.slug === slug);
}

export function getTermekekKategoriankent(slug: string): Termek[] {
  return TERMEKEK.filter((t) => t.kategoria === slug);
}
