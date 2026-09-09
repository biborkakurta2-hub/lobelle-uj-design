import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FeltoltesAlatt from "@/components/FeltoltesAlatt";
import OldalFejlec from "@/components/OldalFejlec";
import Reveal from "@/components/Reveal";
import TermekRacs from "@/components/TermekRacs";
import { KATEGORIAK, getKategoria, getTermekekKategoriankent } from "@/data/products";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return KATEGORIAK.map((kategoria) => ({ slug: kategoria.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const kategoria = getKategoria(params.slug);
  if (!kategoria) return {};

  return {
    title: kategoria.cim,
    description: `${kategoria.leiras} Implantátum minőségű, ASTM F136 szabványú Grade 23 titánium — a Lobelle kollekcióból.`,
    alternates: { canonical: `/termekek/${kategoria.slug}` },
    openGraph: {
      title: `${kategoria.cim} | Lobelle`,
      description: kategoria.leiras,
    },
  };
}

export default function KategoriaOldal({ params }: Props) {
  const kategoria = getKategoria(params.slug);
  if (!kategoria) notFound();

  const termekek = getTermekekKategoriankent(kategoria.slug);

  return (
    <>
      <OldalFejlec cimke="Kollekció" cim={kategoria.cim}>
        {kategoria.hosszuLeiras}
      </OldalFejlec>

      <section className="szekcio-szuk konteiner">
        {termekek.length > 0 ? (
          <Reveal>
            <TermekRacs termekek={termekek} />
          </Reveal>
        ) : (
          <Reveal>
            <FeltoltesAlatt />
          </Reveal>
        )}

        <Reveal>
          <div className="mt-20 border-t border-arany/30 pt-12 text-center">
            <p className="text-sm text-szilva/75">
              Kérdésed van a kollekcióról, vagy nagyobb mennyiséget rendelnél?
            </p>
            <Link href="/kapcsolat" className="gomb-korvonal mt-7">
              Kapcsolatfelvétel
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
