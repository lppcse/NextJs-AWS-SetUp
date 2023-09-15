/** @type {import('next').NextConfig} */
const nextConfig = {
    build: {
        swc: {
            minify: true,
        },
        webpack: (config, { dev, isServer }) => {
            // ...
        },
    },
    experimental: {
        // ...
    },
    images: {
        // ...
    },
    plugins: [
      //  TailwindCSS(),
    ],
    root: "./src/",
    server: {
        headers: [
            // ...
        ],
        port: 4000,
    }
}

module.exports = nextConfig