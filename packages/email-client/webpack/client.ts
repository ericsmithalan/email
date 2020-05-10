import LoadableWebpackPlugin from "@loadable/webpack-plugin";
import path from "path";
import merge from "webpack-merge";
import { DEV, DIST, SRC } from "./constants";
import shared from "./shared";

const port = process.env.PORT || 3000;

const client = merge(shared, {
    name: "client",
    devtool: DEV ? "eval-source-map" : "source-map",
    entry: {
        app: DEV
            ? ["react-hot-loader/patch", path.resolve(SRC, "client", "app")]
            : ["react-hot-loader/patch", path.resolve(SRC, "client", "app")],
    },
    target: "web",
    output: {
        publicPath: DEV ? `http://localhost:${port}/static/` : `/static/`,
        path: path.resolve(DIST, "static"),
        filename: "[name].js",
    },
    plugins: DEV
        ? [
              new LoadableWebpackPlugin({
                  // This is required for loadable to pick up the client side assets
                  writeToDisk: {
                      filename: path.resolve(DIST, "static"),
                  },
              }),
          ]
        : [new LoadableWebpackPlugin()],
});

export default client;
