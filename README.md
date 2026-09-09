# Lobelle — új design

A [lobelle.hu](https://lobelle.hu) újraépítve Next.js-ben, a
[Szépítész Műhely](https://szepiteszmuhely.vercel.app) vizuális nyelvére alapozva —
azonos márkacsalád, de saját, finomabb, ékszeresebb karakter.

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- Teljesen statikus generálás (SSG), magyar nyelvű (`lang="hu"`)
- Mobile-first, 360 px-től 1920 px-ig ellenőrizve

---

## Futtatás

```bash
npm install
npm run dev     # fejlesztői szerver — http://localhost:3000
npm run build   # produkciós build (minden oldal statikus)
npm run start   # a buildelt oldal kiszolgálása
```

---

## Mit hol találok?

| Útvonal | Mi van benne |
| --- | --- |
| `app/` | Az oldalak (App Router). Egy mappa = egy útvonal. |
| `app/globals.css` | **A design tokenek** — színek, betűköz, sugarak, komponensosztályok |
| `app/layout.tsx` | Közös váz: betűtípusok, fejléc, lábléc, alap-metadata |
| `app/fonts/` | Marcellus + Jost woff2 (self-hosted) |
| `components/` | Újrahasznosítható elemek (fejléc, lábléc, kártyák, űrlapok, motívum) |
| `data/products.ts` | **Termékkategóriák és termékadatok** |
| `lib/site.ts` | Kapcsolati és cégadatok |
| `lib/navigation.ts` | A teljes menüszerkezet + jogi linkek |
| `lib/forms.ts` | Űrlapbeküldés végpontja és hibaüzenetei |
| `public/` | Logófájlok |
| `scripts/` | Ellenőrző szkriptek (lásd lent) |
| `CONTENT-MAP.md` | Tartalmi leltár és ellenőrzőlista |
| `STYLE-ANALYSIS.md` | A stílusforrás elemzése és a Lobelle-irány levezetése |

### Oldaltérkép

| Útvonal | Oldal |
| --- | --- |
| `/` | Főoldal |
| `/termekek/standard-ekszerek` | Standard ékszerek korosztály nélkül |
| `/termekek/gyerek-ekszerek` | Gyerek ékszerek |
| `/termekek/baba-ekszerek` | Baba ékszerek díszdobozzal |
| `/termekek/orr-piercingek` | Orr piercingek |
| `/termekek/kellekek-eszkozok` | Kellékek és eszközök |
| `/termekek/ful-es-orrlyukaszto-keszulek` | Fül- és orrlyukasztó készülék |
| `/kepzes` | Szakemberképzés |
| `/kepzes/privat-oktatas` | Privát oktatás + érdeklődő űrlap |
| `/kepzes/idopontok` | Képzés időpontok, helyszínek |
| `/kepzes/szakembereknek` | Már füllyukasztó szakember vagyok + regisztráció |
| `/rolunk` | Rólunk |
| `/miert-a-lobelle` | Miért a Lobelle? (négy pillér) |
| `/eletkepek` | Életképek |
| `/gyakori-kerdesek` | Gyakori kérdések (10 db, FAQPage JSON-LD-vel) |
| `/kapcsolat` | Kapcsolatfelvétel |
| `/kosar` | Kosár |

---

## Hol lehet tartalmat szerkeszteni?

Minden szerkeszthető tartalom **adatfájlokban** van, nem a komponensekbe égetve:

| Mit szeretnél módosítani? | Hol? |
| --- | --- |
| Telefonszám, email, cím, közösségi linkek, FAR-szám | `lib/site.ts` |
| Menüpontok, jogi linkek | `lib/navigation.ts` |
| Termékkategóriák neve és leírása | `data/products.ts` → `KATEGORIAK` |
| **Konkrét termékek, árak, variánsok** | `data/products.ts` → `TERMEKEK` |
| Képzési időpontok és helyszínek | `app/kepzes/idopontok/page.tsx` → `IDOPONTOK` |
| GYIK kérdés-válaszok | `app/gyakori-kerdesek/page.tsx` → `GYIK` |
| Életképek feliratai | `app/eletkepek/page.tsx` → `GALERIA` |
| Űrlapok beküldési végpontja | `lib/forms.ts` → `URLAP_VEGPONT` |
| Színek, betűköz, sarokkerekítés | `app/globals.css` → `:root` |
| **A főoldal hero képe** | `app/page.tsx` → `HERO_KEP` és `HERO_KEP_ALT` |

### Termékek feltöltése

`data/products.ts` → `TERMEKEK` tömbjébe kell felvenni a termékeket a `Termek` típus
szerint. Amint van benne legalább egy elem, a kategóriaoldalak automatikusan
terméklistát mutatnak a „Feltöltés alatt” blokk helyett — a rendezés és a termékrács
készen áll. A fotókat a `public/termekek/` mappába tedd, és a `kep` mezőben hivatkozz
rájuk (`kepAlt` kötelező mellé).

---

## ⚠️ Ami hiányzik — pótolandó

A projekt készítésekor **a lobelle.hu nem volt elérhető** (a munkamenet hálózati
egress-szabálya 403-mal blokkolta), ezért a tartalom a
[`biborkakurta2-hub/lobelle`](https://github.com/biborkakurta2-hub/lobelle) repóból
származik — ez szolgálja ki a `lobelle.vercel.app`-ot. **Kitalált tartalom nem került az
oldalra**; ami nem volt megszerezhető, az jelölt helyőrzőként szerepel:

| Hiány | Hol jelenik meg | Mi a teendő |
| --- | --- | --- |
| **Termékadatok** (nevek, árak, variánsok) | Kategóriaoldalak „Feltöltés alatt” blokkja, `/kosar` | `data/products.ts` → `TERMEKEK` feltöltése |
| **Termék- és életkép-fotók** | `KepHelyorzo` komponens („Fotó feltöltés alatt”) | Fotók a `public/` alá, `KepHelyorzo` → `next/image` |
| **Hero kép** | A főoldal jobb oszlopában jelölt képhely | Fotó a `public/` alá, majd `app/page.tsx` → `HERO_KEP` |
| **ÁSZF / Adatkezelési / Elállási tájékoztató** | A lábléc linkjei a `/kapcsolat`-ra mutatnak | `lib/navigation.ts` → `LEGAL_LINKS` + oldalak létrehozása |
| **Képzési időpontok** | `/kepzes/idopontok` — „Időpont egyeztetés alatt” | `IDOPONTOK` tömb a valós naptárral |
| **Űrlap-végpont** | Az űrlapok visszaigazolnak, de nem küldenek | `lib/forms.ts` → `URLAP_VEGPONT` |

A `/kepzes/idopontok` négy városa (Debrecen, Budapest, Szeged, Győr) és az `/eletkepek`
12 képaláírása a forrásprojektből származik, amely maga is helyőrzőnek jelöli őket —
konkrét dátum egyikben sem szerepel.

---

## A dizájnról

A részletes levezetés a **`STYLE-ANALYSIS.md`**-ben van. Röviden:

**Ami közös a Szépítész Műhellyel** — hogy egy márkacsaládnak látsszanak:

- ugyanaz az öt színtoken: `#F9F2ED` púder · `#B98BA5` mályva · `#EFD5C3` barackpír ·
  `#D9B48A` arany · `#2B1E2E` szilva
- ugyanaz a betűtípus-készlet: **Marcellus** (címsor) + **Jost** (törzs)
- ugyanaz a levegősség, konténerszélesség és a fade + felfelé csúszás animáció

**Ami más** — hogy ne ugyanaz legyen:

- **átsúlyozott paletta:** ott a púder a domináns háttér és nagy sötét szilva tömbök
  tagolják; itt fehér + barackpír a domináns felület, sötét tömb nincs, és az **arany**
  az elsődleges akcent (a mályva helyett)
- **kerekebb formák:** 2–2,5 rem sarokkerekítés a 1,5 rem helyett
- **tágabb kiskapitális betűköz:** 0,2 em a 0,14 em helyett, több fehér térrel
- **fémes csillanás:** hajszálvékony arany/rozé elválasztók
- **beleolvadó szekciók:** a meleg tónusú sávok nem éles színblokkok, hanem a szélük
  felé a fehérbe halványulnak (`.szekcio-lagy`, `.szekcio-lagy-meleg`, `.fejlec-lagy`)
- **saját visszatérő elem:** apró **mályva pont** listajelölőként és elválasztóként
  (`components/Pont.tsx`) — a testvéroldal akvarell sávjának megfelelője
- **feltűnően más hero:** ott középre zárt, itt **aszimmetrikus, kétoszlopos**, jobbra
  a hero képpel
- **változatos szekcióritmus:** a szekciók szándékosan nem ugyanazt a sémát ismétlik —
  van kétoszlopos fejléc, oldalra tett cím, lépcsőzetes oszlop és sorszámozott lista

Minden szín és méret **design tokenként** van definiálva (`app/globals.css` → `:root`,
onnan olvassa a `tailwind.config.ts`) — hardcode-olt érték nincs szétszórva a kódban.

### Logó

A `public/logo.png` és `public/logo-mark.png` **bitre azonos** a
`biborkakurta2-hub/lobelle` repó fájljaival — nem lett újrarajzolva vagy átalakítva.
SVG változat nem állt rendelkezésre. A favicon (`app/icon.png`), az iOS ikon
(`app/apple-icon.png`) és az OG-kép (`app/opengraph-image.png`) ebből a logóból generált.

---

## Telepítés Vercelre

A repó importálható a Vercelen, külön beállítás nélkül — a Next.js projektet
automatikusan felismeri (`npm run build`, App Router, statikus kimenet).

Egyetlen környezeti változót érdemes megadni:

| Változó | Érték | Miért |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | az éles cím, pl. `https://lobelle.hu` | Ebből épül a canonical link, a `sitemap.xml` és az OG-URL |

Ha nincs megadva, a `lib/site.ts` a Vercel saját címét használja (`.vercel.app`),
így a `.vercel.app` alatt futó oldal nem hivatkozik tévesen az éles domainre.
Egyéni domain bekötése után állítsd be a változót az éles címre.

## Ellenőrzés

A `scripts/` mappában futtatható ellenőrzők vannak. Előbb indítsd el a buildelt oldalt
(`npm run build && npx next start -p 3111`), majd:

```bash
node scripts/tartalom-ellenorzes.mjs   # a CONTENT-MAP tételeinek megléte a renderelt oldalakon
node scripts/akadalymentesseg.mjs      # heading-hierarchia, alt, űrlapcímkék, fókusz
node scripts/kontraszt.mjs             # WCAG AA kontrasztarányok
node scripts/screenshot.mjs            # screenshotok 1440 / 390 / 360 px szélességen
```

Az akadálymentességi és screenshot-szkript Playwrightot igényel (`npm i -D playwright`).

**Az aktuális állapot:**

- `npm run build` — hibátlan, 25 útvonal statikusan generálva
- tartalmi ellenőrzés — **550 / 550 tétel megvan**
- akadálymentesség — oldalanként pontosan egy `h1`, nincs szintugrás, minden képnek van
  `alt`-ja, minden űrlapmezőnek címkéje; az első Tab a „Ugrás a tartalomra” linkre áll
- kontraszt — minden szöveg megfelel a WCAG AA-nak. Egyetlen kivétel szándékos: a
  `/miert-a-lobelle` és a `/kepzes/privat-oktatas` nagy, mályva `01`–`04` sorszámai
  `aria-hidden` dekorációk egy rendezett listában — a sorrendet a lista szerkezete hordozza
- nincs vízszintes túlcsordulás 360 / 390 / 1440 px szélességen
