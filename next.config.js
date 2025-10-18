/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        buffer: require.resolve('buffer'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util'),
      };
    }
    return config;
  },
  images: {
    domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com"],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Nutlope/restorePhotos",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/ai-photo-restorer",
        permanent: false,
      },
    ];
  },
};
