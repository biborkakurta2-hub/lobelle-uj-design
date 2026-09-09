import { chromium } from "playwright";
const BASE = "http://127.0.0.1:3111";
const UTAK = ["/", "/kepzes", "/gyakori-kerdesek", "/kapcsolat", "/miert-a-lobelle", "/termekek/standard-ekszerek"];

const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const oldal = await (await b.newContext({ viewport: { width: 1280, height: 900 } })).newPage();

const bajok = new Map();

for (const ut of UTAK) {
  await oldal.goto(BASE + ut, { waitUntil: "networkidle" });
  const r = await oldal.evaluate(() => {
    const csat = (c) => { const v = c / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    const lum = ([r, g, b]) => 0.2126 * csat(r) + 0.7152 * csat(g) + 0.0722 * csat(b);
    const parse = (s) => (s.match(/[\d.]+/g) || []).slice(0, 4).map(Number);

    /* Effektív háttér: felfelé haladva az első nem átlátszó felület */
    function hatter(el) {
      let e = el;
      while (e) {
        const bg = parse(getComputedStyle(e).backgroundColor);
        if (bg.length >= 3 && (bg[3] === undefined || bg[3] > 0.9)) return bg.slice(0, 3);
        e = e.parentElement;
      }
      return [255, 255, 255];
    }
    /* Előtér az alfa figyelembevételével a háttérre keverve */
    function eloter(el, bg) {
      const f = parse(getComputedStyle(el).color);
      const a = f[3] === undefined ? 1 : f[3];
      return [0, 1, 2].map((i) => a * f[i] + (1 - a) * bg[i]);
    }

    const eredmeny = [];
    const elemek = document.querySelectorAll("p,li,h1,h2,h3,a,span,dd,dt,label,button,figcaption,blockquote,address");
    for (const el of elemek) {
      const sz = el.textContent?.trim();
      if (!sz || el.children.length > 0) continue;
      const st = getComputedStyle(el);
      if (st.display === "none" || st.visibility === "hidden" || el.closest("[hidden]")) continue;
      const meret = parseFloat(st.fontSize);
      const vastag = Number(st.fontWeight) >= 700;
      const nagy = meret >= 24 || (meret >= 18.66 && vastag);
      const bg = hatter(el);
      const fg = eloter(el, bg);
      const L1 = lum(fg), L2 = lum(bg);
      const arany = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const kell = nagy ? 3 : 4.5;
      if (arany < kell) {
        eredmeny.push({ szoveg: sz.slice(0, 45), arany: arany.toFixed(2), kell, meret: meret.toFixed(0) });
      }
    }
    return eredmeny;
  });
  for (const x of r) bajok.set(`${x.szoveg} | ${x.arany}:1 (kell ${x.kell}, ${x.meret}px)`, (bajok.get(x) ?? 0) + 1);
}

await b.close();
if (bajok.size === 0) console.log("✓ Minden vizsgált szöveg megfelel a WCAG AA kontrasztnak.");
else { console.log(`⚠️  ${bajok.size} elégtelen kontrasztú szövegtípus:`); [...bajok.keys()].slice(0, 25).forEach((k) => console.log("  " + k)); }
