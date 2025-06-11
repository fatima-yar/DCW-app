// import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'ingenious-song-020dc68f16.strapiapp.com',
//         port: '1337',
//         pathname: '/**',
//       },
//     ],
//   },
// }

// export default nextConfig
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // ✅ correct protocol
        hostname: 'ingenious-song-020dc68f16.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
