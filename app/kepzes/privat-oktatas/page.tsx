import type { Metadata } from "next";
import ErdeklodesUrlap from "@/components/ErdeklodesUrlap";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";
import SzekcioCim from "@/components/SzekcioCim";

export const metadata: Metadata = {
  title: "Privát oktatás",
  description:
    "Egyéni fül- és orrlyukasztó képzés a saját tempódban, hozzád igazított időpontban. Teljes figyelem, gyakorlatorientált tematika, FAR-regisztrált tanúsítvány.",
  alternates: { canonical: "/kepzes/privat-oktatas" },
  openGraph: {
    title: "Privát oktatás | Lobelle",
    description: "Egyéni füllyukasztó képzés a saját tempódban, hozzád igazított időpontban.",
  },
};

const ELONYOK = [
  {
    cim: "Teljes oktatói figyelem",
    szoveg:
      "Az oktató csak veled foglalkozik — minden kérdésedre azonnal választ kapsz, és annyi gyakorlási lehetőséged van, amennyire szükséged van.",
  },
  {
    cim: "Hozzád igazított időpont",
    szoveg:
      "Nem kell csoportos időponthoz alkalmazkodnod: a képzés napját és időpontját közösen egyeztetjük.",
  },
  {
    cim: "Saját tempó",
    szoveg:
      "Ott időzünk el, ahol neked fontos — legyen az a jelölés precizitása, a babák füllyukasztása vagy az utóápolási tanácsadás.",
  },
  {
    cim: "Ugyanaz a teljes csomag",
    szoveg:
      "A privát képzés is a közel 70 000 Ft értékű kezdőcsomaggal és hivatalos, FAR-regisztrált tanúsítvánnyal zárul.",
  },
];

export default function PrivatOktatasOldal() {
  return (
    <>
      <OldalFejlec cimke="Oktatás" cim="Privát oktatás">
        Egyéni képzés azoknak, akik a csoportos időpontok helyett a saját tempójukban, teljes
        oktatói figyelem mellett sajátítanák el a professzionális fül- és orrlyukasztást.
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        <Reveal>
          <SzekcioCim cimke="Előnyök" cim="Miért érdemes privát képzést választanod?" />
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
              <SzekcioCim cimke="Érdeklődés" cim="Kérj egyéni időpontot">
                Írd meg, mikor érnél rá, és milyen előzetes tapasztalattal rendelkezel — minden
                mást mi intézünk.
              </SzekcioCim>
              <div className="mt-12">
                <ErdeklodesUrlap
                  azonosito="privat"
                  urlapNev="Privát oktatás érdeklődés"
                  uzenetCimke="Mikor érnél rá, és mit szeretnél tanulni?"
                  gombFelirat="Érdeklődés elküldése"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
