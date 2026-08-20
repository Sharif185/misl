import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Remove the X-Powered-By header for security
    poweredByHeader: false,

    // Configure allowed remote image domains here as the project grows
    images: {
        remotePatterns: [],
    },
};

export default nextConfig;
