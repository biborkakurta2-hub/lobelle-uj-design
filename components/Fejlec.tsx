"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { NAV } from "@/lib/navigation";
import { PHONE, PHONE_HREF } from "@/lib/site";

/**
 * Sticky fejléc: logó balra, csoportosított lenyíló menük, telefonszám CTA-ként.
 * A fejléc alján hajszálvékony arany csík — a Szépítész Műhely tömör akvarell
 * sávjának finomabb, fémes megfelelője.
 */
export default function Fejlec() {
  const utvonal = usePathname();
  const [nyitottCsoport, setNyitottCsoport] = useState<string | null>(null);
  const [mobilNyitva, setMobilNyitva] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Útvonalváltásnál minden menü záródjon
  useEffect(() => {
    setNyitottCsoport(null);
    setMobilNyitva(false);
  }, [utvonal]);

  // Kattintás a menün kívül + Escape: zárás
  useEffect(() => {
    function kattintas(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setNyitottCsoport(null);
      }
    }
    function billentyu(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setNyitottCsoport(null);
        setMobilNyitva(false);
      }
    }
    document.addEventListener("click", kattintas);
    document.addEventListener("keydown", billentyu);
    return () => {
      document.removeEventListener("click", kattintas);
      document.removeEventListener("keydown", billentyu);
    };
  }, []);

  const aktiv = (href: string) => utvonal === href;
  const csoportAktiv = (csoport: (typeof NAV)[number]) =>
    csoport.href ? aktiv(csoport.href) : Boolean(csoport.items?.some((i) => aktiv(i.href)));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="konteiner flex h-24 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Lobelle – főoldal"
          className="shrink-0"
        >
          <Logo
            className="h-14 w-auto sm:h-16"
            priority
            sizes="(max-width: 640px) 140px, 180px"
          />
        </Link>

        {/* Asztali navigáció */}
        <nav ref={navRef} aria-label="Fő navigáció" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((csoport) => (
              <li key={csoport.label} className="relative">
                {csoport.items ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={nyitottCsoport === csoport.label}
                      aria-haspopup="true"
                      onClick={() =>
                        setNyitottCsoport((elozo) =>
                          elozo === csoport.label ? null : csoport.label,
                        )
                      }
                      className={`flex items-center gap-1.5 border-b-2 px-4 py-2.5 font-cim text-[0.7rem] uppercase tracking-gomb text-szilva transition-colors duration-300 hover:border-arany ${
                        csoportAktiv(csoport) || nyitottCsoport === csoport.label
                          ? "border-arany"
                          : "border-transparent"
                      }`}
                    >
                      {csoport.label}
                      <span
                        aria-hidden="true"
                        className={`text-[0.5rem] transition-transform duration-300 ${
                          nyitottCsoport === csoport.label ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {nyitottCsoport === csoport.label ? (
                      <ul className="absolute left-0 top-full mt-2 w-[19rem] overflow-hidden rounded-kartya border border-arany/25 bg-white py-2 shadow-lagy">
                        {csoport.items.map((elem) => (
                          <li key={elem.href}>
                            <Link
                              href={elem.href}
                              className={`block px-6 py-3 text-sm transition-colors duration-300 hover:bg-puder ${
                                aktiv(elem.href) ? "bg-puder text-szilva" : "text-szilva/80"
                              }`}
                            >
                              {elem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={csoport.href!}
                    className={`block border-b-2 px-4 py-2.5 font-cim text-[0.7rem] uppercase tracking-gomb text-szilva transition-colors duration-300 hover:border-arany ${
                      aktiv(csoport.href!) ? "border-arany" : "border-transparent"
                    }`}
                  >
                    {csoport.label}
                  </Link>
                )}
              </li>
            ))}

            <li className="ml-3">
              <a href={PHONE_HREF} className="gomb-elsodleges !px-6 !py-3">
                {PHONE}
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobil: telefon + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PHONE_HREF}
            aria-label={`Telefon: ${PHONE}`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-arany text-szilva transition-colors hover:bg-malyva"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3z" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            type="button"
            aria-expanded={mobilNyitva}
            aria-controls="mobil-menu"
            aria-label={mobilNyitva ? "Menü bezárása" : "Menü megnyitása"}
            onClick={() => setMobilNyitva((o) => !o)}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-szilva/15"
          >
            <span
              className={`h-px w-5 bg-szilva transition-transform duration-300 ${mobilNyitva ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-szilva transition-opacity duration-300 ${mobilNyitva ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-szilva transition-transform duration-300 ${mobilNyitva ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Hajszálvékony arany csík — a fémes márkajel */}
      <div aria-hidden="true" className="hajszal" />

      {/* Mobil menü */}
      {mobilNyitva ? (
        <nav
          id="mobil-menu"
          aria-label="Mobil navigáció"
          className="max-h-[calc(100vh-6rem)] overflow-y-auto border-b border-szilva/10 bg-white lg:hidden"
        >
          <ul className="konteiner flex flex-col py-5">
            {NAV.map((csoport) => (
              <li key={csoport.label} className="py-2">
                {csoport.items ? (
                  <>
                    <span className="cimke">{csoport.label}</span>
                    <ul className="mt-2 border-l border-arany/40 pl-4">
                      {csoport.items.map((elem) => (
                        <li key={elem.href}>
                          <Link
                            href={elem.href}
                            className={`block py-2.5 text-sm ${aktiv(elem.href) ? "font-medium text-szilva" : "text-szilva/85"}`}
                          >
                            {elem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={csoport.href!}
                    className={`block py-2.5 font-cim text-sm uppercase tracking-gomb text-szilva ${aktiv(csoport.href!) ? "font-medium" : ""}`}
                  >
                    {csoport.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pb-2 pt-5">
              <a href={PHONE_HREF} className="gomb-elsodleges w-full">
                {PHONE}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
