import type { Config } from "tailwindcss";

/**
 * Lobelle – design tokenek.
 *
 * A színpaletta és a betűtípus-készlet AZONOS a Szépítész Műhely oldaláéval
 * (lásd STYLE-ANALYSIS.md) — a két oldal így egy márkacsaládba tartozik.
 * A különbség a paletta SÚLYOZÁSÁBAN van, nem a színekben:
 *
 *   Szépítész Műhely            Lobelle
 *   ─────────────────────────   ─────────────────────────────────
 *   domináns háttér: puder      domináns háttér: fehér + barackpír
 *   nagy sötét szilva tömbök    nagy világos, meleg felületek
 *   elsődleges akcent: mályva   elsődleges akcent: arany (ékszer-fém)
 *   szilva = nagy felület       szilva = szöveg + ritka vékony akcent
 *
 * Minden érték CSS custom property-ből olvas (app/globals.css `:root`),
 * hogy egyetlen helyen legyen szerkeszthető.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* --- A közös, öt tagú márkapaletta (Szépítész Műhely) --- */
        puder: "rgb(var(--szin-puder) / <alpha-value>)", //      #F9F2ED
        malyva: "rgb(var(--szin-malyva) / <alpha-value>)", //    #B98BA5
        barackpir: "rgb(var(--szin-barackpir) / <alpha-value>)", // #EFD5C3
        arany: "rgb(var(--szin-arany) / <alpha-value>)", //      #D9B48A
        szilva: "rgb(var(--szin-szilva) / <alpha-value>)", //    #2B1E2E
      },
      fontFamily: {
        cim: ["var(--font-marcellus)", "Georgia", "serif"],
        szoveg: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        /* Tágabb, mint a Szépítész Műhely 0.14em-je — finomabb, feminin hatás */
        cimke: "var(--betukoz-cimke)", // 0.2em
        gomb: "var(--betukoz-gomb)", //   0.12em
      },
      borderRadius: {
        /* Kerekebb, mint a Szépítész Műhely rounded-3xl (1.5rem) formái */
        kartya: "var(--sugar-kartya)", // 2rem
        nagy: "var(--sugar-nagy)", //     2.5rem
      },
      boxShadow: {
        lagy: "0 10px 30px -12px rgba(43, 30, 46, 0.18)",
        kartya: "0 6px 24px -10px rgba(43, 30, 46, 0.14)",
        /* Fémes csillanás: alig látható arany derengés a kártya pereme körül */
        csillanas: "0 1px 0 0 rgba(255,255,255,0.7) inset, 0 12px 34px -16px rgba(217, 180, 138, 0.55)",
      },
      backgroundImage: {
        /* Halvány fémes felület — a titánium/arany csillanás visszafogott utánzata */
        "femes-lagy":
          "linear-gradient(135deg, #FFFFFF 0%, var(--puder) 45%, var(--barackpir) 100%)",
        "femes-meleg":
          "linear-gradient(160deg, var(--barackpir) 0%, var(--puder) 60%, #FFFFFF 100%)",
        /* Hajszálvékony elválasztók */
        "hajszal-arany":
          "linear-gradient(90deg, transparent, var(--arany), transparent)",
        "hajszal-roze":
          "linear-gradient(90deg, transparent, var(--malyva), var(--arany), transparent)",
      },
      maxWidth: {
        tartalom: "72rem", // 1152px — azonos a Szépítész Műhely max-w-6xl konténerével
      },
      keyframes: {
        felszallas: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        /* A csillanás-motívum lassú, alig érzékelhető lüktetése */
        csillan: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.92)" },
          "50%": { opacity: "0.7", transform: "scale(1)" },
        },
      },
      animation: {
        felszallas: "felszallas 0.7s ease-out both",
        csillan: "csillan 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
