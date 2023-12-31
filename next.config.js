/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn04.cryptoslam.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
        pathname: '**',
      },
    ],
  },
}


module.exports = nextConfig
