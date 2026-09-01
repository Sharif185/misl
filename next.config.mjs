/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove the X-Powered-By header for security
    poweredByHeader: false,

    // Configure allowed remote image domains here as the project grows
    images: {
        remotePatterns: [],
    },
};

export default nextConfig;
