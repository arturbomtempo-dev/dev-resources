import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'private-user-images.githubusercontent.com',
            },
        ],
    },
};

export default nextConfig;
