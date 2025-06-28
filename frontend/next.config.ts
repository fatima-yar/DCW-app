import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'respected-example-0f150a69b7.media.strapiapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'respected-example-0f150a69b7.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
