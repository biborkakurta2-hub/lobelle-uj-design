/**
 * Tartalmi ellenőrzés: végigmegy a CONTENT-MAP.md tételein, és megnézi,
 * hogy a renderelt oldalakon tényleg szerepel-e minden szöveg.
 */
const BASE = "http://127.0.0.1:3111";

const ELLENORZES = {
  "/": [
    "Üdvözlünk a Lobelle oldalán",
    "Az innovatív füllyukasztás új generációja",
    "Biztonság", "Innováció", "Szakmaiság",
    "Fedezd fel a rendszert", "Jelentkezz képzésre",
    "A márkáról", "Nem csupán rendszer. Szemlélet.",
    "A Lobelle ott kezdődik, ahol a kompromisszum véget ér",
    "ASTM F136 szabványú, Grade 23 titán — ugyanaz az anyag, amelyet orvosi implantátumokhoz használnak.",
    "Rendkívül vékony kivitel és lekerekített hátsó kapocs",
    "Nem csak forgalmazunk — oktatunk is.",
    "Anyag és technológia", "A titánium ereje",
    "A titánium jelenleg a világ egyik legbiztonságosabb fémje füllyukasztáshoz",
    "Teljesen nikkelmentes", "A leggyakoribb allergén nélkül — érzékeny bőrnek is.",
    "Biokompatibilis", "A szervezet sajátjaként fogadja, nem lép reakcióba a bőrrel.",
    "Nem oxidálódik", "Évek múlva is ugyanolyan, mint az első napon.",
    "Nem korrodál", "Víz, izzadság, kozmetikum — semmi nem árt neki.",
    "Nem színeződik el", "Tartós, elegáns megjelenés kompromisszum nélkül.",
    "Kíméletes kivitel", "Rendkívül vékony szár — a lyukasztás alig érezhető.",
    "Prémium garancia", "ASTM F136 szabvány", "Grade 23 implantátum minőségű",
    "Szigorúan ellenőrzött, steril termékek — kompromisszumok nélkül.",
    "Kollekció", "Termékkínálat",
    "Minden darab ugyanabból az alapanyagból, ugyanazzal az igényességgel készül",
    "Standard ékszerek", "Gyerek ékszerek", "Baba ékszerek", "Orr piercingek",
    "Kellékek, eszközök", "Lyukasztó készülék", "Megnézem",
    "A prémium vendég prémium minőséget vár.",
    "Oktatás", "Fül- és orrlyukasztó szakemberképzés",
    "Intenzív, gyakorlatorientált képzés 2–3 órában — előképzettség nélkül.",
    "Elméleti alapozás: anatómia, higiénia, anyagtudomány, jogi háttér",
    "Gyakorlati tréning speciális gyakorlófülön, oktatói felügyelettel",
    "Közel 70 000 Ft értékű kezdőcsomag a képzés részeként",
    "Hivatalos, FAR-regisztrált tanúsítvány",
    "Képzés részletei", "Időpontok, helyszínek",
    "Ha egyszer titániumot használsz, nem térsz vissza máshoz.",
    "Ahol a profizmus kezdődik",
    "Hírlevél", "Maradjunk kapcsolatban",
    "Iratkozz fel, hogy elsőként értesülj az új kollekciókról",
    "Feliratkozom",
  ],
  "/termekek/standard-ekszerek": ["Standard ékszerek", "Implantátum minőségű, ASTM F136 szabványú Grade 23 titánból készült fülbevalók", "Feltöltés alatt", "A kategória termékei hamarosan elérhetők.", "Érdeklődöm a kategóriáról", "Kapcsolatfelvétel"],
  "/termekek/gyerek-ekszerek": ["Gyerek ékszerek", "Gyerekeknek tervezett titánium fülbevalók: játékos formák"],
  "/termekek/baba-ekszerek": ["Baba ékszerek díszdobozzal", "Az első fülbevaló egyszeri alkalom"],
  "/termekek/orr-piercingek": ["Orr piercingek", "Titánium orrékszerek, amelyek ugyanabból az implantátum minőségű alapanyagból készülnek"],
  "/termekek/kellekek-eszkozok": ["Kellékek és eszközök", "Minden, ami a professzionális munkához kell"],
  "/termekek/ful-es-orrlyukaszto-keszulek": ["Fül- és orrlyukasztó készülék", "A Lobelle-rendszer szíve"],
  "/kepzes": [
    "Első rész", "Elméleti alapozás", "Anatómia", "Idegek, erek, porcszövetek — hol szabad és hol tilos szúrni.",
    "Higiénia", "Aszeptikus munkaterület, keresztfertőzések megelőzése.",
    "Anyagtudomány", "Tű vs. készülék; titán, orvosi fém, arany különbségei.",
    "Jogi háttér", "Beleegyező nyilatkozatok, korhatárok, felelősség.",
    "Második rész", "Gyakorlati tréning", "Jelölés", "A tökéletes szimmetria megtervezése.",
    "Szúrási gyakorlat", "Ékszerválasztás", "Megfelelő anyag és méret minden vendéghez.",
    "Utóápolás", "Teendők gyulladás vagy allergia esetén.",
    "A képzés része", "Közel 70 000 Ft értékű kezdőcsomag",
    "Prémium füllyukasztó eszköz", "Prémium orrlyukasztó eszköz", "Utóápoló",
    "Speciális eltávolító csipeszek", "Sebészeti jelölőtoll", "Gyakorló ékszerek",
    "Hordtáska és tükör", "Termékkatalógus", "Hozzájárulási nyilatkozat",
    "Hivatalos tanúsítvány", "A képzés hivatalos, FAR-regisztrált tanúsítvánnyal zárul.",
    "B/2021/000190",
    "Célközönség", "Kinek ajánljuk?", "Kozmetikusoknak", "Szépségipari szakembereknek",
    "Pályakezdőknek", "Szakmaváltóknak",
    "Kezdd el még ebben a hónapban.", "Jelentkezem a képzésre", "Inkább privát oktatást kérek",
  ],
  "/kepzes/privat-oktatas": ["Privát oktatás", "Teljes oktatói figyelem", "Hozzád igazított időpont", "Saját tempó", "Ugyanaz a teljes csomag", "Kérj egyéni időpontot", "Mikor érnél rá, és mit szeretnél tanulni?", "Érdeklődés elküldése"],
  "/kepzes/idopontok": ["Képzés időpontok, helyszínek", "Debrecen", "Budapest", "Szeged", "Győr", "Jelentkezem", "Privát oktatást kérek", "Írok nektek", "Korlátozott létszám"],
  "/kepzes/szakembereknek": ["Már füllyukasztó szakember vagyok", "Kedvezményes vásárlás", "Elsőbbségi értesítés", "Folyamatos szakmai támogatás", "Átállás titániumra", "Regisztrálj szakemberként", "Mióta dolgozol füllyukasztóként, milyen rendszert használsz?", "Regisztrációs igény elküldése"],
  "/rolunk": ["Nem csupán rendszer. Szemlélet.", "Nálunk a prémium alapanyag, a tudatos választás és a szakmai háttér egy helyen találkozik.", "Az alapanyagban nem ismerünk kompromisszumot", "De a Lobelle nem áll meg a terméknél.", "Küldetésünk egyszerű", "Így dolgozunk", "Miért a Lobelle?", "Életképek"],
  "/miert-a-lobelle": ["Négy pillér", "Miért a Lobelle?", "Ultra-hipoallergén", "Oktatói háttér", "Prémium garancia", "Személyes figyelem", "A minőség nem luxus. A biztonság nem opció.", "Csatlakozz hozzánk"],
  "/eletkepek": ["Galéria", "Életképek", "Képzés közben", "Gyakorlati tréning", "A kezdőcsomag", "Titánium kollekció", "Babafül lyukasztás", "A készülék közelről", "Oktatónk munka közben", "Elégedett vendég", "Díszdobozos baba szett", "Műhelypillanat", "Tanúsítvány átadás", "A Lobelle csapat"],
  "/gyakori-kerdesek": ["Fáj a füllyukasztás?", "Mennyi a gyógyulási idő?", "Hány éves kortól lyukasztható a babák füle?", "Miben más a titán, mint az orvosi fém?", "Hogyan ápoljam a friss fül-lyukat?", "Mi a helyzet, ha allergiás vagyok a fémekre?", "Van korhatára a füllyukasztásnak?", "Hogyan foglalhatok időpontot?", "Elmozdulhat vagy kilazulhat az ékszer a gyógyulás alatt?", "Mit tegyek, ha begyullad a lyukasztás helye?", "Tedd fel nekünk", "FAQPage"],
  "/kapcsolat": ["Kapcsolatfelvétel", "Írj nekünk üzenetet", "Elérhetőségeink", "4031 Debrecen, Széchenyi u. 62. fszt. 26.", "+36 30 483 3814", "rendeles@lobelle.hu", "Facebook", "Instagram"],
  "/kosar": ["Webshop", "Kosár"],
};

/* Minden oldalon szerepelnie kell (fejléc + lábléc) */
const MINDENHOL = [
  "Termékek", "Képzés", "Rólunk", "Kapcsolat",
  "Standard ékszerek korosztály nélkül", "Baba ékszerek dobozzal együtt",
  "Fül- és orrlyukasztó készülék", "Képzés leírása", "Privát oktatás",
  "Már füllyukasztó szakember vagyok", "Miért a Lobelle?", "Életképek", "Gyakori kérdések",
  "4031 Debrecen, Széchenyi u. 62. fszt. 26.", "+36 30 483 3814", "rendeles@lobelle.hu",
  "ÁSZF", "Adatkezelési tájékoztató", "Elállási tájékoztató",
  "© 2026 Lobelle · Minden jog fenntartva",
  'lang="hu"',
];

function dekodol(html) {
  return html
    .replace(/&#x27;/g, "'").replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ").replace(/&#x2F;/g, "/");
}

let osszes = 0, hianyzik = 0;
const hibak = [];

for (const [ut, tetelek] of Object.entries(ELLENORZES)) {
  const valasz = await fetch(BASE + ut);
  if (!valasz.ok) { hibak.push(`${ut} → HTTP ${valasz.status}`); continue; }
  const html = dekodol(await valasz.text());

  for (const tetel of [...tetelek, ...MINDENHOL]) {
    osszes++;
    if (!html.includes(tetel)) { hianyzik++; hibak.push(`${ut} ✗ „${tetel}”`); }
  }
}

console.log(`\nEllenőrzött tételek: ${osszes}`);
console.log(`Hiányzó: ${hianyzik}`);
if (hibak.length) { console.log("\n--- HIÁNYZÓ TÉTELEK ---"); hibak.forEach((h) => console.log(h)); }
else console.log("\n✓ Minden tartalmi tétel megvan.");
