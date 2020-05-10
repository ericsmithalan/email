import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import merge from "webpack-merge";
import { DEV } from "./constants";

const shared = merge({
    context: process.cwd(),
    watch: DEV,
    stats: DEV ? "errors-warnings" : "normal",
    mode: DEV ? "development" : "production",

    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(css)$/,
                use: ["css-loader"],
            },
        ],
    },
    plugins: DEV
        ? [
              new ForkTsCheckerWebpackPlugin({
                  eslint: true,
                  tsconfig: "tsconfig.build.json",
              }),
          ]
        : undefined,
});

export default shared;
