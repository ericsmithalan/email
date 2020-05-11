// import express from 'express';
import http from "http";
import debugFactory from "debug";

const debug = debugFactory("server:index");
const port = process.env.PORT;
let app = require("./app").default;

if (module.hot) {
    module.hot.accept("./app", () => {
        debug("HMR reloading `./app`...");
        try {
            app = require("./app").default;
        } catch (err) {
            debug(err);
        }
    });

    debug("Server-side HMR enabled!");
}

const server = http.createServer((req, res) => app.handle(req, res));
// const server = express().use((req, res) => app.handle(req, res));
server.listen(port, () => {
    debug(`Launched at http://localhost:${port}`);
});

export default server;