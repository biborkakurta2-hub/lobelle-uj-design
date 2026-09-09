import Link from "next/link";
import Csillanas from "@/components/Csillanas";

export default function NemTalalhato() {
  return (
    <section className="konteiner py-32 text-center sm:py-40">
      <Csillanas className="mx-auto h-6 w-6 text-arany" />
      <p className="cimke mt-6">404</p>
      <h1 className="mt-5 font-cim text-4xl font-normal text-szilva">
        Ez az oldal nem található
      </h1>
      <div className="hajszal-rovid mt-8" aria-hidden="true" />
      <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-szilva/75">
        A keresett oldal nem létezik vagy elköltözött. Kezdd a főoldalról, vagy nézd meg a
        kollekciónkat.
      </p>
      <Link href="/" className="gomb-elsodleges mt-11">
        Vissza a főoldalra
      </Link>
    </section>
  );
}
