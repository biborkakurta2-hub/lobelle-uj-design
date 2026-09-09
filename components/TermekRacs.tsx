"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Termek } from "@/data/products";
import KepHelyorzo from "./KepHelyorzo";

type RendezesKulcs = "alap" | "ar-novekvo" | "ar-csokkeno" | "nev";

const RENDEZES: { ertek: RendezesKulcs; felirat: string }[] = [
  { ertek: "alap", felirat: "Alapértelmezett" },
  { ertek: "ar-novekvo", felirat: "Ár szerint növekvő" },
  { ertek: "ar-csokkeno", felirat: "Ár szerint csökkenő" },
  { ertek: "nev", felirat: "Név szerint" },
];

const forintFormazo = new Intl.NumberFormat("hu-HU", {
  style: "currency",
  currency: "HUF",
  maximumFractionDigits: 0,
});

/**
 * Termékrács rendezéssel.
 * Csak akkor renderelődik, ha vannak termékek — az üres állapotot a
 * kategóriaoldal `FeltoltesAlatt` blokkja kezeli.
 */
export default function TermekRacs({ termekek }: { termekek: Termek[] }) {
  const [rendezes, setRendezes] = useState<RendezesKulcs>("alap");

  const rendezett = useMemo(() => {
    const lista = [...termekek];
    switch (rendezes) {
      case "ar-novekvo":
        return lista.sort((a, b) => (a.ar ?? Infinity) - (b.ar ?? Infinity));
      case "ar-csokkeno":
        return lista.sort((a, b) => (b.ar ?? -Infinity) - (a.ar ?? -Infinity));
      case "nev":
        return lista.sort((a, b) => a.nev.localeCompare(b.nev, "hu"));
      default:
        return lista;
    }
  }, [termekek, rendezes]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-arany/30 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-szilva/70">{termekek.length} termék a kategóriában</p>
        <div className="flex items-center gap-3">
          <label htmlFor="rendezes" className="cimke">
            Rendezés
          </label>
          <select
            id="rendezes"
            value={rendezes}
            onChange={(e) => setRendezes(e.target.value as RendezesKulcs)}
            className="rounded-full border border-szilva/15 bg-white px-4 py-2.5 text-sm text-szilva transition-colors focus:border-arany focus:outline-none"
          >
            {RENDEZES.map((opcio) => (
              <option key={opcio.ertek} value={opcio.ertek}>
                {opcio.felirat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {rendezett.map((termek) => (
          <li key={termek.id}>
            <article className="kartya group h-full !p-6 hover:border-arany/50 hover:shadow-csillanas">
              {termek.kep ? (
                <Image
                  src={termek.kep}
                  alt={termek.kepAlt ?? termek.nev}
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              ) : (
                <KepHelyorzo felirat={termek.nev} arany="aspect-square" />
              )}

              <h3 className="mt-6 font-cim text-lg leading-snug text-szilva">{termek.nev}</h3>

              {termek.leiras ? (
                <p className="mt-3 text-sm leading-relaxed text-szilva/70">{termek.leiras}</p>
              ) : null}

              {termek.variansok?.length ? (
                <p className="mt-3 text-xs text-szilva/75">
                  Variánsok: {termek.variansok.join(" · ")}
                </p>
              ) : null}

              <p className="mt-5 font-cim text-lg text-szilva">
                {termek.ar !== null ? forintFormazo.format(termek.ar) : "Egyedi árazás"}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
