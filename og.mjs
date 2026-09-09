import sharp from "sharp";
const PUDER="#F9F2ED", BARACKPIR="#EFD5C3", ARANY="#D9B48A";
const W=1200, H=630;
const hatter = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="femes" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="${PUDER}"/>
      <stop offset="100%" stop-color="${BARACKPIR}"/>
    </linearGradient>
    <linearGradient id="hajszal" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${ARANY}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${ARANY}" stop-opacity="1"/>
      <stop offset="100%" stop-color="${ARANY}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#femes)"/>
  <rect x="${W/2-120}" y="${H-140}" width="240" height="1.5" fill="url(#hajszal)"/>
</svg>`);
const logo = await sharp("public/logo.png").resize({ width: 560, fit: "contain" }).toBuffer();
const { width: lw, height: lh } = await sharp(logo).metadata();
await sharp(hatter)
  .composite([{ input: logo, left: Math.round((W-lw)/2), top: Math.round((H-lh)/2)-30 }])
  .png().toFile("app/opengraph-image.png");
console.log("OG-kép újragenerálva, csillanások nélkül");
