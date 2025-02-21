import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/products/images/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'icon666.com',
        port: '',
        pathname: '/ru/icon/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
