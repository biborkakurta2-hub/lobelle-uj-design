"use client";

import type { ReactNode } from "react";

/** Egy űrlapmező címkével és hibaüzenettel — minden űrlap ezt használja. */
export function Mezo({
  id,
  cimke,
  kotelezo = false,
  hiba,
  children,
  segito,
}: {
  id: string;
  cimke: string;
  kotelezo?: boolean;
  hiba?: string;
  children: ReactNode;
  segito?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-szilva">
        {cimke}{" "}
        {kotelezo ? (
          <span className="text-szilva" aria-hidden="true">
            *
          </span>
        ) : segito ? (
          <span className="text-szilva/70">{segito}</span>
        ) : null}
      </label>
      {children}
      {hiba ? (
        <p id={`${id}-hiba`} className="mezo-hiba" role="alert">
          {hiba}
        </p>
      ) : null}
    </div>
  );
}

/** GDPR jelölőnégyzet — minden űrlapon kötelező. */
export function GdprJelolo({ id, hiba }: { id: string; hiba?: string }) {
  return (
    <div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-szilva/75">
        <input
          id={id}
          type="checkbox"
          name="gdpr"
          required
          aria-invalid={Boolean(hiba)}
          aria-describedby={hiba ? `${id}-hiba` : undefined}
          className="mt-1 h-4 w-4 shrink-0 rounded accent-[#B98BA5]"
        />
        <span>
          Elolvastam és elfogadom az adatkezelési tájékoztatót, hozzájárulok adataim
          kapcsolatfelvétel céljából történő kezeléséhez.{" "}
          <span className="text-szilva" aria-hidden="true">
            *
          </span>
        </span>
      </label>
      {hiba ? (
        <p id={`${id}-hiba`} className="mezo-hiba" role="alert">
          {hiba}
        </p>
      ) : null}
    </div>
  );
}

/** Sikeres beküldés visszajelzése. */
export function SikerUzenet({ cim, szoveg }: { cim: string; szoveg: string }) {
  return (
    <div className="kartya-meleg text-center" role="status">
      <p className="cimke mt-4">Köszönjük</p>
      <p className="mt-4 font-cim text-2xl leading-snug text-szilva">{cim}</p>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-szilva/75">{szoveg}</p>
    </div>
  );
}
