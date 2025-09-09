/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'cdn.ismsbv.online',
            'aysa.ams3.cdn.digitaloceanspaces.com',
            'cdn.prod.website-files.com',
        ],
    },
};

module.exports = nextConfig;
