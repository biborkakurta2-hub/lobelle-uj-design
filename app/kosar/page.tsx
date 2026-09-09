import type { Metadata } from "next";
import Link from "next/link";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kosár",
  description:
    "A kosár tartalma és megrendelés. Implantátum minőségű titánium ékszerek és professzionális füllyukasztó eszközök a Lobelle kínálatából.",
  alternates: { canonical: "/kosar" },
  openGraph: {
    title: "Kosár | Lobelle",
    description: "A kosár tartalma és megrendelés.",
  },
};

/*
 * ⚠️ A webshop termékadatai nem álltak rendelkezésre (lásd data/products.ts),
 *    ezért a kosár egyelőre nem tud tételeket tartalmazni. Az oldal ezt
 *    őszintén jelzi, és a rendelést a meglévő elérhetőségekre tereli —
 *    kitalált termék, ár vagy fizetési folyamat nem szerepel rajta.
 */
export default function KosarOldal() {
  return (
    <>
      <OldalFejlec cimke="Webshop" cim="Kosár">
        Nézd át a kiválasztott darabokat, majd add meg a szállítási adatokat a megrendeléshez.
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        <Reveal>
          <div className="kartya-meleg mx-auto max-w-2xl text-center">
            <p className="cimke mt-5">A kosár üres</p>
            <p className="mt-5 font-cim text-2xl leading-snug text-szilva">
              A webshop feltöltése folyamatban van.
            </p>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-szilva/75">
              Amíg a webshop feltöltése tart, telefonon és emailben is szívesen adunk tájékoztatást
              a kínálatról, az árakról és a szállításról.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 text-sm text-szilva/85">
              <a href={PHONE_HREF} className="transition-colors duration-300 hover:text-szilva">
                {PHONE}
              </a>
              <a href={EMAIL_HREF} className="transition-colors duration-300 hover:text-szilva">
                {EMAIL}
              </a>
            </div>

            <Link href="/termekek/standard-ekszerek" className="gomb-elsodleges mt-9">
              Kollekció megtekintése
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
