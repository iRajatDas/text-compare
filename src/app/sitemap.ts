import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "/en",
      lastModified: new Date(),
    },
    {
      url: "/hi",
      lastModified: new Date(),
    },
  ];
}
