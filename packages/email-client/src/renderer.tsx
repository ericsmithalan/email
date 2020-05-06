import { Request } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { CssStyleProvider, defaultStyleContext } from "@email/css/";

const renderer = (req: Request, assets: any) => {
    const context = {};
    const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
            <CssStyleProvider value={defaultStyleContext}>
                <App />
            </CssStyleProvider>
        </StaticRouter>,
    );

    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <head>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                    <base target="_blank">

                    <meta name="x-apple-disable-message-reformatting"> 
                    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
                    <meta name="color-scheme" content="light">
                    <meta name="supported-color-schemes" content="light">
  
                    
                    <title>Ascendum Email</title>

                    <meta sh-template-name="asc-email">
                   
                    <style>${defaultStyleContext.repository.stylesheet("@global")}</style>
                    <style>${defaultStyleContext.repository.stylesheet("@tablet")}</style>
                    <style>${defaultStyleContext.repository.stylesheet("@phone")}</style>

                    ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ""}
                        ${
                            process.env.NODE_ENV === "production"
                                ? `<script src="${assets.client.js}" defer></script>`
                                : `<script src="${assets.client.js}" defer crossorigin></script>`
                        }
                  
                </head>
                <body style="margin:0;padding:0;">
                    <div id="root">${markup}</div>
                </body>
            </html>`;
};

export { renderer };
