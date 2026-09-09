import type { MetadataRoute } from "next";

const baseUrl = "https://usmanaliawan.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/lab", "/writing", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}