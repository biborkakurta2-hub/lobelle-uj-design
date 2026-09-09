# CONTENT-MAP.md

A Lobelle oldal teljes tartalmi leltára — **ez az ellenőrzőlista**. A build végén minden
tétel mellett pipa kell álljon.

---

## ⚠️ Forrás és hiányok — olvasd el először

**Az élő `lobelle.hu` ebből a munkamenetből nem volt elérhető** (a hálózati egress policy
403-mal utasította el; ugyanígy a `szepiteszmuhely.vercel.app` és a `lobelle.vercel.app`).

Ezért a tartalom forrása a **`biborkakurta2-hub/lobelle` repó** (`45cb648`) — ez az a
projekt, amely a `lobelle.vercel.app`-ot kiszolgálja, és amelynek a szövegei a Lobelle
márka brosúrájából és a lobelle.hu-ról származnak. A `lobelle-Shopify` repó üres.

### Amit emiatt NEM tudok átvenni (nem pótlom kitalált tartalommal)

| Hiány | Állapot | Mit teszek |
| --- | --- | --- |
| **Termékadatok** (nevek, árak, variánsok, termékleírások) | A forrásrepó `data/products.json` fájlja **üres** — a `npm run scrape` sosem futott le, mert élő lobelle.hu kell hozzá | A kategóriaoldalak a forrásrepóval azonos, őszinte **„Feltöltés alatt”** állapotot mutatják. Termékadat-struktúra (`data/products.ts`) készen áll a feltöltésre. |
| **Termékfotók** | A forrásrepó `public/` mappájában **csak a két logófájl** van | Nem teszek be kitalált fotót; ahol kép lenne, ott jelölt helyőrző áll |
| **ÁSZF / Adatkezelési / Elállási tájékoztató szövege** | A forrásrepóban ezek csak láblécbeli linkek, a `/kapcsolat`-ra mutatnak — dokumentum nincs | Ugyanígy hagyom, jelölve. **Pótolandó.** |

### Amit a forrásrepó maga is helyőrzőnek jelöl (nem lobelle.hu-tartalom)

- **Képzési időpontok** (`/kepzes/idopontok`): a forrásfájl kommentje szerint
  `PLACEHOLDER időpontok — a valós képzési naptárra cserélendők`. A négy város
  (Debrecen, Budapest, Szeged, Győr) közül csak a debreceni címe valós.
- **Életképek galéria** (`/eletkepek`): 12 db képaláírás valós fotó nélkül,
  a forrásfájlban `PLACEHOLDER galéria` megjelöléssel.

Ezeket **átveszem, de nem bővítem** — és a README-ben is jelölöm őket.

---

## Globális elemek

### Navigáció (fejléc) — `lib/navigation.ts`

- [x] **Termékek** (lenyíló)
  - [x] Standard ékszerek korosztály nélkül → `/termekek/standard-ekszerek`
  - [x] Gyerek ékszerek → `/termekek/gyerek-ekszerek`
  - [x] Baba ékszerek dobozzal együtt → `/termekek/baba-ekszerek`
  - [x] Orr piercingek → `/termekek/orr-piercingek`
  - [x] Kellékek, eszközök → `/termekek/kellekek-eszkozok`
  - [x] Fül- és orrlyukasztó készülék → `/termekek/ful-es-orrlyukaszto-keszulek`
- [x] **Képzés** (lenyíló)
  - [x] Képzés leírása → `/kepzes`
  - [x] Privát oktatás → `/kepzes/privat-oktatas`
  - [x] Képzés időpontok, helyszínek → `/kepzes/idopontok`
  - [x] Már füllyukasztó szakember vagyok → `/kepzes/szakembereknek`
- [x] **Rólunk** (lenyíló)
  - [x] Rólunk → `/rolunk`
  - [x] Miért a Lobelle? → `/miert-a-lobelle`
  - [x] Életképek → `/eletkepek`
  - [x] Gyakori kérdések → `/gyakori-kerdesek`
- [x] **Kapcsolat** → `/kapcsolat`
- [x] Telefonszám CTA-ként a fejlécben: `+36 30 483 3814`
- [x] Kosár link
- [x] Mobil: összecsukható menü, Escape-re zár

### Kapcsolati adatok (mindenhol)

- [x] Telefon: **+36 30 483 3814** (`tel:+36304833814`)
- [x] Email: **rendeles@lobelle.hu**
- [x] Cím: **4031 Debrecen, Széchenyi u. 62. fszt. 26.**
- [x] Facebook: `https://www.facebook.com/lobelle.hu`
- [x] Instagram: `https://www.instagram.com/lobelle.hu`
- [x] Felnőttképzési nyilvántartási szám: **B/2021/000190**

### Lábléc

- [x] Logó
- [x] Elérhetőségek blokk (cím, telefon, email)
- [x] Termékek menücsoport (6 link)
- [x] Képzés menücsoport (4 link)
- [x] Rólunk menücsoport (4 link)
- [x] Jogi linkek: ÁSZF · Adatkezelési tájékoztató · Elállási tájékoztató ⚠️ *dokumentum nincs*
- [x] Facebook + Instagram ikonos link
- [x] `© 2026 Lobelle · Minden jog fenntartva`

---

## 1. Főoldal — `/`

**Metadata:** title `Lobelle – Az innovatív füllyukasztás új generációja` ·
description `Magyarországon egyedülálló, implantátum minőségű titánium fülbelövő rendszerek és füllyukasztó szakemberképzés. ASTM F136 szabvány, Grade 23 titán, nikkelmentes ékszerek.`

- [x] **Hero** ⭐ *(itt tér el feltűnően: aszimmetrikus, nem középre zárt)*
  - [x] Logó
  - [x] Címke: `Üdvözlünk a Lobelle oldalán`
  - [x] H1: **`Az innovatív füllyukasztás új generációja`**
  - [x] Hármas felirat: `Biztonság` ✦ `Innováció` ✦ `Szakmaiság`
  - [x] CTA: `Fedezd fel a rendszert` → `/termekek/ful-es-orrlyukaszto-keszulek`
  - [x] CTA: `Jelentkezz képzésre` → `/kepzes`
- [x] **A három pillér**
  - [x] Címke `A márkáról`, cím `Nem csupán rendszer. Szemlélet.`
  - [x] Bevezető: `A Lobelle ott kezdődik, ahol a kompromisszum véget ér. Magyarországon egyedülálló, implantátum minőségű titánium fülbelövő rendszereket adunk a szakemberek kezébe — és melléjük azt a tudást, amitől a szolgáltatásuk valóban prémium lesz.`
  - [x] `Biztonság` — `ASTM F136 szabványú, Grade 23 titán — ugyanaz az anyag, amelyet orvosi implantátumokhoz használnak.`
  - [x] `Innováció` — `Rendkívül vékony kivitel és lekerekített hátsó kapocs: kíméletes lyukasztás, kényelmes viselet babáknak és felnőtteknek.`
  - [x] `Szakmaiság` — `Nem csak forgalmazunk — oktatunk is. Képzett szakemberek, valós gyakorlati tudás, folyamatos támogatás.`
- [x] **Titánium előnyök** — címke `Anyag és technológia`, cím `A titánium ereje`
  - [x] Bevezető: `A titánium jelenleg a világ egyik legbiztonságosabb fémje füllyukasztáshoz. Nem véletlen, hogy orvosi implantátumoknál is ezt használják: gyorsabb gyógyulás, kevesebb gyulladás, minimális irritáció.`
  - [x] `Teljesen nikkelmentes` — `A leggyakoribb allergén nélkül — érzékeny bőrnek is.`
  - [x] `Biokompatibilis` — `A szervezet sajátjaként fogadja, nem lép reakcióba a bőrrel.`
  - [x] `Nem oxidálódik` — `Évek múlva is ugyanolyan, mint az első napon.`
  - [x] `Nem korrodál` — `Víz, izzadság, kozmetikum — semmi nem árt neki.`
  - [x] `Nem színeződik el` — `Tartós, elegáns megjelenés kompromisszum nélkül.`
  - [x] `Kíméletes kivitel` — `Rendkívül vékony szár — a lyukasztás alig érezhető.`
- [x] **ASTM F136 kiemelt sáv**
  - [x] `Prémium garancia`
  - [x] `ASTM F136 szabvány · Grade 23 implantátum minőségű titán`
  - [x] `Szigorúan ellenőrzött, steril termékek — kompromisszumok nélkül.`
- [x] **Termékkategória-rács** — címke `Kollekció`, cím `Termékkínálat`
  - [x] Bevezető: `Minden darab ugyanabból az alapanyagból, ugyanazzal az igényességgel készül — a legkisebbeknek szánt első fülbevalótól a professzionális eszközökig.`
  - [x] 6 kategóriakártya rövid leírással + `Megnézem`
  - [x] Záró sor: `A prémium vendég prémium minőséget vár.`
- [x] **Képzés teaser** — címke `Oktatás`, cím `Fül- és orrlyukasztó szakemberképzés`
  - [x] Bevezető: `Intenzív, gyakorlatorientált képzés 2–3 órában — előképzettség nélkül. Kozmetikusoknak és mindazoknak, akik professzionális szolgáltatással bővítenék a kínálatukat, és akár másnap dolgozni szeretnének.`
  - [x] `Elméleti alapozás: anatómia, higiénia, anyagtudomány, jogi háttér`
  - [x] `Gyakorlati tréning speciális gyakorlófülön, oktatói felügyelettel`
  - [x] `Közel 70 000 Ft értékű kezdőcsomag a képzés részeként`
  - [x] `Hivatalos, FAR-regisztrált tanúsítvány`
  - [x] CTA `Képzés részletei` + `Időpontok, helyszínek`
  - [x] Idézetkártya: `„Ha egyszer titániumot használsz, nem térsz vissza máshoz.”` / `Ahol a profizmus kezdődik`
- [x] **Hírlevél** — címke `Hírlevél`, cím `Maradjunk kapcsolatban`
  - [x] `Iratkozz fel, hogy elsőként értesülj az új kollekciókról, képzési időpontokról és szakmai újdonságokról.`
  - [x] Feliratkozó űrlap

---

## 2. Termékkategóriák — `/termekek/[slug]` (6 oldal)

Minden oldal: PageHero (címke `Kollekció` + cím + hosszú leírás) → terméklista **vagy**
„Feltöltés alatt” blokk → záró CTA (`Kérdésed van a kollekcióról, vagy nagyobb mennyiséget rendelnél?` + `Kapcsolatfelvétel`).

- [x] **`/termekek/standard-ekszerek`** — `Standard ékszerek`
  - rövid: `Korosztály nélkül — letisztult formák minden napra.`
  - hosszú: `Implantátum minőségű, ASTM F136 szabványú Grade 23 titánból készült fülbevalók, amelyeket korosztálytól függetlenül bárki biztonsággal viselhet. Teljesen nikkelmentesek, nem oxidálódnak és nem színeződnek el — a rendkívül vékony szár és a lekerekített hátsó kapocs pedig a mindennapi viseletet is kényelmessé teszi.`
- [x] **`/termekek/gyerek-ekszerek`** — `Gyerek ékszerek`
  - rövid: `Játékos, mégis elegáns darabok a legkisebbeknek.`
  - hosszú: `Gyerekeknek tervezett titánium fülbevalók: játékos formák, biztonságos, lekerekített hátsó kapocs, amely alvás közben sem szúr. A nikkelmentes, biokompatibilis anyag az érzékeny gyerekbőrnek is kíméletes — a szülő nyugalma pedig nem extra, hanem alapfelszereltség.`
- [x] **`/termekek/baba-ekszerek`** — `Baba ékszerek díszdobozzal`
  - rövid: `Elegáns díszdobozzal — ajándéknak is tökéletes.`
  - hosszú: `Az első fülbevaló egyszeri alkalom — ehhez méltó kivitelben kínáljuk. Minden baba ékszer elegáns díszdobozban érkezik, így ajándéknak is tökéletes. A rendkívül vékony titánium szár kíméletes lyukasztást tesz lehetővé, a lekerekített kapocs pedig a legkisebbeknek is kényelmes.`
- [x] **`/termekek/orr-piercingek`** — `Orr piercingek`
  - rövid: `Precíz, kíméletes titánium orrékszerek.`
  - hosszú: `Titánium orrékszerek, amelyek ugyanabból az implantátum minőségű alapanyagból készülnek, mint a fülbevalóink. A biokompatibilis, nikkelmentes titán gyorsabb gyógyulást és kevesebb irritációt jelent — pontosan ott, ahol a bőr a legérzékenyebb.`
- [x] **`/termekek/kellekek-eszkozok`** — `Kellékek és eszközök`
  - rövid: `Utóápolók, csipeszek és minden, ami a munkához kell.`
  - hosszú: `Minden, ami a professzionális munkához kell: utóápoló oldatok, speciális eltávolító csipeszek, sebészeti jelölőtollak, fertőtlenítők és gyakorló kellékek. Ugyanazzal az igényességgel válogatva, mint az ékszereink — mert a prémium szolgáltatás a részleteken múlik.`
- [x] **`/termekek/ful-es-orrlyukaszto-keszulek`** — `Fül- és orrlyukasztó készülék`
  - rövid: `A Lobelle-rendszer szíve: professzionális készülék.`
  - hosszú: `A Lobelle-rendszer szíve: professzionális fül- és orrlyukasztó készülék, amelyet kifejezetten a rendkívül vékony titánium ékszereinkhez terveztek. A precíz mechanika kíméletes, alig érezhető lyukasztást tesz lehetővé — babáknál és felnőtteknél egyaránt.`

- [x] „Feltöltés alatt” blokk szövege: `A kategória termékei hamarosan elérhetők.` /
  `Amíg a webshop feltöltése tart, telefonon és emailben is szívesen adunk tájékoztatást a kínálatról, az árakról és a szállításról.` / CTA `Érdeklődöm a kategóriáról`
- [x] Terméklista rendezés: `Alapértelmezett`, `Ár szerint növekvő`, `Ár szerint csökkenő`, `Név szerint`
- [x] Termékdetail útvonal `/termekek/[slug]/[product]` (adat érkezésekor él)

---

## 3. Képzés — `/kepzes`

**Metadata:** `Fül- és orrlyukasztó szakemberképzés` · `Intenzív, gyakorlatorientált fül- és orrlyukasztó képzés 2–3 órában, előképzettség nélkül. Közel 70 000 Ft értékű kezdőcsomag, hivatalos FAR-regisztrált tanúsítvány (B/2021/000190).`

- [x] PageHero: címke `Oktatás`, cím `Fül- és orrlyukasztó szakemberképzés` + bevezető
- [x] **Elméleti alapozás** (címke `Első rész`)
  - [x] `Anatómia` — `Idegek, erek, porcszövetek — hol szabad és hol tilos szúrni.`
  - [x] `Higiénia` — `Aszeptikus munkaterület, keresztfertőzések megelőzése.`
  - [x] `Anyagtudomány` — `Tű vs. készülék; titán, orvosi fém, arany különbségei.`
  - [x] `Jogi háttér` — `Beleegyező nyilatkozatok, korhatárok, felelősség.`
- [x] **Gyakorlati tréning** (címke `Második rész`)
  - [x] `Jelölés` — `A tökéletes szimmetria megtervezése.`
  - [x] `Szúrási gyakorlat` — `Speciális gyakorlófülön, oktatói felügyelettel.`
  - [x] `Ékszerválasztás` — `Megfelelő anyag és méret minden vendéghez.`
  - [x] `Utóápolás` — `Teendők gyulladás vagy allergia esetén.`
- [x] **Kezdőcsomag** — `Közel 70 000 Ft értékű kezdőcsomag` + `Nem csak tudást kapsz, hanem mindent, amivel már a képzés másnapján fogadhatod az első vendégeidet.`
  - [x] Prémium füllyukasztó eszköz
  - [x] Prémium orrlyukasztó eszköz
  - [x] Utóápoló
  - [x] Speciális eltávolító csipeszek
  - [x] Sebészeti jelölőtoll
  - [x] Gyakorló ékszerek
  - [x] Hordtáska és tükör
  - [x] Termékkatalógus
  - [x] Hozzájárulási nyilatkozat
- [x] **FAR-tanúsítvány sáv** — `Hivatalos tanúsítvány` / `A képzés hivatalos, FAR-regisztrált tanúsítvánnyal zárul.` / `Felnőttképzési nyilvántartási szám: B/2021/000190`
- [x] **Kinek ajánljuk?**
  - [x] `Kozmetikusoknak` — `Meglévő vendégkörödnek kínálhatsz új, keresett szolgáltatást — a képzés után akár másnap.`
  - [x] `Szépségipari szakembereknek` — `Fodrászként, műkörmösként vagy sminkesként is bővítheted a kínálatodat professzionális füllyukasztással.`
  - [x] `Pályakezdőknek` — `Előképzettség nélkül is elsajátíthatod a szakmát — az elméleti és gyakorlati alapokat tőlünk kapod meg.`
  - [x] `Szakmaváltóknak` — `Saját szolgáltatást indítanál? A kezdőcsomaggal és a tanúsítvánnyal minden eszközöd megvan az induláshoz.`
- [x] **Záró CTA** — `Kezdd el még ebben a hónapban.` / `Nézd meg az aktuális időpontokat és helyszíneket, vagy kérdezz tőlünk bátran — a képzésekkel kapcsolatban is szívesen segítünk.` / `Jelentkezem a képzésre` + `Inkább privát oktatást kérek`

## 3.a Privát oktatás — `/kepzes/privat-oktatas`

- [x] PageHero: `Privát oktatás` + `Egyéni képzés azoknak, akik a csoportos időpontok helyett a saját tempójukban, teljes oktatói figyelem mellett sajátítanák el a professzionális fül- és orrlyukasztást.`
- [x] `Miért érdemes privát képzést választanod?`
  - [x] `Teljes oktatói figyelem` — `Az oktató csak veled foglalkozik — minden kérdésedre azonnal választ kapsz, és annyi gyakorlási lehetőséged van, amennyire szükséged van.`
  - [x] `Hozzád igazított időpont` — `Nem kell csoportos időponthoz alkalmazkodnod: a képzés napját és időpontját közösen egyeztetjük.`
  - [x] `Saját tempó` — `Ott időzünk el, ahol neked fontos — legyen az a jelölés precizitása, a babák füllyukasztása vagy az utóápolási tanácsadás.`
  - [x] `Ugyanaz a teljes csomag` — `A privát képzés is a közel 70 000 Ft értékű kezdőcsomaggal és hivatalos, FAR-regisztrált tanúsítvánnyal zárul.`
- [x] Érdeklődő űrlap — `Kérj egyéni időpontot` / `Írd meg, mikor érnél rá, és milyen előzetes tapasztalattal rendelkezel — minden mást mi intézünk.` / mezőcímke `Mikor érnél rá, és mit szeretnél tanulni?` / gomb `Érdeklődés elküldése`

## 3.b Képzés időpontok, helyszínek — `/kepzes/idopontok`

- [x] PageHero + `Válaszd ki a hozzád legközelebbi helyszínt és a neked megfelelő időpontot. A képzés 2–3 órás, és a kezdőcsomagot a helyszínen kapod meg.`
- [x] ⚠️ 4 helyszínkártya (Debrecen / Budapest / Szeged / Győr) — mezők: Cím, Dátum, Kezdés, Létszám + `Jelentkezem` gomb *(a forrásrepó is PLACEHOLDER-ként jelöli)*
- [x] Záró: `Nem találsz megfelelő időpontot, vagy a saját városodba szerveznél képzést?` + `Privát oktatást kérek` / `Írok nektek`

## 3.c Már füllyukasztó szakember vagyok — `/kepzes/szakembereknek`

- [x] PageHero: `Gyakorló szakemberként is van helyed a Lobelle-nél: regisztrálj, és dolgozz Magyarországon egyedülálló, implantátum minőségű titánium rendszerrel — kedvezményes feltételekkel.`
- [x] `Mit kapsz a szakmai regisztrációval?`
  - [x] `Kedvezményes vásárlás` — `A Lobelle tanfolyam elvégzése után minden termékünket kedvezményes szakmai áron vásárolhatod meg — ékszereket, készülékeket és kellékeket egyaránt.`
  - [x] `Elsőbbségi értesítés` — `Elsőként értesülsz az új kollekciókról és a készletre érkező termékekről, így a vendégeidnek mindig a legfrissebb kínálatot mutathatod.`
  - [x] `Folyamatos szakmai támogatás` — `Elakadtál egy esetnél, vagy tanácsra van szükséged? Regisztrált szakemberként közvetlen szakmai támogatást kapsz tőlünk.`
  - [x] `Átállás titániumra` — `Ha eddig más rendszerrel dolgoztál, segítünk az átállásban — eszközválasztásban, technikában és a vendégkommunikációban is.`
- [x] Regisztrációs űrlap — `Regisztrálj szakemberként` / `Írd meg, mióta és milyen rendszerrel dolgozol — felvesszük veled a kapcsolatot a szakmai feltételekkel.` / mezőcímke `Mióta dolgozol füllyukasztóként, milyen rendszert használsz?` / gomb `Regisztrációs igény elküldése`

---

## 4. Rólunk — `/rolunk`

- [x] PageHero: címke `A márkáról`, cím `Nem csupán rendszer. Szemlélet.`, alcím `A Lobelle ott kezdődik, ahol a kompromisszum véget ér.`
- [x] Bekezdés 1: `Magyarországon egyedülálló, implantátum minőségű titánium fülbelövő rendszereket adunk a szakemberek kezébe — és melléjük azt a tudást, amitől a szolgáltatásuk valóban prémium lesz. Nálunk a prémium alapanyag, a tudatos választás és a szakmai háttér egy helyen találkozik.`
- [x] Bekezdés 2: `Az alapanyagban nem ismerünk kompromisszumot: minden ékszerünk ASTM F136 szabványú, Grade 23 titánból készül — ugyanabból az anyagból, amelyet orvosi implantátumokhoz használnak. Teljesen nikkelmentes, biokompatibilis, nem oxidálódik és nem színeződik el, ezért a legkisebbeknek is biztonsággal ajánljuk.`
- [x] Bekezdés 3: `De a Lobelle nem áll meg a terméknél. Nem csak forgalmazunk — oktatunk is: gyakorlatorientált szakemberképzésünkön kozmetikusok és szakmaváltók sajátítják el a professzionális fül- és orrlyukasztást, hivatalos, FAR-regisztrált tanúsítvánnyal. A képzés után sem engedjük el a kezüket: folyamatos szakmai támogatást és kedvezményes vásárlási lehetőséget kapnak.`
- [x] Bekezdés 4: `Küldetésünk egyszerű: hogy Magyarországon a füllyukasztás ne rutinmunka legyen, hanem prémium szolgáltatás — biztonságos anyagokkal, képzett szakemberekkel és olyan odafigyeléssel, amit minden vendég megérdemel.`
- [x] Idézetkártya: `„Ha egyszer titániumot használsz, nem térsz vissza máshoz.”` / `Lobelle — ahol a profizmus kezdődik`
- [x] Záró szekció: `Ismerj meg minket közelebbről` / `Így dolgozunk` / `Nézd meg a négy pillérünket, vagy böngéssz az életképeink között.` + `Miért a Lobelle?` / `Életképek`

## 5. Miért a Lobelle? — `/miert-a-lobelle`

- [x] PageHero: címke `Négy pillér`, cím `Miért a Lobelle?`, alcím `Négy elv, amelyből soha nem engedünk — bármit is hoz a divat vagy a piac.`
- [x] `01 Ultra-hipoallergén` — `Implantátum minőségű titán, teljesen nikkelmentesen. A legbiztonságosabb választás — a legkisebbeknek is.`
- [x] `02 Oktatói háttér` — `Nem csak forgalmazunk, értünk is hozzá. Tapasztalt oktatók kísérnek az első lépésektől a profi szintig.`
- [x] `03 Prémium garancia` — `Szigorúan ellenőrzött, steril termékek, ASTM F136 szabvány szerint. Minőség, kompromisszumok nélkül.`
- [x] `04 Személyes figyelem` — `Legyen szó kezdő szettről vagy szakmai váltásról — minden lépésnél számíthatsz ránk.`
- [x] Záró idézet: `„A minőség nem luxus. A biztonság nem opció. A szakmaiság nem kompromisszum kérdése.”` / `Lobelle — ahol a profizmus kezdődik` / CTA `Csatlakozz hozzánk`

## 6. Életképek — `/eletkepek`

- [x] PageHero: címke `Galéria`, cím `Életképek`, alcím `Pillanatok a képzésekről, a műhelyünkből és a mindennapjainkból — mert a szakmaiság képeken is látszik.`
- [x] ⚠️ 12 képaláírás valós fotó nélkül *(a forrásrepó is PLACEHOLDER-ként jelöli)*:
  Képzés közben · Gyakorlati tréning · A kezdőcsomag · Titánium kollekció · Babafül lyukasztás ·
  A készülék közelről · Oktatónk munka közben · Elégedett vendég · Díszdobozos baba szett ·
  Műhelypillanat · Tanúsítvány átadás · A Lobelle csapat

## 7. Gyakori kérdések — `/gyakori-kerdesek`

- [x] PageHero: címke `Segítünk eligazodni`, cím `Gyakori kérdések`, alcím `Összegyűjtöttük a leggyakrabban felmerülő kérdéseket a füllyukasztásról, a titániumról és az utóápolásról. Ha nem találod a választ, keress minket bátran.`
- [x] 10 kérdés-válasz akkordionban (teljes szöveggel):
  - [x] `Fáj a füllyukasztás?`
  - [x] `Mennyi a gyógyulási idő?`
  - [x] `Hány éves kortól lyukasztható a babák füle?`
  - [x] `Miben más a titán, mint az orvosi fém?`
  - [x] `Hogyan ápoljam a friss fül-lyukat?` *(utóápolási útmutató)*
  - [x] `Mi a helyzet, ha allergiás vagyok a fémekre?`
  - [x] `Van korhatára a füllyukasztásnak?`
  - [x] `Hogyan foglalhatok időpontot?`
  - [x] `Elmozdulhat vagy kilazulhat az ékszer a gyógyulás alatt?`
  - [x] `Mit tegyek, ha begyullad a lyukasztás helye?`
- [x] Záró: `Nem találtad meg a választ a kérdésedre?` + CTA `Tedd fel nekünk`
- [x] FAQPage JSON-LD

## 8. Kapcsolat — `/kapcsolat`

- [x] PageHero: `Kapcsolatfelvétel` + `Kérdésed van a termékekről, a képzésről vagy rendelnél? Írj nekünk, vagy hívj minket — munkanapokon rövid időn belül válaszolunk.`
- [x] `Írj nekünk üzenetet` — űrlap mezői:
  - [x] `Név` *(kötelező)* — hiba: `A név megadása kötelező.`
  - [x] `Email cím` *(kötelező)* — hibák: `Az email cím megadása kötelező.` / `Kérjük, érvényes email címet adjon meg.`
  - [x] `Telefonszám (opcionális)`
  - [x] `Üzenet`
  - [x] GDPR checkbox: `Elolvastam és elfogadom az adatkezelési tájékoztatót, hozzájárulok adataim kapcsolatfelvétel céljából történő kezeléséhez.` — hiba: `A folytatáshoz el kell fogadnia az adatkezelési tájékoztatót.`
  - [x] Gomb `Üzenet küldése` / `Küldés folyamatban`
  - [x] Siker: `Köszönjük` / `Üzenetét megkaptuk.` / `Munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségek egyikén.`
  - [x] Hiba: `Az üzenet küldése nem sikerült. Kérjük, próbálja újra később, vagy hívjon minket telefonon.`
  - [x] `?targy=` query paraméter előtölti a tárgyat (a képzésjelentkezés innen jön)
- [x] `Elérhetőségeink` — Cím / Telefon / Email / Közösség (Facebook, Instagram)

## 9. Kosár — `/kosar`

- [x] PageHero: `Webshop` / `Kosár` / `Nézd át a kiválasztott darabokat, majd add meg a szállítási adatokat a megrendeléshez.`
- [x] Kosár nézet (üres állapot, tételek, megrendelő űrlap)

## 10. 404 — `not-found`

- [x] `404` / `Ez az oldal nem található` / `A keresett oldal nem létezik vagy elköltözött. Kezdd a főoldalról, vagy nézd meg a kollekciónkat.` / CTA `Vissza a főoldalra`

---

## Technikai tételek

- [x] `lang="hu"`
- [x] Oldalankénti `metadata` (title + description + OG)
- [x] `sitemap.ts`
- [x] `robots.ts`
- [x] OG-kép a logóból
- [x] Favicon a logóból
- [x] Design tokenek CSS custom property + Tailwind config
- [x] Termékadatok külön adatfájlban
- [x] `next/image` minden képhez `sizes` + `alt`
- [x] Billentyűzettel bejárható navigáció, `prefers-reduced-motion`
- [x] `npm run build` hibátlan
