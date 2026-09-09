import type { MetadataRoute } from "next";
import { KATEGORIAK } from "@/data/products";
import { SITE_URL } from "@/lib/site";

/** Az oldaltérkép a navigációból és a termékkategóriákból épül fel. */
export default function sitemap(): MetadataRoute.Sitemap {
  const most = new Date();

  const statikusUtvonalak = [
    { ut: "/", prioritas: 1 },
    { ut: "/kepzes", prioritas: 0.9 },
    { ut: "/kepzes/privat-oktatas", prioritas: 0.7 },
    { ut: "/kepzes/idopontok", prioritas: 0.7 },
    { ut: "/kepzes/szakembereknek", prioritas: 0.7 },
    { ut: "/rolunk", prioritas: 0.6 },
    { ut: "/miert-a-lobelle", prioritas: 0.6 },
    { ut: "/eletkepek", prioritas: 0.5 },
    { ut: "/gyakori-kerdesek", prioritas: 0.7 },
    { ut: "/kapcsolat", prioritas: 0.8 },
    { ut: "/kosar", prioritas: 0.3 },
  ];

  const kategoriaUtvonalak = KATEGORIAK.map((kategoria) => ({
    ut: `/termekek/${kategoria.slug}`,
    prioritas: 0.8,
  }));

  return [...statikusUtvonalak, ...kategoriaUtvonalak].map(({ ut, prioritas }) => ({
    url: `${SITE_URL}${ut}`,
    lastModified: most,
    changeFrequency: "monthly" as const,
    priority: prioritas,
  }));
}
