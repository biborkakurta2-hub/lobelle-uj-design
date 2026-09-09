import { chromium } from "playwright";
const BASE = "http://127.0.0.1:3111";
const UTAK = ["/", "/termekek/standard-ekszerek", "/kepzes", "/kepzes/idopontok",
  "/kepzes/privat-oktatas", "/kepzes/szakembereknek", "/rolunk", "/miert-a-lobelle",
  "/eletkepek", "/gyakori-kerdesek", "/kapcsolat", "/kosar"];

const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const oldal = await (await b.newContext({ viewport: { width: 1280, height: 900 } })).newPage();
let gond = 0;

for (const ut of UTAK) {
  await oldal.goto(BASE + ut, { waitUntil: "domcontentloaded" });
  const r = await oldal.evaluate(() => {
    const fejek = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")]
      .map((h) => ({ szint: Number(h.tagName[1]), szoveg: h.textContent.trim().slice(0, 40) }));
    const kepekAltNelkul = [...document.querySelectorAll("img")]
      .filter((i) => !i.hasAttribute("alt")).length;
    const gombokNevNelkul = [...document.querySelectorAll("button,a")]
      .filter((e) => !e.textContent.trim() && !e.getAttribute("aria-label")).length;
    const mezokCimkeNelkul = [...document.querySelectorAll("input,select,textarea")]
      .filter((m) => m.type !== "hidden" && !m.labels?.length && !m.getAttribute("aria-label")).length;
    return { fejek, kepekAltNelkul, gombokNevNelkul, mezokCimkeNelkul };
  });

  const h1ek = r.fejek.filter((f) => f.szint === 1);
  const bajok = [];
  if (h1ek.length !== 1) bajok.push(`h1 darabszám: ${h1ek.length}`);
  // Szintugrás keresése
  for (let i = 1; i < r.fejek.length; i++) {
    const ugras = r.fejek[i].szint - r.fejek[i - 1].szint;
    if (ugras > 1) bajok.push(`szintugrás h${r.fejek[i - 1].szint}→h${r.fejek[i].szint} („${r.fejek[i].szoveg}”)`);
  }
  if (r.kepekAltNelkul) bajok.push(`alt nélküli kép: ${r.kepekAltNelkul}`);
  if (r.gombokNevNelkul) bajok.push(`név nélküli gomb/link: ${r.gombokNevNelkul}`);
  if (r.mezokCimkeNelkul) bajok.push(`címke nélküli mező: ${r.mezokCimkeNelkul}`);

  if (bajok.length) { gond++; console.log(`⚠️  ${ut}: ${bajok.join(" | ")}`); }
  else console.log(`✓ ${ut}  (h1: „${h1ek[0]?.szoveg}”, ${r.fejek.length} címsor)`);
}

/* Billentyűzetes bejárhatóság a főoldalon */
await oldal.goto(BASE + "/", { waitUntil: "domcontentloaded" });
const elsoFokusz = await oldal.evaluate(async () => {
  document.body.focus();
  return null;
});
await oldal.keyboard.press("Tab");
const elso = await oldal.evaluate(() => document.activeElement?.textContent?.trim().slice(0, 40));
console.log(`\nElső Tab-fókusz a főoldalon: „${elso}”`);

await b.close();
console.log(gond ? `\n${gond} oldalon van akadálymentességi észrevétel.` : "\n✓ Nincs akadálymentességi észrevétel.");
