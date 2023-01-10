const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['github.com/vinnycosta9898'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
        pathname: '/logos/**',
      },
    ],
  },
}

module.exports = nextConfig
