import type { Metadata } from "next";
import { Suspense } from "react";
import KapcsolatUrlap from "@/components/KapcsolatUrlap";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";
import {
  ADDRESS,
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE,
  PHONE_HREF,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Kapcsolatfelvétel",
  description:
    "Vedd fel velünk a kapcsolatot: 4031 Debrecen, Széchenyi u. 62. fszt. 26. Telefon: +36 30 483 3814. Email: rendeles@lobelle.hu.",
  alternates: { canonical: "/kapcsolat" },
  openGraph: {
    title: "Kapcsolatfelvétel | Lobelle",
    description: "Írj nekünk, vagy hívj minket — kérdésekben és rendelésben is segítünk.",
  },
};

export default function KapcsolatOldal() {
  return (
    <>
      <OldalFejlec cimke="Kapcsolat" cim="Kapcsolatfelvétel">
        Kérdésed van a termékekről, a képzésről vagy rendelnél? Írj nekünk, vagy hívj minket —
        munkanapokon rövid időn belül válaszolunk.
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        <div className="grid gap-14 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <Reveal>
            <h2 className="font-cim text-2xl text-szilva">Írj nekünk üzenetet</h2>
            <div className="hajszal mt-5" aria-hidden="true" />
            <div className="mt-10">
              {/* useSearchParams miatt Suspense-be csomagolva */}
              <Suspense fallback={<p className="text-sm text-szilva/75">Űrlap betöltése…</p>}>
                <KapcsolatUrlap />
              </Suspense>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-cim text-2xl text-szilva">Elérhetőségeink</h2>
            <div className="hajszal mt-5" aria-hidden="true" />
            <dl className="mt-10 space-y-8">
              <div>
                <dt className="cimke">Cím</dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-szilva/85">
                  <address className="not-italic">{ADDRESS}</address>
                </dd>
              </div>
              <div>
                <dt className="cimke">Telefon</dt>
                <dd className="mt-2.5 text-sm text-szilva/85">
                  <a href={PHONE_HREF} className="transition-colors duration-300 hover:text-szilva">
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="cimke">Email</dt>
                <dd className="mt-2.5 text-sm text-szilva/85">
                  <a href={EMAIL_HREF} className="transition-colors duration-300 hover:text-szilva">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="cimke">Közösség</dt>
                <dd className="mt-2.5 space-y-2 text-sm text-szilva/85">
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors duration-300 hover:text-szilva"
                  >
                    Facebook
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors duration-300 hover:text-szilva"
                  >
                    Instagram
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
