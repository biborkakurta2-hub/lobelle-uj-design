import Link from "next/link";
import Logo from "./Logo";
import Csillanas from "./Csillanas";
import { NAV, LEGAL_LINKS } from "@/lib/navigation";
import {
  ADDRESS,
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE,
  PHONE_HREF,
} from "@/lib/site";

/**
 * Lábléc.
 *
 * A testvéroldalon a lábléc nagy, sötét szilva tömb. Itt szándékosan világos,
 * meleg púder felület — ez a paletta átsúlyozásának egyik legláthatóbb helye
 * (lásd STYLE-ANALYSIS.md 7/a).
 */
export default function Lablec() {
  return (
    <footer className="relative overflow-hidden border-t border-arany/25 bg-puder">
      {/* Halvány arany ív a lábléc tetején */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-64 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-[50%] border border-arany/20"
      />

      <div className="konteiner relative py-20">
        <div className="flex justify-center">
          <Logo className="h-24 w-auto" sizes="200px" />
        </div>
        <div className="hajszal-rovid mt-10" aria-hidden="true" />

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Elérhetőségek */}
          <div>
            <h2 className="cimke">Elérhetőségek</h2>
            <ul className="mt-5 space-y-3 text-sm text-szilva/75">
              <li>
                <address className="not-italic">{ADDRESS}</address>
              </li>
              <li>
                <a href={PHONE_HREF} className="transition-colors duration-300 hover:text-szilva">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="transition-colors duration-300 hover:text-szilva">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Menücsoportok */}
          {NAV.filter((csoport) => csoport.items).map((csoport) => (
            <div key={csoport.label}>
              <h2 className="cimke">{csoport.label}</h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                {csoport.items!.map((elem) => (
                  <li key={elem.href}>
                    <Link
                      href={elem.href}
                      className="text-szilva/75 transition-colors duration-300 hover:text-szilva"
                    >
                      {elem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Jogi linkek + közösségi média */}
        <div className="mt-16 border-t border-arany/25 pt-10">
          <div className="flex flex-col items-center justify-between gap-7 text-sm text-szilva/75 md:flex-row">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-szilva"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-6">
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors duration-300 hover:text-szilva"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6v3h3v9h3v-9h3l1-3h-4V6.5a.5.5 0 0 1 .5-.5H15V3z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors duration-300 hover:text-szilva"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-10 flex items-center justify-center gap-2.5 text-center">
            <Csillanas className="h-2.5 w-2.5 text-arany" />
            <span className="cimke !text-[0.65rem]">© 2026 Lobelle · Minden jog fenntartva</span>
            <Csillanas className="h-2.5 w-2.5 text-arany" />
          </p>
        </div>
      </div>
    </footer>
  );
}
