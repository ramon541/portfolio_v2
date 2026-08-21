import type { MetadataRoute } from "next";

import {
  getSiteUrl,
  isSearchEngineIndexingEnabled,
} from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  if (!isSearchEngineIndexingEnabled()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  // No private/auth/admin routes exist in this project to disallow.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    // Host directive expects hostname only (no scheme).
    host: new URL(baseUrl).host,
  };
}
