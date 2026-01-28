/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/newcastle-homes-portal',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
