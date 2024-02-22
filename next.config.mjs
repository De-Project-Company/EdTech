/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        remotePatterns: [
            { hostname: 'lh3.googleusercontent.com' },
            { hostname: 'ui-avatars.com' },
            { hostname: 'dummyimage.com' },
        ]
    },
}




export default nextConfig;