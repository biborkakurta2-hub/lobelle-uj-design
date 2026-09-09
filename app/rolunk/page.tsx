import type { Metadata } from "next";
import Link from "next/link";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";
import SzekcioCim from "@/components/SzekcioCim";

export const metadata: Metadata = {
  title: "Rólunk",
  description:
    "A Lobelle Magyarországon egyedülálló, implantátum minőségű titánium fülbelövő rendszereket ad a szakemberek kezébe — és melléjük a tudást, amitől a szolgáltatásuk valóban prémium lesz.",
  alternates: { canonical: "/rolunk" },
  openGraph: {
    title: "Rólunk | Lobelle",
    description: "Nem csupán rendszer. Szemlélet. Ismerd meg a Lobelle márkát.",
  },
};

const BEKEZDESEK = [
  "Magyarországon egyedülálló, implantátum minőségű titánium fülbelövő rendszereket adunk a szakemberek kezébe — és melléjük azt a tudást, amitől a szolgáltatásuk valóban prémium lesz. Nálunk a prémium alapanyag, a tudatos választás és a szakmai háttér egy helyen találkozik.",
  "Az alapanyagban nem ismerünk kompromisszumot: minden ékszerünk ASTM F136 szabványú, Grade 23 titánból készül — ugyanabból az anyagból, amelyet orvosi implantátumokhoz használnak. Teljesen nikkelmentes, biokompatibilis, nem oxidálódik és nem színeződik el, ezért a legkisebbeknek is biztonsággal ajánljuk.",
  "De a Lobelle nem áll meg a terméknél. Nem csak forgalmazunk — oktatunk is: gyakorlatorientált szakemberképzésünkön kozmetikusok és szakmaváltók sajátítják el a professzionális fül- és orrlyukasztást, hivatalos, FAR-regisztrált tanúsítvánnyal. A képzés után sem engedjük el a kezüket: folyamatos szakmai támogatást és kedvezményes vásárlási lehetőséget kapnak.",
  "Küldetésünk egyszerű: hogy Magyarországon a füllyukasztás ne rutinmunka legyen, hanem prémium szolgáltatás — biztonságos anyagokkal, képzett szakemberekkel és olyan odafigyeléssel, amit minden vendég megérdemel.",
];

export default function RolunkOldal() {
  return (
    <>
      <OldalFejlec cimke="A márkáról" cim="Nem csupán rendszer. Szemlélet.">
        A Lobelle ott kezdődik, ahol a kompromisszum véget ér.
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-7 text-[0.95rem] leading-[1.9] text-szilva/80">
            {BEKEZDESEK.map((bekezdes) => (
              <p key={bekezdes.slice(0, 40)}>{bekezdes}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="kartya-meleg relative mx-auto mt-16 max-w-3xl text-center !p-12">
            <p className="mx-auto max-w-md font-cim text-2xl leading-snug text-szilva">
              „Ha egyszer titániumot használsz, nem térsz vissza máshoz.”
            </p>
            <div className="hajszal-rovid mt-8" aria-hidden="true" />
            <p className="cimke mt-6">Lobelle — ahol a profizmus kezdődik</p>
          </div>
        </Reveal>
      </section>

      <section className="szekcio-lagy">
        <div className="szekcio-szuk konteiner text-center">
          <Reveal>
            <SzekcioCim cimke="Ismerj meg minket közelebbről" cim="Így dolgozunk">
              Nézd meg a négy pillérünket, vagy böngéssz az életképeink között.
            </SzekcioCim>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/miert-a-lobelle" className="gomb-elsodleges">
                Miért a Lobelle?
              </Link>
              <Link href="/eletkepek" className="gomb-korvonal">
                Életképek
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
