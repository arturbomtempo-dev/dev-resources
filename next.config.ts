import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'arturbomtempo-dev.github.io',
            },
        ],
    },
};

export default nextConfig;
