import type { Metadata } from "next";
import Link from "next/link";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";
import { ADDRESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Képzés időpontok, helyszínek",
  description:
    "A Lobelle fül- és orrlyukasztó szakemberképzés aktuális időpontjai és helyszínei. Jelentkezz a hozzád legközelebbi képzésre.",
  alternates: { canonical: "/kepzes/idopontok" },
  openGraph: {
    title: "Képzés időpontok, helyszínek | Lobelle",
    description: "Aktuális képzési időpontok és helyszínek — jelentkezz a hozzád legközelebbire.",
  },
};

/*
 * ⚠️ HELYŐRZŐ IDŐPONTOK — a valós képzési naptárra cserélendők.
 *
 * A forrásprojekt is helyőrzőként jelöli ezeket: konkrét dátum nem szerepel
 * bennük, mert a valós naptár nem állt rendelkezésre. Kitalált dátumot
 * szándékosan nem írunk ide. Az egyetlen valós adat a debreceni helyszín címe.
 * Frissítéshez elég ezt a tömböt átírni.
 */
const IDOPONTOK = [
  {
    varos: "Debrecen",
    helyszin: `Lobelle képzési központ — ${ADDRESS}`,
    datum: "Időpont egyeztetés alatt",
    kezdes: "Délelőtti kezdés",
    letszam: "Korlátozott létszám",
  },
  {
    varos: "Budapest",
    helyszin: "Helyszín egyeztetés alatt",
    datum: "Időpont egyeztetés alatt",
    kezdes: "Délelőtti kezdés",
    letszam: "Korlátozott létszám",
  },
  {
    varos: "Szeged",
    helyszin: "Helyszín egyeztetés alatt",
    datum: "Időpont egyeztetés alatt",
    kezdes: "Délutáni kezdés",
    letszam: "Korlátozott létszám",
  },
  {
    varos: "Győr",
    helyszin: "Helyszín egyeztetés alatt",
    datum: "Időpont egyeztetés alatt",
    kezdes: "Délutáni kezdés",
    letszam: "Korlátozott létszám",
  },
];

export default function IdopontokOldal() {
  return (
    <>
      <OldalFejlec cimke="Oktatás" cim="Képzés időpontok, helyszínek">
        Válaszd ki a hozzád legközelebbi helyszínt és a neked megfelelő időpontot. A képzés 2–3
        órás, és a kezdőcsomagot a helyszínen kapod meg.
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        <ul className="grid gap-7 md:grid-cols-2">
          {IDOPONTOK.map((idopont, i) => (
            <li key={idopont.varos}>
              <Reveal delay={(i % 2) * 120} className="h-full">
                <article className="kartya-meleg flex h-full flex-col">
                  <p className="flex items-center gap-2.5">
                    <span className="cimke">Helyszín</span>
                  </p>
                  <h2 className="mt-3 font-cim text-2xl text-szilva">{idopont.varos}</h2>

                  <dl className="mt-6 space-y-3.5 text-sm">
                    <div className="flex gap-4">
                      <dt className="w-20 shrink-0 text-szilva/75">Cím</dt>
                      <dd className="text-szilva/85">{idopont.helyszin}</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-20 shrink-0 text-szilva/75">Dátum</dt>
                      <dd className="text-szilva/85">{idopont.datum}</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-20 shrink-0 text-szilva/75">Kezdés</dt>
                      <dd className="text-szilva/85">{idopont.kezdes}</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-20 shrink-0 text-szilva/75">Létszám</dt>
                      <dd className="text-szilva/85">{idopont.letszam}</dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-8">
                    <Link
                      href={`/kapcsolat?targy=${encodeURIComponent(`Képzés jelentkezés – ${idopont.varos}`)}`}
                      className="gomb-elsodleges w-full"
                    >
                      Jelentkezem
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-20 border-t border-arany/30 pt-12 text-center">
            <p className="text-sm text-szilva/75">
              Nem találsz megfelelő időpontot, vagy a saját városodba szerveznél képzést?
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/kepzes/privat-oktatas" className="gomb-elsodleges">
                Privát oktatást kérek
              </Link>
              <Link href="/kapcsolat" className="gomb-korvonal">
                Írok nektek
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
