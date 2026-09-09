import type { ReactNode } from "react";

/**
 * Szekciófejléc: kiskapitális címke csillanás-motívummal, cím, bevezető.
 *
 * A nagy címek szándékosan könnyű súlyúak és tág sorközzel futnak — ez adja
 * a finomabb, feminin karaktert a testvéroldal tömörebb címeihez képest.
 */
export default function SzekcioCim({
  cimke,
  cim,
  children,
  igazitas = "kozep",
  szint = "h2",
  className = "",
}: {
  cimke?: string;
  cim: string;
  children?: ReactNode;
  igazitas?: "kozep" | "bal";
  /** Heading szint — a helyes dokumentum-hierarchia miatt állítható */
  szint?: "h2" | "h3";
  className?: string;
}) {
  const kozepre = igazitas === "kozep";
  const Cim = szint;

  return (
    <div className={`${kozepre ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}>
      {cimke ? (
        <p className={`flex items-center gap-2.5 ${kozepre ? "justify-center" : ""}`}>
          <span className="cimke">{cimke}</span>
        </p>
      ) : null}

      <Cim className="mt-5 font-cim text-3xl font-normal leading-[1.2] text-szilva sm:text-4xl">
        {cim}
      </Cim>

      {children ? (
        <p
          className={`mt-6 text-[0.95rem] leading-[1.85] text-szilva/70 ${
            kozepre ? "mx-auto" : ""
          }`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
