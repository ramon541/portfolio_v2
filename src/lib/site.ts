/**
 * Single source of truth for the public site origin used by
 * metadata, sitemap, and robots.
 */
export const PRODUCTION_SITE_HOST = "ramondias.dev.br";

export function getSiteUrl(): string {
  const configured = process.env.SITE_URL?.trim();
  const url =
    configured && configured.length > 0
      ? configured
      : `https://${PRODUCTION_SITE_HOST}`;

  return url.replace(/\/+$/, "");
}

/**
 * Search engines should only index the production host.
 * Override with ALLOW_SEARCH_INDEXING=true|false when needed.
 */
export function isSearchEngineIndexingEnabled(): boolean {
  if (process.env.ALLOW_SEARCH_INDEXING === "false") {
    return false;
  }

  if (process.env.ALLOW_SEARCH_INDEXING === "true") {
    return true;
  }

  if (process.env.NODE_ENV !== "production") {
    return false;
  }

  try {
    const { hostname } = new URL(getSiteUrl());
    return (
      hostname === PRODUCTION_SITE_HOST ||
      hostname === `www.${PRODUCTION_SITE_HOST}`
    );
  } catch {
    return false;
  }
}
