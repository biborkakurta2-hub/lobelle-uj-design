import type { Metadata } from "next";
import Link from "next/link";
import Csillanas from "@/components/Csillanas";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Miért a Lobelle?",
  description:
    "A Lobelle négy pillére: ultra-hipoallergén titán, oktatói háttér, prémium garancia és személyes figyelem. A minőség nem luxus, a biztonság nem opció.",
  alternates: { canonical: "/miert-a-lobelle" },
  openGraph: {
    title: "Miért a Lobelle? | Lobelle",
    description:
      "Négy pillér: ultra-hipoallergén titán, oktatói háttér, prémium garancia, személyes figyelem.",
  },
};

const PILLEREK = [
  {
    szam: "01",
    cim: "Ultra-hipoallergén",
    szoveg:
      "Implantátum minőségű titán, teljesen nikkelmentesen. A legbiztonságosabb választás — a legkisebbeknek is.",
  },
  {
    szam: "02",
    cim: "Oktatói háttér",
    szoveg:
      "Nem csak forgalmazunk, értünk is hozzá. Tapasztalt oktatók kísérnek az első lépésektől a profi szintig.",
  },
  {
    szam: "03",
    cim: "Prémium garancia",
    szoveg:
      "Szigorúan ellenőrzött, steril termékek, ASTM F136 szabvány szerint. Minőség, kompromisszumok nélkül.",
  },
  {
    szam: "04",
    cim: "Személyes figyelem",
    szoveg:
      "Legyen szó kezdő szettről vagy szakmai váltásról — minden lépésnél számíthatsz ránk.",
  },
];

export default function MiertALobelleOldal() {
  return (
    <>
      <OldalFejlec cimke="Négy pillér" cim="Miért a Lobelle?">
        Négy elv, amelyből soha nem engedünk — bármit is hoz a divat vagy a piac.
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        <ol className="mx-auto max-w-4xl">
          {PILLEREK.map((pillér, i) => (
            <li key={pillér.szam}>
              <Reveal delay={i * 80}>
                <div className="grid gap-6 border-t border-arany/30 py-14 last:border-b sm:grid-cols-[8rem_1fr] sm:gap-10">
                  <span
                    className="font-cim text-5xl font-normal text-arany sm:text-6xl"
                    aria-hidden="true"
                  >
                    {pillér.szam}
                  </span>
                  <div>
                    <h2 className="font-cim text-2xl text-szilva md:text-3xl">{pillér.cim}</h2>
                    <p className="mt-5 max-w-xl text-[0.95rem] leading-[1.85] text-szilva/75">
                      {pillér.szoveg}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Záró idézet */}
      <section className="relative overflow-hidden bg-puder">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-arany/25"
        />
        <div className="szekcio konteiner relative text-center">
          <Reveal>
            <Csillanas lukteto className="mx-auto h-6 w-6 text-arany" />
            <blockquote className="mx-auto mt-9 max-w-2xl font-cim text-2xl leading-[1.4] text-szilva md:text-4xl">
              „A minőség nem luxus. A biztonság nem opció.
              <br className="hidden md:block" /> A szakmaiság nem kompromisszum kérdése.”
            </blockquote>
            <div className="hajszal-rovid mt-11" aria-hidden="true" />
            <p className="cimke mt-7">Lobelle — ahol a profizmus kezdődik</p>
            <Link href="/kepzes" className="gomb-elsodleges mt-12">
              Csatlakozz hozzánk
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
