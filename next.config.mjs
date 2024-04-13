import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'api.dicebear.com',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'platform-lookaside.fbsbx.com',
      },
    ],

    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
