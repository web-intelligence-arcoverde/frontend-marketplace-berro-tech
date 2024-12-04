import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config) => {
    return config;
  },
  images: {
    domains: ['*']
  }
};

export default nextConfig;
