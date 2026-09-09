/**
 * ŰRLAPBEKÜLDÉS
 *
 * ⚠️ A valós beküldési végpont nem volt ismert a projekt készítésekor, ezért
 *    itt egy jelöletlen helyőrző áll. Amíg a helyőrző szerepel, az űrlapok
 *    NEM küldenek hálózati kérést — csak visszaigazolják a kitöltést.
 *
 *    Éles használathoz cseréld ki az `URLAP_VEGPONT` értékét a valós
 *    végpontra (pl. Formspree: "https://formspree.io/f/abcdwxyz", vagy egy
 *    saját `/api/kapcsolat` route). A többi kódot nem kell módosítani.
 */
export const URLAP_VEGPONT = "https://formspree.io/f/VEGPONT_HELYORZO";

export function vanBeallitottVegpont(): boolean {
  return !URLAP_VEGPONT.includes("HELYORZO");
}

export async function urlapBekuldes(adat: Record<string, string>): Promise<boolean> {
  if (!vanBeallitottVegpont()) {
    // Helyőrző mód: nincs hálózati kérés, a beküldést sikeresnek tekintjük.
    return true;
  }
  try {
    const valasz = await fetch(URLAP_VEGPONT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(adat),
    });
    return valasz.ok;
  } catch {
    return false;
  }
}

export const EMAIL_MINTA = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Az űrlapok egységes magyar hibaüzenetei */
export const HIBAK = {
  nev: "A név megadása kötelező.",
  emailHianyzik: "Az email cím megadása kötelező.",
  emailErvenytelen: "Kérjük, érvényes email címet adjon meg.",
  gdpr: "A folytatáshoz el kell fogadnia az adatkezelési tájékoztatót.",
  bekuldes:
    "Az üzenet küldése nem sikerült. Kérjük, próbálja újra később, vagy hívjon minket telefonon.",
} as const;
