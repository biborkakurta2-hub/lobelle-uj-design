"use client";

import { useState, type FormEvent } from "react";
import { EMAIL_MINTA, HIBAK, urlapBekuldes } from "@/lib/forms";
import { GdprJelolo, SikerUzenet } from "./UrlapElemek";

type Hibak = Partial<Record<"email" | "gdpr" | "bekuldes", string>>;

/** Hírlevél-feliratkozás a főoldal záró szekciójában. */
export default function HirlevelUrlap() {
  const [hibak, setHibak] = useState<Hibak>({});
  const [kuldes, setKuldes] = useState(false);
  const [elkuldve, setElkuldve] = useState(false);

  async function bekuldes(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const urlap = e.currentTarget;
    const adat = new FormData(urlap);
    const email = String(adat.get("email") ?? "").trim();
    const gdpr = adat.get("gdpr") === "on";

    const ujHibak: Hibak = {};
    if (!email) ujHibak.email = HIBAK.emailHianyzik;
    else if (!EMAIL_MINTA.test(email)) ujHibak.email = HIBAK.emailErvenytelen;
    if (!gdpr) ujHibak.gdpr = HIBAK.gdpr;

    setHibak(ujHibak);
    if (Object.keys(ujHibak).length > 0) return;

    setKuldes(true);
    const sikeres = await urlapBekuldes({ urlap: "Hírlevél feliratkozás", email });
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
        cim="Feliratkozását rögzítettük."
        szoveg="Elsőként értesítjük az új kollekciókról, képzési időpontokról és szakmai újdonságokról."
      />
    );
  }

  return (
    <form onSubmit={bekuldes} noValidate className="mx-auto max-w-xl space-y-5 text-left">
      <div>
        <label htmlFor="hirlevel-email" className="mb-2 block text-sm text-szilva">
          Email cím{" "}
          <span className="text-szilva" aria-hidden="true">
            *
          </span>
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="hirlevel-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="pelda@email.hu"
            aria-invalid={Boolean(hibak.email)}
            aria-describedby={hibak.email ? "hirlevel-email-hiba" : undefined}
            className="mezo sm:flex-1"
          />
          <button
            type="submit"
            disabled={kuldes}
            className="gomb-elsodleges shrink-0 disabled:opacity-60"
          >
            {kuldes ? "Küldés" : "Feliratkozom"}
          </button>
        </div>
        {hibak.email ? (
          <p id="hirlevel-email-hiba" className="mezo-hiba" role="alert">
            {hibak.email}
          </p>
        ) : null}
      </div>

      <GdprJelolo id="hirlevel-gdpr" hiba={hibak.gdpr} />

      {hibak.bekuldes ? (
        <p className="text-sm font-medium text-szilva" role="alert">
          {hibak.bekuldes}
        </p>
      ) : null}
    </form>
  );
}
