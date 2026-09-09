import type { ReactNode } from "react";
import Csillanas from "./Csillanas";

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
    <section className="relative overflow-hidden bg-femes-meleg">
      {/* Halvány arany ív — a Lobelle finom, visszatérő díszítése */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 left-1/2 h-[26rem] w-[52rem] -translate-x-1/2 rounded-[50%] border border-arany/30"
      />
      <Csillanas
        lukteto
        className="pointer-events-none absolute right-[8%] top-[22%] h-6 w-6 text-arany/40"
      />
      <Csillanas
        lukteto
        className="pointer-events-none absolute left-[7%] top-[62%] h-3.5 w-3.5 text-malyva/40"
      />

      <div className="konteiner relative py-20 text-center sm:py-28">
        <p className="flex items-center justify-center gap-2.5">
          <Csillanas className="h-3 w-3 text-arany" />
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
