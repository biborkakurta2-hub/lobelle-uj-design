import type { Metadata } from "next";
import ErdeklodesUrlap from "@/components/ErdeklodesUrlap";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";
import SzekcioCim from "@/components/SzekcioCim";

export const metadata: Metadata = {
  title: "Már füllyukasztó szakember vagyok",
  description:
    "Szakmai regisztráció gyakorló füllyukasztó szakembereknek: kedvezményes vásárlás, elsőbbségi értesítés az újdonságokról és folyamatos szakmai támogatás a Lobelle-től.",
  alternates: { canonical: "/kepzes/szakembereknek" },
  openGraph: {
    title: "Már füllyukasztó szakember vagyok | Lobelle",
    description:
      "Szakmai regisztráció: kedvezményes vásárlás és folyamatos támogatás szakembereknek.",
  },
};

const ELONYOK = [
  {
    cim: "Kedvezményes vásárlás",
    szoveg:
      "A Lobelle tanfolyam elvégzése után minden termékünket kedvezményes szakmai áron vásárolhatod meg — ékszereket, készülékeket és kellékeket egyaránt.",
  },
  {
    cim: "Elsőbbségi értesítés",
    szoveg:
      "Elsőként értesülsz az új kollekciókról és a készletre érkező termékekről, így a vendégeidnek mindig a legfrissebb kínálatot mutathatod.",
  },
  {
    cim: "Folyamatos szakmai támogatás",
    szoveg:
      "Elakadtál egy esetnél, vagy tanácsra van szükséged? Regisztrált szakemberként közvetlen szakmai támogatást kapsz tőlünk.",
  },
  {
    cim: "Átállás titániumra",
    szoveg:
      "Ha eddig más rendszerrel dolgoztál, segítünk az átállásban — eszközválasztásban, technikában és a vendégkommunikációban is.",
  },
];

export default function SzakembereknekOldal() {
  return (
    <>
      <OldalFejlec cimke="Szakembereknek" cim="Már füllyukasztó szakember vagyok">
        Gyakorló szakemberként is van helyed a Lobelle-nél: regisztrálj, és dolgozz Magyarországon
        egyedülálló, implantátum minőségű titánium rendszerrel — kedvezményes feltételekkel.
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        <Reveal>
          <SzekcioCim cimke="Előnyök" cim="Mit kapsz a szakmai regisztrációval?" />
        </Reveal>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {ELONYOK.map((elony, i) => (
            <li key={elony.cim}>
              <Reveal delay={(i % 2) * 120} className="h-full">
                <article className="kartya h-full">
                  <h3 className="font-cim text-xl text-szilva">{elony.cim}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-szilva/75">{elony.szoveg}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-puder">
        <div className="szekcio-szuk konteiner">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <SzekcioCim cimke="Regisztráció" cim="Regisztrálj szakemberként">
                Írd meg, mióta és milyen rendszerrel dolgozol — felvesszük veled a kapcsolatot a
                szakmai feltételekkel.
              </SzekcioCim>
              <div className="mt-12">
                <ErdeklodesUrlap
                  azonosito="szakember"
                  urlapNev="Szakmai regisztráció"
                  uzenetCimke="Mióta dolgozol füllyukasztóként, milyen rendszert használsz?"
                  gombFelirat="Regisztrációs igény elküldése"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
