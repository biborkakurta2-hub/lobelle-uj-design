"use client";

import { useState, type FormEvent } from "react";
import { EMAIL_MINTA, HIBAK, urlapBekuldes } from "@/lib/forms";
import { GdprJelolo, Mezo, SikerUzenet } from "./UrlapElemek";

type Hibak = Partial<Record<"nev" | "email" | "gdpr" | "bekuldes", string>>;

/**
 * Általános érdeklődő / regisztrációs űrlap.
 * A privát oktatás és a szakmai regisztráció oldal is ezt használja,
 * saját mezőcímkével és gombfelirattal.
 */
export default function ErdeklodesUrlap({
  urlapNev,
  uzenetCimke,
  gombFelirat,
  azonosito,
}: {
  urlapNev: string;
  uzenetCimke: string;
  gombFelirat: string;
  /** Egyedi előtag az id-khoz, ha több űrlap lenne egy oldalon */
  azonosito: string;
}) {
  const [hibak, setHibak] = useState<Hibak>({});
  const [kuldes, setKuldes] = useState(false);
  const [elkuldve, setElkuldve] = useState(false);

  async function bekuldes(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const urlap = e.currentTarget;
    const adat = new FormData(urlap);
    const nev = String(adat.get("nev") ?? "").trim();
    const email = String(adat.get("email") ?? "").trim();
    const telefon = String(adat.get("telefon") ?? "").trim();
    const uzenet = String(adat.get("uzenet") ?? "").trim();
    const gdpr = adat.get("gdpr") === "on";

    const ujHibak: Hibak = {};
    if (!nev) ujHibak.nev = HIBAK.nev;
    if (!email) ujHibak.email = HIBAK.emailHianyzik;
    else if (!EMAIL_MINTA.test(email)) ujHibak.email = HIBAK.emailErvenytelen;
    if (!gdpr) ujHibak.gdpr = HIBAK.gdpr;

    setHibak(ujHibak);
    if (Object.keys(ujHibak).length > 0) return;

    setKuldes(true);
    const sikeres = await urlapBekuldes({ urlap: urlapNev, nev, email, telefon, uzenet });
    setKuldes(false);

    if (sikeres) {
      setElkuldve(true);
      urlap.reset();
    } else {
      setHibak({ bekuldes: HIBAK.bekuldes });
    }
  }

  if (elkuldve) {
    return (
      <SikerUzenet
        cim="Érdeklődését megkaptuk."
        szoveg="Munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségek egyikén."
      />
    );
  }

  return (
    <form onSubmit={bekuldes} noValidate className="space-y-6">
      <Mezo id={`${azonosito}-nev`} cimke="Név" kotelezo hiba={hibak.nev}>
        <input
          id={`${azonosito}-nev`}
          name="nev"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(hibak.nev)}
          aria-describedby={hibak.nev ? `${azonosito}-nev-hiba` : undefined}
          className="mezo"
        />
      </Mezo>

      <Mezo id={`${azonosito}-email`} cimke="Email cím" kotelezo hiba={hibak.email}>
        <input
          id={`${azonosito}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(hibak.email)}
          aria-describedby={hibak.email ? `${azonosito}-email-hiba` : undefined}
          className="mezo"
        />
      </Mezo>

      <Mezo id={`${azonosito}-telefon`} cimke="Telefonszám" segito="(opcionális)">
        <input
          id={`${azonosito}-telefon`}
          name="telefon"
          type="tel"
          autoComplete="tel"
          className="mezo"
        />
      </Mezo>

      <Mezo id={`${azonosito}-uzenet`} cimke={uzenetCimke}>
        <textarea id={`${azonosito}-uzenet`} name="uzenet" rows={5} className="mezo resize-y" />
      </Mezo>

      <GdprJelolo id={`${azonosito}-gdpr`} hiba={hibak.gdpr} />

      {hibak.bekuldes ? (
        <p className="text-sm font-medium text-szilva" role="alert">
          {hibak.bekuldes}
        </p>
      ) : null}

      <button type="submit" disabled={kuldes} className="gomb-elsodleges w-full disabled:opacity-60 sm:w-auto">
        {kuldes ? "Küldés folyamatban" : gombFelirat}
      </button>
    </form>
  );
}
