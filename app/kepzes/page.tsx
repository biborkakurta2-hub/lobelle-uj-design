import type { Metadata } from "next";
import Link from "next/link";
import Pont from "@/components/Pont";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";
import SzekcioCim from "@/components/SzekcioCim";
import { FAR_NUMBER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fül- és orrlyukasztó szakemberképzés",
  description:
    "Intenzív, gyakorlatorientált fül- és orrlyukasztó képzés 2–3 órában, előképzettség nélkül. Közel 70 000 Ft értékű kezdőcsomag, hivatalos FAR-regisztrált tanúsítvány (B/2021/000190).",
  alternates: { canonical: "/kepzes" },
  openGraph: {
    title: "Fül- és orrlyukasztó szakemberképzés | Lobelle",
    description:
      "Gyakorlatorientált képzés kezdőcsomaggal és FAR-regisztrált tanúsítvánnyal — akár másnap dolgozhatsz.",
  },
};

const ELMELET = [
  { cim: "Anatómia", szoveg: "Idegek, erek, porcszövetek — hol szabad és hol tilos szúrni." },
  { cim: "Higiénia", szoveg: "Aszeptikus munkaterület, keresztfertőzések megelőzése." },
  { cim: "Anyagtudomány", szoveg: "Tű vs. készülék; titán, orvosi fém, arany különbségei." },
  { cim: "Jogi háttér", szoveg: "Beleegyező nyilatkozatok, korhatárok, felelősség." },
];

const GYAKORLAT = [
  { cim: "Jelölés", szoveg: "A tökéletes szimmetria megtervezése." },
  { cim: "Szúrási gyakorlat", szoveg: "Speciális gyakorlófülön, oktatói felügyelettel." },
  { cim: "Ékszerválasztás", szoveg: "Megfelelő anyag és méret minden vendéghez." },
  { cim: "Utóápolás", szoveg: "Teendők gyulladás vagy allergia esetén." },
];

const KEZDOCSOMAG = [
  "Prémium füllyukasztó eszköz",
  "Prémium orrlyukasztó eszköz",
  "Utóápoló",
  "Speciális eltávolító csipeszek",
  "Sebészeti jelölőtoll",
  "Gyakorló ékszerek",
  "Hordtáska és tükör",
  "Termékkatalógus",
  "Hozzájárulási nyilatkozat",
];

const CELKOZONSEG = [
  {
    cim: "Kozmetikusoknak",
    szoveg:
      "Meglévő vendégkörödnek kínálhatsz új, keresett szolgáltatást — a képzés után akár másnap.",
  },
  {
    cim: "Szépségipari szakembereknek",
    szoveg:
      "Fodrászként, műkörmösként vagy sminkesként is bővítheted a kínálatodat professzionális füllyukasztással.",
  },
  {
    cim: "Pályakezdőknek",
    szoveg:
      "Előképzettség nélkül is elsajátíthatod a szakmát — az elméleti és gyakorlati alapokat tőlünk kapod meg.",
  },
  {
    cim: "Szakmaváltóknak",
    szoveg:
      "Saját szolgáltatást indítanál? A kezdőcsomaggal és a tanúsítvánnyal minden eszközöd megvan az induláshoz.",
  },
];

/** Elmélet/gyakorlat lista — mindkét oszlop ugyanazt a formát használja. */
function TematikaLista({ elemek }: { elemek: { cim: string; szoveg: string }[] }) {
  return (
    <ul className="mt-9 space-y-7">
      {elemek.map((elem) => (
        <li key={elem.cim} className="flex gap-4">
          <Pont className="mt-2.5" />
          <div>
            <h3 className="font-cim text-lg text-szilva">{elem.cim}</h3>
            <p className="mt-2 text-sm leading-relaxed text-szilva/75">{elem.szoveg}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function KepzesOldal() {
  return (
    <>
      <OldalFejlec cimke="Oktatás" cim="Fül- és orrlyukasztó szakemberképzés">
        Intenzív, gyakorlatorientált képzés 2–3 órában — előképzettség nélkül. Kozmetikusoknak és
        mindazoknak, akik professzionális szolgáltatással bővítenék a kínálatukat, és akár másnap
        dolgozni szeretnének.
      </OldalFejlec>

      {/* Elmélet + gyakorlat */}
      <section className="szekcio-szuk konteiner">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SzekcioCim igazitas="bal" cimke="Első rész" cim="Elméleti alapozás" />
            <TematikaLista elemek={ELMELET} />
          </Reveal>
          <Reveal delay={120}>
            <SzekcioCim igazitas="bal" cimke="Második rész" cim="Gyakorlati tréning" />
            <TematikaLista elemek={GYAKORLAT} />
          </Reveal>
        </div>
      </section>

      {/* Kezdőcsomag */}
      <section className="szekcio-lagy">
        <div className="szekcio-szuk konteiner">
          <Reveal>
            <SzekcioCim cimke="A képzés része" cim="Közel 70 000 Ft értékű kezdőcsomag">
              Nem csak tudást kapsz, hanem mindent, amivel már a képzés másnapján fogadhatod az
              első vendégeidet.
            </SzekcioCim>
          </Reveal>
          <Reveal delay={120}>
            <ul className="kartya-meleg mx-auto mt-14 grid max-w-3xl gap-x-10 gap-y-4 text-sm text-szilva sm:grid-cols-2 !p-10">
              {KEZDOCSOMAG.map((elem) => (
                <li key={elem} className="flex gap-3.5">
                  <Pont className="mt-2" />
                  {elem}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAR-tanúsítvány */}
      <section className="szekcio-lagy-meleg">
        <div className="konteiner py-20 text-center">
          <Reveal>
            <p className="cimke !text-szilva/70">Hivatalos tanúsítvány</p>
            <p className="mx-auto mt-6 max-w-2xl font-cim text-2xl leading-snug text-szilva md:text-3xl">
              A képzés hivatalos, FAR-regisztrált tanúsítvánnyal zárul.
            </p>
            <div className="hajszal-rovid mt-8" aria-hidden="true" />
            <p className="cimke mt-6 !text-szilva/80">
              Felnőttképzési nyilvántartási szám: {FAR_NUMBER}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kinek ajánljuk */}
      <section className="szekcio-szuk konteiner">
        <Reveal>
          <SzekcioCim cimke="Célközönség" cim="Kinek ajánljuk?" />
        </Reveal>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {CELKOZONSEG.map((elem, i) => (
            <li key={elem.cim} className={i % 2 === 1 ? "sm:mt-14" : ""}>
              <Reveal delay={(i % 2) * 120} className="h-full">
                <article className="kartya h-full">
                  <h3 className="font-cim text-xl text-szilva">{elem.cim}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-szilva/75">{elem.szoveg}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-20 border-t border-arany/30 pt-14 text-center">
            <p className="font-cim text-2xl text-szilva">Kezdd el még ebben a hónapban.</p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-szilva/75">
              Nézd meg az aktuális időpontokat és helyszíneket, vagy kérdezz tőlünk bátran — a
              képzésekkel kapcsolatban is szívesen segítünk.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/kepzes/idopontok" className="gomb-elsodleges">
                Jelentkezem a képzésre
              </Link>
              <Link href="/kepzes/privat-oktatas" className="gomb-korvonal">
                Inkább privát oktatást kérek
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
