import type { MetadataRoute } from "next";

// Clone is closed from indexing (layer 2 of 3: robots.txt). See also the root-layout
// `robots` metadata and the X-Robots-Tag header in next.config.ts.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
