/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  optimization: {
    minimize: false,
  },
  images: {
    domains: ['berro-tech-bucket.s3.sa-east-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
