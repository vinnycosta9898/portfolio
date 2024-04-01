/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/vinnycosta9898.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
        port: '',
        pathname: '/logos/**',
      },
    ],
  },
};

export default nextConfig;

// https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"