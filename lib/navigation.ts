/**
 * A teljes navigációs szerkezet — a fejléc és a lábléc is ebből épül.
 */

export type NavLink = { label: string; href: string };

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavLink[];
};

export const NAV: NavGroup[] = [
  {
    label: "Termékek",
    items: [
      { label: "Standard ékszerek korosztály nélkül", href: "/termekek/standard-ekszerek" },
      { label: "Gyerek ékszerek", href: "/termekek/gyerek-ekszerek" },
      { label: "Baba ékszerek dobozzal együtt", href: "/termekek/baba-ekszerek" },
      { label: "Orr piercingek", href: "/termekek/orr-piercingek" },
      { label: "Kellékek, eszközök", href: "/termekek/kellekek-eszkozok" },
      { label: "Fül- és orrlyukasztó készülék", href: "/termekek/ful-es-orrlyukaszto-keszulek" },
    ],
  },
  {
    label: "Képzés",
    items: [
      { label: "Képzés leírása", href: "/kepzes" },
      { label: "Privát oktatás", href: "/kepzes/privat-oktatas" },
      { label: "Képzés időpontok, helyszínek", href: "/kepzes/idopontok" },
      { label: "Már füllyukasztó szakember vagyok", href: "/kepzes/szakembereknek" },
    ],
  },
  {
    label: "Rólunk",
    items: [
      { label: "Rólunk", href: "/rolunk" },
      { label: "Miért a Lobelle?", href: "/miert-a-lobelle" },
      { label: "Életképek", href: "/eletkepek" },
      { label: "Gyakori kérdések", href: "/gyakori-kerdesek" },
    ],
  },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

/** Jogi oldalak a láblécben.
 *  FIGYELEM: a dokumentumok szövege nem állt rendelkezésre a forrásoldalról,
 *  ezért — a forrásprojekttel egyezően — a kapcsolati oldalra mutatnak.
 *  Amint megvan a végleges ÁSZF / adatkezelési tájékoztató, itt kell átírni. */
export const LEGAL_LINKS: NavLink[] = [
  { label: "ÁSZF", href: "/kapcsolat" },
  { label: "Adatkezelési tájékoztató", href: "/kapcsolat" },
  { label: "Elállási tájékoztató", href: "/kapcsolat" },
];
