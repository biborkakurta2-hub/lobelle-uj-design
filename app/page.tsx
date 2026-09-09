import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import KepHelyorzo from "@/components/KepHelyorzo";
import Pont from "@/components/Pont";
import HirlevelUrlap from "@/components/HirlevelUrlap";
import Reveal from "@/components/Reveal";
import SzekcioCim from "@/components/SzekcioCim";
import { KATEGORIAK } from "@/data/products";

export const metadata: Metadata = {
  title: "Lobelle – Az innovatív füllyukasztás új generációja",
  description:
    "Magyarországon egyedülálló, implantátum minőségű titánium fülbelövő rendszerek és füllyukasztó szakemberképzés. ASTM F136 szabvány, Grade 23 titán, nikkelmentes ékszerek.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lobelle – Az innovatív füllyukasztás új generációja",
    description:
      "Implantátum minőségű titánium fülbelövő rendszerek és szakemberképzés. Biztonság, innováció, szakmaiság.",
  },
};

/**
 * A hero képe.
 *
 * Tedd a saját fotódat a `public/` mappába (pl. `public/hero.jpg`), majd írd ide
 * az útvonalát és egy leíró alt szöveget:
 *
 *   const HERO_KEP: string | null = "/hero.jpg";
 *   const HERO_KEP_ALT = "Titánium fülbevaló közelről";
 *
 * Amíg `null`, jelölt képhely látszik a helyén — kitalált vagy készletfotót
 * szándékosan nem teszünk ide.
 */
const HERO_KEP: string | null = null;
const HERO_KEP_ALT = "";

const PILLEREK = [
  {
    cim: "Biztonság",
    szoveg:
      "ASTM F136 szabványú, Grade 23 titán — ugyanaz az anyag, amelyet orvosi implantátumokhoz használnak.",
  },
  {
    cim: "Innováció",
    szoveg:
      "Rendkívül vékony kivitel és lekerekített hátsó kapocs: kíméletes lyukasztás, kényelmes viselet babáknak és felnőtteknek.",
  },
  {
    cim: "Szakmaiság",
    szoveg:
      "Nem csak forgalmazunk — oktatunk is. Képzett szakemberek, valós gyakorlati tudás, folyamatos támogatás.",
  },
];

const TITANIUM_ELONYOK = [
  { cim: "Teljesen nikkelmentes", szoveg: "A leggyakoribb allergén nélkül — érzékeny bőrnek is." },
  { cim: "Biokompatibilis", szoveg: "A szervezet sajátjaként fogadja, nem lép reakcióba a bőrrel." },
  { cim: "Nem oxidálódik", szoveg: "Évek múlva is ugyanolyan, mint az első napon." },
  { cim: "Nem korrodál", szoveg: "Víz, izzadság, kozmetikum — semmi nem árt neki." },
  { cim: "Nem színeződik el", szoveg: "Tartós, elegáns megjelenés kompromisszum nélkül." },
  { cim: "Kíméletes kivitel", szoveg: "Rendkívül vékony szár — a lyukasztás alig érezhető." },
];

const KEPZES_PONTOK = [
  "Elméleti alapozás: anatómia, higiénia, anyagtudomány, jogi háttér",
  "Gyakorlati tréning speciális gyakorlófülön, oktatói felügyelettel",
  "Közel 70 000 Ft értékű kezdőcsomag a képzés részeként",
  "Hivatalos, FAR-regisztrált tanúsítvány",
];

export default function Fooldal() {
  return (
    <>
      {/*
        HERO — visszafogott, a képre épülő nyitány.
        Nincs színátmenetes háttérmosás, nincs dekoratív ív és folt: a fehér
        felület, a kép és a tipográfia viszi. A testvéroldal középre zárt
        heróját itt a kétoszlopos, balra zárt elrendezés váltja.
      */}
      <section>
        <div className="konteiner grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-24">
          {/* Bal oszlop: szöveg */}
          <div>
            <p className="animate-felszallas text-sm text-szilva/70">
              Üdvözlünk a Lobelle oldalán
            </p>

            <h1 className="mt-5 max-w-lg animate-felszallas font-cim text-[2.1rem] font-normal leading-[1.15] text-szilva [animation-delay:120ms] sm:text-[2.9rem]">
              Az innovatív füllyukasztás új generációja
            </h1>

            {/* Az eredeti hármas felirat — csendes, díszítés nélküli sorban */}
            <ul className="mt-7 flex animate-felszallas flex-wrap items-center gap-x-3 gap-y-2 text-sm text-szilva/70 [animation-delay:200ms]">
              {["Biztonság", "Innováció", "Szakmaiság"].map((szo, i) => (
                <li key={szo} className="flex items-center gap-3">
                  {szo}
                  {i < 2 ? (
                    <span
                      aria-hidden="true"
                      className="inline-block h-1 w-1 rounded-full bg-arany"
                    />
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex animate-felszallas flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:300ms]">
              <Link href="/termekek/ful-es-orrlyukaszto-keszulek" className="gomb-elsodleges">
                Fedezd fel a rendszert
              </Link>
              <Link href="/kepzes" className="gomb-szoveg">
                Jelentkezz képzésre <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Jobb oszlop: a hero képe */}
          <div className="animate-felszallas [animation-delay:400ms]">
            {HERO_KEP ? (
              <Image
                src={HERO_KEP}
                alt={HERO_KEP_ALT}
                width={1000}
                height={1250}
                priority
                sizes="(max-width: 1024px) 92vw, 540px"
                className="w-full rounded-2xl object-cover"
              />
            ) : (
              <KepHelyorzo felirat="Hero kép" arany="aspect-[4/5]" className="!rounded-2xl" />
            )}
          </div>
        </div>
      </section>

      {/* A három pillér — kétoszlopos fejléc, lépcsőzetes oszlopokkal */}
      <section className="szekcio konteiner">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <span className="cimke">A márkáról</span>
              <h2 className="mt-6 font-cim text-4xl font-normal leading-[1.1] text-szilva sm:text-5xl">
                Nem csupán rendszer. Szemlélet.
              </h2>
            </div>
            <p className="self-end text-[0.95rem] leading-[1.9] text-szilva/75">
              A Lobelle ott kezdődik, ahol a kompromisszum véget ér. Magyarországon egyedülálló,
              implantátum minőségű titánium fülbelövő rendszereket adunk a szakemberek kezébe — és
              melléjük azt a tudást, amitől a szolgáltatásuk valóban prémium lesz.
            </p>
          </div>
        </Reveal>

        <ul className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-3">
          {PILLEREK.map((pillér, i) => (
            <li key={pillér.cim} className={i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""}>
              <Reveal delay={i * 120}>
                <div className="border-t border-arany/40 pt-7">
                  <h3 className="font-cim text-2xl text-szilva">{pillér.cim}</h3>
                  <p className="mt-4 text-sm leading-[1.85] text-szilva/75">{pillér.szoveg}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Titánium előnyök — oldalra tett cím, mellette kéthasábos lista */}
      <section className="szekcio-lagy">
        <div className="szekcio konteiner grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="cimke">Anyag és technológia</span>
              <h2 className="mt-6 font-cim text-4xl font-normal leading-[1.1] text-szilva sm:text-5xl">
                A titánium ereje
              </h2>
              <div className="hajszal mt-8 !w-24" aria-hidden="true" />
              <p className="mt-8 text-[0.95rem] leading-[1.9] text-szilva/75">
                A titánium jelenleg a világ egyik legbiztonságosabb fémje füllyukasztáshoz. Nem
                véletlen, hogy orvosi implantátumoknál is ezt használják: gyorsabb gyógyulás,
                kevesebb gyulladás, minimális irritáció.
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-x-12 sm:grid-cols-2">
            {TITANIUM_ELONYOK.map((elony, i) => (
              <li
                key={elony.cim}
                className="border-b border-arany/25 py-7 first:pt-0 sm:[&:nth-child(2)]:pt-0"
              >
                <Reveal delay={(i % 2) * 100}>
                  <div className="flex gap-4">
                    <Pont className="mt-2.5" />
                    <div>
                      <h3 className="font-cim text-lg text-szilva">{elony.cim}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-szilva/75">{elony.szoveg}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ASTM F136 kiemelt sáv — melegebb tónus, a szélein a fehérbe halványulva */}
      <section className="szekcio-lagy-meleg">
        <div className="konteiner grid items-center gap-8 py-20 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-16">
          <Reveal>
            <p className="cimke !text-szilva/75">Prémium garancia</p>
            <p className="mt-6 font-cim text-3xl leading-[1.2] text-szilva md:text-[2.6rem]">
              ASTM F136 szabvány <span aria-hidden="true">·</span> Grade 23 implantátum minőségű
              titán
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-arany/50 md:border-l md:pl-16">
              <p className="text-sm leading-[1.9] text-szilva/85">
                Szigorúan ellenőrzött, steril termékek — kompromisszumok nélkül.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Termékkategóriák — balra zárt fejléc, megtört rács */}
      <section className="szekcio konteiner">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="cimke">Kollekció</span>
              <h2 className="mt-6 font-cim text-4xl font-normal leading-[1.1] text-szilva sm:text-5xl">
                Termékkínálat
              </h2>
            </div>
            <p className="max-w-md text-[0.95rem] leading-[1.9] text-szilva/75">
              Minden darab ugyanabból az alapanyagból, ugyanazzal az igényességgel készül — a
              legkisebbeknek szánt első fülbevalótól a professzionális eszközökig.
            </p>
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {KATEGORIAK.map((kategoria, i) => (
            <li key={kategoria.slug}>
              <Reveal delay={(i % 3) * 100} className="h-full">
                <Link href={`/termekek/${kategoria.slug}`} className="group block h-full">
                  <article className="kartya flex h-full flex-col text-center hover:border-arany/50 hover:shadow-csillanas">
                    <h3 className="font-cim text-xl text-szilva">{kategoria.rovidNev}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-szilva/75">
                      {kategoria.leiras}
                    </p>
                    <span className="mt-6 font-cim text-[0.68rem] uppercase tracking-cimke text-szilva/75 transition-colors duration-300 group-hover:text-szilva">
                      Megnézem
                    </span>
                  </article>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mt-16 border-t border-arany/30 pt-12 text-right font-cim text-xl italic text-szilva/70">
            A prémium vendég prémium minőséget vár.
          </p>
        </Reveal>
      </section>

      {/* Képzés teaser */}
      <section className="szekcio-lagy">
        <div className="szekcio konteiner grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SzekcioCim
              igazitas="bal"
              cimke="Oktatás"
              cim="Fül- és orrlyukasztó szakemberképzés"
            >
              Intenzív, gyakorlatorientált képzés 2–3 órában — előképzettség nélkül.
              Kozmetikusoknak és mindazoknak, akik professzionális szolgáltatással bővítenék a
              kínálatukat, és akár másnap dolgozni szeretnének.
            </SzekcioCim>

            <ul className="mt-9 space-y-4 text-sm text-szilva/80">
              {KEPZES_PONTOK.map((pont) => (
                <li key={pont} className="flex gap-3.5">
                  <Pont className="mt-2" />
                  <span className="leading-relaxed">{pont}</span>
                </li>
              ))}
            </ul>

            <div className="mt-11 flex flex-col gap-4 sm:flex-row">
              <Link href="/kepzes" className="gomb-elsodleges">
                Képzés részletei
              </Link>
              <Link href="/kepzes/idopontok" className="gomb-korvonal">
                Időpontok, helyszínek
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            {/* A kártya kilóg a rácsból — szándékos aszimmetria, nem tükörkép */}
            <div className="kartya-meleg relative text-center !p-12 lg:-mr-8 lg:translate-y-6">
              <p className="cimke">Lobelle</p>
              <p className="mx-auto mt-7 max-w-sm font-cim text-2xl leading-snug text-szilva">
                „Ha egyszer titániumot használsz, nem térsz vissza máshoz.”
              </p>
              <div className="hajszal-rovid mt-9" aria-hidden="true" />
              <p className="cimke mt-7">Ahol a profizmus kezdődik</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hírlevél — szűk, zárlat jellegű blokk */}
      <section className="szekcio konteiner">
        <Reveal>
          <div className="mx-auto max-w-xl">
            <div className="hajszal" aria-hidden="true" />
            <span className="cimke mt-12 block">Hírlevél</span>
            <h2 className="mt-5 font-cim text-3xl font-normal leading-[1.15] text-szilva sm:text-4xl">
              Maradjunk kapcsolatban
            </h2>
            <p className="mt-6 text-[0.95rem] leading-[1.9] text-szilva/75">
              Iratkozz fel, hogy elsőként értesülj az új kollekciókról, képzési időpontokról és
              szakmai újdonságokról.
            </p>
            <div className="mt-10">
              <HirlevelUrlap />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
