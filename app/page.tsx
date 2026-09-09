import type { Metadata } from "next";
import Link from "next/link";
import Csillanas, { CsillanasMezo } from "@/components/Csillanas";
import HirlevelUrlap from "@/components/HirlevelUrlap";
import Logo from "@/components/Logo";
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
        HERO — ez az EGYETLEN feltűnő eltérés a testvéroldaltól.
        A Szépítész Műhely hero-ja szigorúan középre zárt; ez itt szándékosan
        aszimmetrikus: balra a szövegoszlop, jobbra a függőlegesen eltolt
        logófelület. Lásd STYLE-ANALYSIS.md 7/f.
      */}
      <section className="relative overflow-hidden bg-femes-lagy">
        <CsillanasMezo />
        {/* Nagy, halvány arany ív a háttérben — visszatérő díszítés */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[18rem] top-[-14rem] h-[46rem] w-[46rem] rounded-full border border-arany/25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-[-16rem] h-[34rem] w-[34rem] rounded-full bg-barackpir/40 blur-3xl"
        />

        <div className="konteiner relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-32">
          {/* Bal oszlop: szöveg, balra zárva */}
          <div className="text-left">
            <p className="flex animate-felszallas items-center gap-2.5">
              <Csillanas className="h-3 w-3 text-arany" />
              <span className="cimke">Üdvözlünk a Lobelle oldalán</span>
            </p>

            <h1 className="mt-7 max-w-xl animate-felszallas font-cim text-[2.6rem] font-normal leading-[1.1] text-szilva [animation-delay:120ms] sm:text-6xl">
              Az innovatív füllyukasztás új generációja
            </h1>

            <div className="mt-9 h-px w-40 animate-felszallas bg-hajszal-arany [animation-delay:200ms]" aria-hidden="true" />

            <ul className="mt-8 flex animate-felszallas flex-wrap items-center gap-x-5 gap-y-3 [animation-delay:280ms]">
              {["Biztonság", "Innováció", "Szakmaiság"].map((szo, i) => (
                <li key={szo} className="flex items-center gap-5">
                  <span className="cimke !text-[0.68rem] !text-szilva/70">{szo}</span>
                  {i < 2 ? <Csillanas className="h-2.5 w-2.5 text-arany" /> : null}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex animate-felszallas flex-col gap-4 [animation-delay:360ms] sm:flex-row">
              <Link href="/termekek/ful-es-orrlyukaszto-keszulek" className="gomb-elsodleges">
                Fedezd fel a rendszert
              </Link>
              <Link href="/kepzes" className="gomb-korvonal">
                Jelentkezz képzésre
              </Link>
            </div>
          </div>

          {/* Jobb oszlop: eltolt logófelület — az aszimmetria hordozója */}
          <div className="relative animate-felszallas [animation-delay:440ms] lg:translate-y-10">
            <div className="relative mx-auto max-w-md rounded-nagy border border-arany/30 bg-white/70 p-12 shadow-csillanas backdrop-blur-sm sm:p-16">
              <Logo
                valtozat="teljes"
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="h-auto w-full"
              />
              <div className="hajszal-rovid mt-10" aria-hidden="true" />
              <p className="mt-7 text-center font-cim text-lg italic leading-snug text-szilva/80">
                „Ha egyszer titániumot használsz, nem térsz vissza máshoz.”
              </p>
            </div>

            {/* Kilógó csillanások: megtörik a kártya szabályos formáját */}
            <Csillanas
              lukteto
              className="absolute -left-4 top-10 h-9 w-9 text-arany/70 sm:-left-8 sm:h-12 sm:w-12"
            />
            <Csillanas
              lukteto
              className="absolute -bottom-5 right-6 h-6 w-6 text-malyva/60 sm:-bottom-8 sm:right-12 sm:h-8 sm:w-8"
            />
          </div>
        </div>
      </section>

      {/* A három pillér */}
      <section className="szekcio konteiner">
        <Reveal>
          <SzekcioCim cimke="A márkáról" cim="Nem csupán rendszer. Szemlélet.">
            A Lobelle ott kezdődik, ahol a kompromisszum véget ér. Magyarországon egyedülálló,
            implantátum minőségű titánium fülbelövő rendszereket adunk a szakemberek kezébe — és
            melléjük azt a tudást, amitől a szolgáltatásuk valóban prémium lesz.
          </SzekcioCim>
        </Reveal>

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLEREK.map((pillér, i) => (
            <li key={pillér.cim}>
              <Reveal delay={i * 120} className="h-full">
                <article className="kartya-meleg h-full text-center">
                  <Csillanas className="mx-auto h-4 w-4 text-arany" />
                  <h3 className="mt-5 font-cim text-2xl text-szilva">{pillér.cim}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-szilva/80">{pillér.szoveg}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Titánium előnyök — meleg, púderes szekció */}
      <section className="bg-puder">
        <div className="szekcio konteiner">
          <Reveal>
            <SzekcioCim cimke="Anyag és technológia" cim="A titánium ereje">
              A titánium jelenleg a világ egyik legbiztonságosabb fémje füllyukasztáshoz. Nem
              véletlen, hogy orvosi implantátumoknál is ezt használják: gyorsabb gyógyulás,
              kevesebb gyulladás, minimális irritáció.
            </SzekcioCim>
          </Reveal>

          <ul className="mt-16 grid gap-x-12 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {TITANIUM_ELONYOK.map((elony, i) => (
              <li key={elony.cim}>
                <Reveal delay={(i % 3) * 100}>
                  <div className="flex gap-4">
                    <Csillanas className="mt-1.5 h-3 w-3 shrink-0 text-arany" />
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

      {/* ASTM F136 kiemelt sáv — barackpír felület a testvéroldal sötét tömbje helyett */}
      <section className="relative overflow-hidden bg-barackpir">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[20rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-arany/40"
        />
        <div className="konteiner relative py-20 text-center">
          <Reveal>
            <p className="cimke !text-szilva/70">Prémium garancia</p>
            <p className="mx-auto mt-6 max-w-2xl font-cim text-2xl leading-snug text-szilva md:text-3xl">
              ASTM F136 szabvány <span aria-hidden="true">·</span> Grade 23 implantátum minőségű
              titán
            </p>
            <div className="hajszal-rovid mt-8" aria-hidden="true" />
            <p className="mt-6 text-sm text-szilva/80">
              Szigorúan ellenőrzött, steril termékek — kompromisszumok nélkül.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Termékkategóriák */}
      <section className="szekcio konteiner">
        <Reveal>
          <SzekcioCim cimke="Kollekció" cim="Termékkínálat">
            Minden darab ugyanabból az alapanyagból, ugyanazzal az igényességgel készül — a
            legkisebbeknek szánt első fülbevalótól a professzionális eszközökig.
          </SzekcioCim>
        </Reveal>

        <ul className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {KATEGORIAK.map((kategoria, i) => (
            <li key={kategoria.slug}>
              <Reveal delay={(i % 3) * 100} className="h-full">
                <Link href={`/termekek/${kategoria.slug}`} className="group block h-full">
                  <article className="kartya flex h-full flex-col text-center hover:border-arany/50 hover:shadow-csillanas">
                    <Csillanas className="mx-auto h-3.5 w-3.5 text-arany" />
                    <h3 className="mt-4 font-cim text-xl text-szilva transition-colors duration-300 group-hover:text-szilva">
                      {kategoria.rovidNev}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-szilva/70">
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
          <p className="mt-16 text-center font-cim text-lg italic text-szilva/70">
            A prémium vendég prémium minőséget vár.
          </p>
        </Reveal>
      </section>

      {/* Képzés teaser */}
      <section className="bg-puder">
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
                  <Csillanas className="mt-1 h-3 w-3 shrink-0 text-arany" />
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
            <div className="kartya-meleg relative text-center !p-12">
              <Csillanas lukteto className="absolute -right-3 -top-3 h-8 w-8 text-arany/70" />
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

      {/* Hírlevél */}
      <section className="szekcio konteiner text-center">
        <Reveal>
          <SzekcioCim cimke="Hírlevél" cim="Maradjunk kapcsolatban">
            Iratkozz fel, hogy elsőként értesülj az új kollekciókról, képzési időpontokról és
            szakmai újdonságokról.
          </SzekcioCim>
          <div className="mt-12">
            <HirlevelUrlap />
          </div>
        </Reveal>
      </section>
    </>
  );
}
