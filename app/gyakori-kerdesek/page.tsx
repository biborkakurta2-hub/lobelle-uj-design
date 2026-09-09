import type { Metadata } from "next";
import Link from "next/link";
import Akkordion, { type AkkordionElem } from "@/components/Akkordion";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gyakori kérdések",
  description:
    "Válaszok a leggyakoribb kérdésekre: fáj-e a füllyukasztás, mennyi a gyógyulási idő, mikor lyukasztható a babák füle, miben más a titán, és hogyan foglalhatsz időpontot.",
  alternates: { canonical: "/gyakori-kerdesek" },
  openGraph: {
    title: "Gyakori kérdések | Lobelle",
    description: "Válaszok a füllyukasztással kapcsolatos leggyakoribb kérdésekre.",
  },
};

const GYIK: AkkordionElem[] = [
  {
    kerdes: "Fáj a füllyukasztás?",
    valasz:
      "A Lobelle rendszer rendkívül vékony titánium szárral dolgozik, ezért a lyukasztás alig érezhető — egy rövid, enyhe csípéshez hasonlítható. A professzionális készülék egyetlen gyors mozdulattal végzi el a lyukasztást, így a kellemetlenség a másodperc törtrészéig tart.",
  },
  {
    kerdes: "Mennyi a gyógyulási idő?",
    valasz:
      "Fülcimpa esetén a teljes gyógyulás általában 6–8 hét. A titánium biokompatibilis anyaga a tapasztalatok szerint gyorsabb gyógyulást, kevesebb gyulladást és minimális irritációt jelent más fémekhez képest. A gyógyulás ideje alatt az első ékszert javasolt bent hagyni.",
  },
  {
    kerdes: "Hány éves kortól lyukasztható a babák füle?",
    valasz:
      "A babafül-lyukasztás a kötelező védőoltások beadása után, jellemzően 3–4 hónapos kortól ajánlott — a pontos időzítésről érdemes a gyermekorvossal is egyeztetni. A Lobelle baba ékszerek lekerekített hátsó kapcsa alvás közben sem szúr, a nikkelmentes titán pedig a legérzékenyebb babákbőrnek is biztonságos.",
  },
  {
    kerdes: "Miben más a titán, mint az orvosi fém?",
    valasz:
      "Az „orvosi fém” néven forgalmazott ékszerek többsége sebészeti acél, amely tartalmazhat nikkelt — a leggyakoribb kontakt allergént. Az ASTM F136 szabványú, Grade 23 titán ezzel szemben teljesen nikkelmentes és biokompatibilis: a szervezet sajátjaként fogadja, ezért allergiás reakció gyakorlatilag nem alakul ki.",
  },
  {
    kerdes: "Hogyan ápoljam a friss fül-lyukat?",
    valasz:
      "Naponta kétszer tisztítsd a lyukasztás környékét az utóápoló oldattal, előtte moss kezet. Az ékszert a gyógyulás alatt ne vedd ki, és kerüld a felesleges érintését. Uszoda, szauna és állóvíz az első hetekben kerülendő. A képzéseinken és a vásárláskor részletes utóápolási útmutatót is adunk.",
  },
  {
    kerdes: "Mi a helyzet, ha allergiás vagyok a fémekre?",
    valasz:
      "Pontosan ilyen esetekre való a titán. A fémallergiák túlnyomó többségét a nikkel okozza — a Lobelle ékszerek ezzel szemben teljesen nikkelmentes, implantátum minőségű titánból készülnek, amelyet orvosi implantátumokhoz is használnak. Ismert, súlyos fémallergia esetén javasolt előzetesen bőrgyógyásszal egyeztetni.",
  },
  {
    kerdes: "Van korhatára a füllyukasztásnak?",
    valasz:
      "Felfelé nincs korhatár. 18 év alatt szülői vagy törvényes képviselői beleegyezés szükséges, amelyet írásos hozzájárulási nyilatkozattal rögzítünk — ez a szakembereink munkájának kötelező része. Babáknál a védőoltások beadása után, jellemzően 3–4 hónapos kortól végezhető a lyukasztás.",
  },
  {
    kerdes: "Hogyan foglalhatok időpontot?",
    valasz:
      "Hívj minket a +36 30 483 3814-es telefonszámon, írj a rendeles@lobelle.hu címre, vagy használd a kapcsolatfelvételi űrlapunkat. Képzésre a Képzés időpontok, helyszínek oldalon keresztül tudsz jelentkezni.",
  },
  {
    kerdes: "Elmozdulhat vagy kilazulhat az ékszer a gyógyulás alatt?",
    valasz:
      "A Lobelle ékszerek hátsó kapcsa biztonságosan záródik, ugyanakkor lekerekített kialakítású, így nem nyomja a bőrt és alvás közben sem szúr. Helyes utóápolás mellett az ékszer stabilan a helyén marad a teljes gyógyulási idő alatt.",
  },
  {
    kerdes: "Mit tegyek, ha begyullad a lyukasztás helye?",
    valasz:
      "Enyhe bőrpír az első napokban természetes. Ha a gyulladás erősödik vagy néhány nap után sem múlik, folytasd az utóápoló használatát, az ékszert ne vedd ki — a járat záródása a váladékot bezárhatja —, és fordulj a lyukasztást végző szakemberhez vagy orvoshoz. Regisztrált szakembereink ilyen esetekben is számíthatnak a szakmai támogatásunkra.",
  },
];

/** Keresőknek: strukturált adat a kérdés-válasz párokból. */
const gyikJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GYIK.map((elem) => ({
    "@type": "Question",
    name: elem.kerdes,
    acceptedAnswer: { "@type": "Answer", text: elem.valasz },
  })),
};

export default function GyakoriKerdesekOldal() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gyikJsonLd) }}
      />

      <OldalFejlec cimke="Segítünk eligazodni" cim="Gyakori kérdések">
        Összegyűjtöttük a leggyakrabban felmerülő kérdéseket a füllyukasztásról, a titániumról és
        az utóápolásról. Ha nem találod a választ, keress minket bátran.
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Akkordion elemek={GYIK} />
          </Reveal>

          <Reveal>
            <div className="mt-16 text-center">
              <p className="text-sm text-szilva/75">Nem találtad meg a választ a kérdésedre?</p>
              <Link href="/kapcsolat" className="gomb-elsodleges mt-7">
                Tedd fel nekünk
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
