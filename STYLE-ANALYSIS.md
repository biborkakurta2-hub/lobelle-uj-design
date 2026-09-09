# STYLE-ANALYSIS.md

A **Szépítész Műhely** (`szepiteszmuhely.vercel.app`) vizuális nyelvének elemzése, és a
belőle levezetett **Lobelle**-irány.

> **Forrás:** a `biborkakurta2-hub/szepiteszmuhely` repó (`8ff2bee`) — `tailwind.config.ts`,
> `app/globals.css`, `components/*`, `app/(nyilvanos)/*`.
> Az élő oldal HTTP-n nem volt elérhető ebből a munkamenetből (egress policy), ezért a
> forráskódból dolgoztam. Mivel a design tokenek ott explicit módon, egy helyen vannak
> definiálva, ez pontosabb is, mint a renderelt oldal visszafejtése.

---

## 1. Színpaletta (pontos hex kódok)

A Szépítész Műhely öt tokenből álló palettát használ, a logó akvarell világából mintázva.
**Ezt az öt színt viszem át változtatás nélkül** — új szín nem kerül be.

| Token | Hex | Szerep a Szépítész Műhelynél |
| --- | --- | --- |
| `puder` | `#F9F2ED` | **Domináns háttérszín**, alapfelület |
| `malyva` | `#B98BA5` | Akcent — sminktetoválás szolgáltatásvonal |
| `barackpir` | `#EFD5C3` | Kártyák, lágy blokkok |
| `arany` | `#D9B48A` | Akcent — piercing szolgáltatásvonal, részletek |
| `szilva` | `#2B1E2E` | Szöveg, **sötét felület** (fejléc-CTA, hero-kártya, lábléc) |

Kiegészítők:

- Tiszta fehér (`#FFFFFF`) váltószekciók háttereként (`bg-white py-20`).
- Áttetsző variánsok: `szilva/80`, `szilva/70`, `szilva/50`, `szilva/15`, `szilva/10`,
  `malyva/20`, `malyva/30`, `barackpir/50`, `puder/85`, `puder/70`, `white/95`.
- **Akvarell gradiens** (a márka jele): `linear-gradient(90deg, #B98BA5, #EFD5C3, #D9B48A)`
  — mindig vízszintes, mályva → barackpír → pezsgőarany.

### Kontraszt (WCAG)

- `szilva` (#2B1E2E) `puder`-en (#F9F2ED): **~14,8:1** — AAA.
- `szilva` fehéren: ~15,9:1 — AAA.
- `puder` a `szilva`-n (invertált): ~14,8:1 — AAA.
- `malyva` (#B98BA5) fehéren: ~2,6:1 — **NEM elég szövegre**, csak dekorációra és nagy
  méretű, nem-kritikus feliratra. A Szépítész Műhely aktív menüpontra használja
  (13px) — ezt a Lobelle-nél nem másolom, nálam a `malyva` és `arany` csak dekoratív
  felület, keret és nagy dekorszám lesz, szöveg nem.
- `arany` (#D9B48A) fehéren: ~1,9:1 — kizárólag dekoráció.

---

## 2. Tipográfia

| | Szépítész Műhely |
| --- | --- |
| Címsor | **Marcellus** (`--font-marcellus`), serif |
| Szövegtörzs | **Jost** (`--font-jost`), sans-serif |
| Betűvastagságok | Jost 300 / 400 / 500, Marcellus 400 (egyetlen vastagság) |
| Alapértelmezett törzs | `font-light` (300) — a `body` globálisan könnyű |
| `strong` | `font-medium` (500), nem bold |

Fájlok: `app/fonts/Marcellus-400.woff2`, `Jost-300/400/500.woff2` (self-hosted woff2).

### Méretskála (a tényleges használat alapján)

| Elem | Mobil | Desktop |
| --- | --- | --- |
| `h1` | `text-4xl` (2.25rem) | `sm:text-5xl` → `md:text-6xl` (3.75rem) |
| `h2` | `text-3xl` | `sm:text-4xl` |
| `h3` / kártyacím | `text-xl` – `text-2xl` | – |
| Kiemelt bevezető | `text-lg` – `text-xl` | `sm:text-2xl` |
| Törzsszöveg | alap (1rem), `leading-relaxed` | – |
| Kiskapitális címke (`.cimke`) | `text-xs` (0.75rem) – `text-[13px]` | – |

### Betűköz

- `tracking-cim` = **0.14em** — a `.cimke` osztályhoz (uppercase kiskapitálisok).
- `tracking-gomb` = **0.12em** — gombfeliratokhoz, menüpontokhoz.
- A `.cimke` segédosztály: `font-heading uppercase tracking-cim`.

### Sortávolság

`leading-tight` a nagy címeknél, `leading-snug` a közepes címeknél, `leading-relaxed`
a törzsszövegnél.

---

## 3. Térkezelés

| | Érték |
| --- | --- |
| Konténer (`.konteiner`) | `mx-auto w-full max-w-6xl px-5 sm:px-8` — **max 1152px** |
| Szekció függőleges padding | `py-20` (5rem) mobilon, `sm:py-28` (7rem) desktopon |
| Kisebb szekció | `py-14` – `py-16` |
| Rácsok | `md:grid-cols-2`, `md:grid-cols-3`, `gap-10` – `gap-12` |
| Elemköz szekción belül | `mt-4` → `mt-6` → `mt-8` → `mt-10` ritmus |
| Horgony-eltolás | `[id] { scroll-margin-top: 6rem }` a sticky fejléc miatt |
| Fejléc magassága | `h-20` (5rem), sticky, `bg-white/95 backdrop-blur` |

---

## 4. Komponens-anatómia

### Gombok

Elsődleges (fejléc-CTA):
```
rounded-full bg-szilva px-5 py-2.5 text-[13px] tracking-gomb text-puder
shadow-lagy transition-colors hover:bg-malyva hover:text-white
+ .cimke (font-heading uppercase tracking-cim)
```
Nagy CTA: `rounded-full bg-akvarell px-7 py-3.5 text-sm tracking-gomb text-szilva
transition-transform hover:scale-[1.03]`.

**Jellemzők:** teljesen lekerekített (`rounded-full`), kiskapitális felirat, tág betűköz,
hover = színváltás vagy enyhe nagyítás.

### Kártyák

- Sugár: **`rounded-3xl`** (1.5rem) a nagy kártyáknál, `rounded-2xl` a közepeseknél,
  `rounded-xl` a legördülő menünél.
- Árnyék: `shadow-lagy` = `0 10px 30px -12px rgba(43, 30, 46, 0.18)`;
  `shadow-kartya` = `0 6px 24px -10px rgba(43, 30, 46, 0.14)`.
- Keret: `border border-szilva/10`.
- Kiemelt kártya: sötét `bg-szilva` felület `px-7 py-10 sm:px-12`, világos szöveggel.

### Navigáció

Sticky, fehér/95 + backdrop-blur, 5rem magas. Desktopon vízszintes lista `gap-7`,
kiskapitális 13px-es linkekkel, egy legördülő almenüvel (`rounded-xl`, `shadow-lagy`).
Mobilon: kiemelt CTA + hamburger (3 vonal, X-be forduló animáció), lenyíló teljes menü.
**A fejléc alján 1px-es akvarell gradiens sáv** mint márkaelem.

### Lábléc

Sötét `bg-szilva text-puder`, tetején akvarell sáv, `grid md:grid-cols-3`, `py-14`.

### Elválasztó / márkaelem

`WatercolorBar` — vízszintes akvarell gradiens csík, lekerekítve. Ez a Szépítész Műhely
visszatérő dekoratív motívuma.

---

## 5. Animációk, scroll-effektek, hover

| | |
| --- | --- |
| Belépő animáció | `felszallas`: `opacity 0 → 1`, `translateY(18px) → 0`, **0.7s ease-out both** |
| Lépcsőzetes időzítés | `[animation-delay:120ms]`, `240ms`, `300ms`, `360ms`, `420ms`, `480ms` |
| Scroll-reveal | `Reveal` komponens `delay` propokkal (`120`, stb.) |
| Hover | `transition-colors` színváltás; nagy CTA-n `hover:scale-[1.03]` |
| Görgetés | `html { scroll-behavior: smooth }` |
| Akadálymentesség | `@media (prefers-reduced-motion: reduce)` — minden animáció kikapcsol |
| Dekoratív háttér | Elmosott színfoltok: `absolute -right-32 -top-32 h-96 w-96 rounded-full bg-barackpir/50 blur-3xl` |

---

## 6. Képkezelés

- Arány: portré `800×1000` (4:5) a bemutatkozó fotónál, galériában vegyes.
- Lekerekítés: **`rounded-3xl`** + `shadow-lagy`.
- `next/image` `sizes="(max-width: 768px) 100vw, 50vw"`.
- Saját `SiteImage` wrapper, `placeholderLabel` fallbackkel, ha a kép hiányzik.
- Overlay: nincs sötétítő overlay a képeken; a hangulatot az elmosott színfoltok adják.

---

# 7. A LOBELLE-IRÁNY — mit tartok meg, mit változtatok

## Amit változtatás nélkül átveszek

- **Az öt színtoken pontosan ugyanaz** (`#F9F2ED`, `#B98BA5`, `#EFD5C3`, `#D9B48A`, `#2B1E2E`).
- **Ugyanaz a betűtípus-készlet**: Marcellus (címsor) + Jost (törzs).
- Ugyanaz a levegősség: `max-w-6xl` konténer, `py-20 / sm:py-28` szekciópadding.
- Ugyanaz a gomb-alapforma (`rounded-full`, kiskapitális, tág betűköz) és
  kártya-alapforma (lekerekített, lágy árnyék, hajszálvékony keret).
- Ugyanaz a belépő animáció karaktere (fade + felfelé csúszás, lépcsőzetes késleltetés)
  és a `prefers-reduced-motion` tisztelete.

## Amit megváltoztatok — csajosabb, finomabb, ékszeresebb

### a) A paletta átsúlyozása (új szín nélkül)

| | Szépítész Műhely | **Lobelle** |
| --- | --- | --- |
| Domináns felület | `puder` (#F9F2ED) | **fehér + `barackpir` (#EFD5C3)** váltakozva |
| Nagy kártya / kiemelt blokk | sötét `szilva` tömb | **világos `puder` és `barackpir` tömb** |
| `puder` szerepe | alap háttér | **kártya- és másodlagos felület** (lefokozva akcentszerepbe) |
| Elsődleges akcent | `malyva` | **`arany` (#D9B48A)** — a titánium-ékszer fémes karaktere |
| Másodlagos akcent | `arany` | **`malyva`** — rózsás, feminin részletek |
| `szilva` | nagy sötét felületek | **csak szöveg + ritka, vékony akcent**; nagy sötét tömb nincs |

Ezzel teljesül a kérés: ami ott domináns háttér (`puder`), az itt visszaszorul akcentbe;
ami ott kártyaszín (`barackpir`), az itt nagy felület lesz — és összességében **több
világos, meleg, rózsás-púderes felület** kerül az oldalra.

### b) Finom fémes csillanás

- **Arany hajszálvonal elválasztó**: `linear-gradient(90deg, transparent, #D9B48A, transparent)`,
  1px magas — a Szépítész Műhely tömör akvarell sávja helyett.
- **Rozé–arany hajszálvonal** variáns: `linear-gradient(90deg, transparent, #B98BA5, #D9B48A, transparent)`.
- **Nagyon halvány fémes gradiensek** felületeken:
  `linear-gradient(135deg, #FFFFFF, #F9F2ED 45%, #EFD5C3)` — alig érzékelhető csillanás.
- Mind a meglévő palettából.

### c) Lágyabb, kerekebb formák

| | Szépítész Műhely | Lobelle |
| --- | --- | --- |
| Kártya sugár | `rounded-3xl` (24px) | **`rounded-[2rem]` – `rounded-[2.5rem]`** (32–40px) |
| Gomb | `rounded-full`, `py-2.5` – `py-3.5` | `rounded-full`, **`py-3.5` – `py-4`**, tágabb `px` |
| Kép | `rounded-3xl` | **`rounded-[2rem]`, hero-kép aszimmetrikus sugárral** |

### d) Feminin tipográfiai finomítás

- Nagy címeknél **vékonyabb súly**: a Marcellus egy vastagságú, ezért a `h1`
  `font-light`-tal futó Jost-alcímmel és **nagyobb `leading`-gel** lélegzik.
- **Tágabb kiskapitális betűköz**: `tracking-cim` 0.14em → **0.2em** a Lobelle-nél
  (`--tracking-cimke: 0.2em`).
- **Több fehér tér**: szekciópadding `py-24 / sm:py-32` (a Szépítész Műhely `py-20 / sm:py-28`
  helyett), és nagyobb `mt-` ritmus a szekciókon belül.

### e) A visszatérő dekoratív motívum

**A négyágú csillanás (`✦`)** — ez a Lobelle logójában is szerepel (a fül-szimbólum mellett),
tehát nem kitalált elem, hanem a márka sajátja. Megjelenik:

- szekciócímkék előtt,
- listaelemek jelölőjeként,
- a hero-ban szórtan, halvány arany színben,
- kártyák sarkában finom díszként.

A Szépítész Műhelynek ilyen motívuma nincs (ott az akvarell sáv a jel) — **ez lesz az
egyik dolog, ami itt van meg, ott nincs.** Emellé egy **finom ív** (`arc`) társul: a hero
és a kiemelt szekciók hátterében egy nagyon halvány, nagy sugarú arany körív.

### f) Az egyetlen feltűnő különbség: a hero elrendezése

| Szépítész Műhely | Lobelle |
| --- | --- |
| **Középre zárt** hero: logó/címke középen, `h1` középen, alatta középre zárt sötét kártya, majd középre zárt CTA | **Aszimmetrikus, kétoszlopos** hero: balra a szöveg-oszlop (címke, `h1`, bevezető, két CTA egymás mellett), jobbra egy nagy, lekerekített, eltolt képfelület a logóval és a csillanás-motívummal; a jobb oszlop **függőlegesen eltolva** (`lg:translate-y-8`), a háttérben halvány arany ív |

Ez az a **feltűnő** eltérés, ami első pillantásra megkülönbözteti a két oldalt; minden
más eltérés (paletta-súlyozás, sugarak, betűköz, motívum) árnyalatnyi marad.
