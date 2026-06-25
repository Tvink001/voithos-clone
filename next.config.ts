import type { NextConfig } from "next";

// noindex layer 3 of 3: X-Robots-Tag on every response (layers 1-2: root-layout
// `robots` metadata + app/robots.ts). Clone must stay out of search indexes.
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
