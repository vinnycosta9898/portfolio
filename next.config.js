/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
        pathname: '/logos/**',
      },

      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/vinnycosta9898/**',
      },

      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
