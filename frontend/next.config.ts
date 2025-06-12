import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ingenious-song-020dc68f16.media.strapiapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ingenious-song-020dc68f16.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
