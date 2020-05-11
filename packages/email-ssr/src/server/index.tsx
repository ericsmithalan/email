import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import { StaticRouter as Router } from "react-router-dom";
import App from "common/App";

declare const module: any;

function main() {
    const express = Express();
    const port = 8080;

    express.use(Express.static("build"));

    express.get("/*", (req, res, next) => {
        const appHTML = ReactDOM.renderToString(
            <Router location={req.path} context={{}}>
                <App />
            </Router>,
        );

        res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>TypeScript ReactJS SSR App</title>
                    <style>
                        body {
                            margin: 0px;
                            padding: 0px;
                        }
                    </style>
                    <style id="jss-server-side">${`style`}</style>
                </head>
                <body>
                    <main id="root">${appHTML}</main>
                 
                    <script type="application/javascript" src="bundle.js"></script>
                </body>
            </html>
        `);
        res.end();
        next();
    });

    const server = express.listen(port);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => server.close());
    }
}

main();

{
    /* <script>
window["__PRELOADED_STATE__"] = ${appInitialState}
</script> */
}
