import express from "express";
import { renderer } from "./renderer";

let assets: any;

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express()
    .disable("x-powered-by")
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
    .get("/*", (req: express.Request, res: express.Response) => {
        res.send(renderer(req, assets));
    });

export default server;
