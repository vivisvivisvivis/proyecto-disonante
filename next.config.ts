import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Needed because ES and EN each have their own root layout (for the correct <html lang>).
    globalNotFound: true,
  },
};

export default nextConfig;
