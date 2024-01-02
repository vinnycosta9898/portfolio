/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/vinnycosta9898.png',
      },
    ],
  },
}

module.exports = nextConfig

// http://www.w3.org/2000/svg
