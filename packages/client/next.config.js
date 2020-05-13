const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    compress: false,
    target: "serverless",
    devIndicators: {
        autoPrerender: false,
    },
    poweredByHeader: true,
    generateEtags: false,
};

module.exports = withBundleAnalyzer(nextConfig);
