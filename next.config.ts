import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // you can add more hosts here
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  /* config options here */
}

export default nextConfig
