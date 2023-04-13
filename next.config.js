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
    formats: ['image/avif', 'image/webp', 'image/png'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'berro-tech-bucket.s3.sa-east-1.amazonaws.com',
        port: '',
        pathname: '/avatar/**',
      },
    ],
  },
};

module.exports = nextConfig;
