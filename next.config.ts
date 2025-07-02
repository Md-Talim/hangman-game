import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(test|spec)\.(js|jsx|ts|tsx)$/,
        loader: "ignore-loader",
      });
    }
    return config;
  },
};

export default nextConfig;
