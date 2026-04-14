import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/markdown-editor',
        destination: 'https://markdown-editor-iota-eosin.vercel.app',
      },
      {
        source: '/markdown-editor/:path*',
        destination: 'https://markdown-editor-iota-eosin.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;