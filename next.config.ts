import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL("https://codex-new.s3.amazonaws.com/**")],
  },
};

export default nextConfig;
