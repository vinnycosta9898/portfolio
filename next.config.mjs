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
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/vinnycosta9898/**/master/.github/**.png',
      },
    ],
  },
};

export default nextConfig;

// https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
// "https://github.com/vinnycosta9898/ignite-coffe-delivery/blob/master/.github/photo1.png" 
// https://raw.githubusercontent.com/vinnycosta9898/ignite-coffe-delivery/master/.github/photo1.png) 