import type { Metadata } from "next";
import KepHelyorzo from "@/components/KepHelyorzo";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Életképek",
  description:
    "Pillanatok a Lobelle képzésekről, a műhelyünkből és a mindennapjainkból — így dolgozunk mi.",
  alternates: { canonical: "/eletkepek" },
  openGraph: {
    title: "Életképek | Lobelle",
    description: "Pillanatok a Lobelle képzésekről és a mindennapjainkból.",
  },
};

/*
 * ⚠️ A valós fotók nem álltak rendelkezésre (a lobelle.hu nem volt elérhető),
 *    ezért itt csak a képaláírások szerepelnek, jelölt helyőrzőkkel.
 *    Kitalált vagy készletfotót szándékosan nem teszünk be.
 *
 *    Feltöltéskor: tedd a fotókat a `public/eletkepek/` mappába, és cseréld a
 *    `KepHelyorzo` komponenst `next/image`-re.
 */
const GALERIA = [
  "Képzés közben",
  "Gyakorlati tréning",
  "A kezdőcsomag",
  "Titánium kollekció",
  "Babafül lyukasztás",
  "A készülék közelről",
  "Oktatónk munka közben",
  "Elégedett vendég",
  "Díszdobozos baba szett",
  "Műhelypillanat",
  "Tanúsítvány átadás",
  "A Lobelle csapat",
];

export default function EletkepekOldal() {
  return (
    <>
      <OldalFejlec cimke="Galéria" cim="Életképek">
        Pillanatok a képzésekről, a műhelyünkből és a mindennapjainkból — mert a szakmaiság
        képeken is látszik.
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {GALERIA.map((felirat, i) => (
            <li key={felirat}>
              <Reveal delay={(i % 3) * 100}>
                <figure>
                  <KepHelyorzo felirat={felirat} arany="aspect-[4/3]" />
                  <figcaption className="cimke mt-5 text-center">{felirat}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
