/**
 * Cég- és kapcsolati adatok — egyetlen forrás az egész oldalnak.
 * Szerkesztéshez elég ezt a fájlt módosítani.
 */

export const SITE_NAME = "Lobelle";
export const SITE_TAGLINE = "Titan Ear Piercing Technologies";

/**
 * Az oldal nyilvános címe — ebből épül a canonical link, a sitemap és az OG-URL.
 *
 * Sorrendben:
 *  1. `NEXT_PUBLIC_SITE_URL` — ha be van állítva, ez az erősebb. Éles domain
 *     esetén ezt add meg (pl. `https://lobelle.hu`).
 *  2. Vercelen a projekt állandó production címe, illetve preview deploynál az
 *     adott deploy címe — így a `.vercel.app` alatt futó oldal nem hivatkozik
 *     tévesen a lobelle.hu-ra.
 *  3. Végső tartalék: a végleges domain.
 */
function oldalCim(): string {
  const megadott = process.env.NEXT_PUBLIC_SITE_URL;
  if (megadott) return megadott.replace(/\/+$/, "");

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "https://lobelle.hu";
}

export const SITE_URL = oldalCim();

export const PHONE = "+36 30 483 3814";
export const PHONE_HREF = "tel:+36304833814";
export const EMAIL = "rendeles@lobelle.hu";
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const ADDRESS = "4031 Debrecen, Széchenyi u. 62. fszt. 26.";

export const FACEBOOK_URL = "https://www.facebook.com/lobelle.hu";
export const INSTAGRAM_URL = "https://www.instagram.com/lobelle.hu";

/** Felnőttképzési nyilvántartási szám (FAR) */
export const FAR_NUMBER = "B/2021/000190";
