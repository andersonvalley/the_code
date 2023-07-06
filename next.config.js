/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'leonardo.osnova.io',
      },
    ],
  },
}

module.exports = nextConfig
