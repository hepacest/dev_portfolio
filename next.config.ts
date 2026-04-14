import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/proyecto-b',
        destination: 'https://proyecto-b.vercel.app',
      },
      {
        source: '/proyecto-b/:path*',
        destination: 'https://proyecto-b.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;