import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://aaxelera.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://aaxelera.com/geo",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
