import { chromium } from "playwright";

const BASE = "http://127.0.0.1:3111";
const KI = "/tmp/claude-0/-home-user-lobelle-uj-design/9ac3dac2-9140-5ea8-8da1-e5f0c410d7d5/scratchpad/shots";

const OLDALAK = [
  ["fooldal", "/"],
  ["termek-kategoria", "/termekek/standard-ekszerek"],
  ["kepzes", "/kepzes"],
  ["gyik", "/gyakori-kerdesek"],
  ["kapcsolat", "/kapcsolat"],
  ["miert", "/miert-a-lobelle"],
];

const NEZETEK = [
  ["desktop", 1440, 900],
  ["mobil", 390, 844],
  ["kicsi", 360, 780],
];

const bongeszo = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });

for (const [nezet, w, h] of NEZETEK) {
  const ctx = await bongeszo.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const oldal = await ctx.newPage();
  // A megjelenő animációkat kapcsoljuk ki, hogy a screenshot stabil legyen
  await oldal.emulateMedia({ reducedMotion: "reduce" });

  for (const [nev, ut] of OLDALAK) {
    if (nezet !== "desktop" && !["fooldal", "kepzes"].includes(nev)) continue;
    await oldal.goto(BASE + ut, { waitUntil: "networkidle" });
    await oldal.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await oldal.waitForTimeout(400);
    await oldal.evaluate(() => window.scrollTo(0, 0));
    await oldal.waitForTimeout(300);
    await oldal.screenshot({ path: `${KI}/${nezet}-${nev}.png`, fullPage: nezet === "desktop" });
    console.log("kész:", nezet, nev);
  }

  // Vízszintes túlcsordulás ellenőrzése minden oldalon
  for (const [nev, ut] of OLDALAK) {
    await oldal.goto(BASE + ut, { waitUntil: "networkidle" });
    const tulcsordul = await oldal.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    if (tulcsordul) {
      const sw = await oldal.evaluate(() => document.documentElement.scrollWidth);
      const cw = await oldal.evaluate(() => document.documentElement.clientWidth);
      console.log(`⚠️  VÍZSZINTES TÚLCSORDULÁS ${nezet} ${nev}: scrollWidth=${sw} clientWidth=${cw}`);
    }
  }
  await ctx.close();
}

await bongeszo.close();
console.log("Screenshotok kész.");
