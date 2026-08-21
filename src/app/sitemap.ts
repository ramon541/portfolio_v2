import type { MetadataRoute } from "next";

import {
  getSiteUrl,
  isSearchEngineIndexingEnabled,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isSearchEngineIndexingEnabled()) {
    return [];
  }

  const baseUrl = getSiteUrl();

  // Only public, indexable App Router pages that exist in this project.
  return [
    { url: baseUrl },
    { url: `${baseUrl}/experience` },
  ];
}
