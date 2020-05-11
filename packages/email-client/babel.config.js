const env = process.env.BABEL_ENV || process.env.NODE_ENV || "development";
// const isProduction = env === 'production';
const isDevelopment = env === "development";
const isTest = env === "test";

module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",
                corejs: "3.6",
                modules: isTest ? undefined : false,
                targets: isTest
                    ? {
                          node: true,
                      }
                    : undefined,
            },
        ],
        ["@babel/preset-typescript", { onlyRemoveTypeImports: true }],
        "@babel/preset-react",
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-typescript",
        "@loadable/babel-plugin",
        "react-hot-loader/babel",
    ],
};
