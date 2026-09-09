"use client";

import { useState } from "react";
import Pont from "./Pont";

export type AkkordionElem = { kerdes: string; valasz: string };

/**
 * Kérdés-válasz akkordion.
 * Natív gombokkal, `aria-expanded` / `aria-controls` párosítással —
 * billentyűzettel teljesen bejárható.
 */
export default function Akkordion({
  elemek,
  szint = "h2",
}: {
  elemek: AkkordionElem[];
  /** A kérdések címsorszintje — a dokumentum-hierarchiához igazítható */
  szint?: "h2" | "h3";
}) {
  const Kerdes = szint;
  const [nyitott, setNyitott] = useState<number | null>(0);

  return (
    <div className="divide-y divide-arany/30 border-y border-arany/30">
      {elemek.map((elem, i) => {
        const nyitva = nyitott === i;
        return (
          <div key={elem.kerdes}>
            <Kerdes>
              <button
                type="button"
                aria-expanded={nyitva}
                aria-controls={`gyik-valasz-${i}`}
                id={`gyik-kerdes-${i}`}
                onClick={() => setNyitott(nyitva ? null : i)}
                className="flex w-full items-start justify-between gap-5 py-6 text-left transition-colors duration-300 hover:text-szilva"
              >
                <span className="flex items-start gap-3.5">
                  <Pont className="mt-[0.6rem]" />
                  <span className="font-cim text-lg leading-snug text-current sm:text-xl">
                    {elem.kerdes}
                  </span>
                </span>
                {/* „+” zárt állapotban, 45°-kal elforgatva „×” nyitottban */}
                <span
                  aria-hidden="true"
                  className={`mt-0.5 shrink-0 text-base leading-none transition-transform duration-300 ${
                    nyitva ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </Kerdes>
            <div
              id={`gyik-valasz-${i}`}
              role="region"
              aria-labelledby={`gyik-kerdes-${i}`}
              hidden={!nyitva}
            >
              <p className="pb-7 pl-[1.65rem] pr-8 text-[0.95rem] leading-[1.85] text-szilva/75">
                {elem.valasz}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
