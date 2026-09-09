import type { Metadata } from "next";
import localFont from "next/font/local";
import Fejlec from "@/components/Fejlec";
import Lablec from "@/components/Lablec";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

/*
 * A betűtípus-készlet AZONOS a Szépítész Műhelyével (Marcellus + Jost) —
 * ez a két oldal közötti márkarokonság egyik legerősebb jele.
 * Self-hosted woff2, hogy a build ne függjön külső betűszolgáltatótól.
 */
const marcellus = localFont({
  src: [{ path: "./fonts/Marcellus-400.woff2", weight: "400", style: "normal" }],
  variable: "--font-marcellus",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const jost = localFont({
  src: [
    { path: "./fonts/Jost-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Jost-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Jost-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-jost",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lobelle – Titánium fülbelövő rendszerek és szakemberképzés",
    template: "%s | Lobelle",
  },
  description:
    "Implantátum minőségű, ASTM F136 szabványú Grade 23 titánium fülbelövő rendszerek és fül- és orrlyukasztó szakemberképzés. Az innovatív füllyukasztás új generációja.",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Lobelle",
    url: SITE_URL,
    title: "Lobelle – Titánium fülbelövő rendszerek és szakemberképzés",
    description:
      "Implantátum minőségű titánium fülbelövő rendszerek és füllyukasztó szakemberképzés. Biztonság, innováció, szakmaiság.",
  },
  /*
   * A favicon és az OG-kép fájlalapú konvencióval érkezik, mindkettő a
   * Lobelle logóból generálva:
   *   app/icon.png              – favicon (512×512)
   *   app/apple-icon.png        – iOS ikon (180×180)
   *   app/opengraph-image.png   – OG-kép (1200×630)
   */
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${marcellus.variable} ${jost.variable}`}>
      <body>
        {/* Billentyűzetes navigáció: ugrás a tartalomra */}
        <a
          href="#tartalom"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-arany focus:px-6 focus:py-3 focus:font-cim focus:text-xs focus:uppercase focus:tracking-gomb focus:text-szilva"
        >
          Ugrás a tartalomra
        </a>
        <Fejlec />
        <main id="tartalom">{children}</main>
        <Lablec />
      </body>
    </html>
  );
}
