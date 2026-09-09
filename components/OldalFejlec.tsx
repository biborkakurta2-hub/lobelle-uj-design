import type { ReactNode } from "react";

/**
 * Aloldalak fejléce — meleg, púderes felület halvány arany ívvel és
 * csillanás-motívummal. A `h1` itt él minden aloldalon.
 */
export default function OldalFejlec({
  cimke,
  cim,
  children,
}: {
  cimke: string;
  cim: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden fejlec-lagy">
      {/* Halvány arany ív — a Lobelle finom, visszatérő díszítése */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 left-1/2 h-[26rem] w-[52rem] -translate-x-1/2 rounded-[50%] border border-arany/30"
      />
      {/* Lágy rózsaszín derengés — a Szépítész Műhely mályva foltjainak megfelelője */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-malyva/20 blur-3xl"
      />

      <div className="konteiner relative py-20 text-center sm:py-28">
        <p className="flex items-center justify-center gap-2.5">
          <span className="cimke">{cimke}</span>
        </p>

        <h1 className="mx-auto mt-6 max-w-3xl font-cim text-4xl font-normal leading-[1.15] text-szilva sm:text-5xl">
          {cim}
        </h1>

        <div className="hajszal-rovid mt-8" aria-hidden="true" />

        {children ? (
          <p className="mx-auto mt-8 max-w-2xl text-[0.95rem] leading-[1.85] text-szilva/75">
            {children}
          </p>
        ) : null}
      </div>
    </section>
  );
}
