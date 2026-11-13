import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project sits inside another repo; keep the build scoped to this folder.
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
