import App from "next/app";
import React, { useEffect, useState, ReactElement, ReactFragment } from "react";
import Link from "next/link";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import "../styles/index.scss";
import { ErrorBoundary } from "src/lib/ErrorBoundary";

export type AppProps = {
    cssStyles: ReactElement[] | ReactFragment;
} & AppPropsType;

class EmailApp extends App<AppProps> {
    componentDidMount() {
        const css_reset = document.getElementById("css_reset");
        const css_common = document.getElementById("css_common");
        const css_base = document.getElementById("css_base");
        const css_default = document.getElementById("css_default");
        const css_tablet = document.getElementById("css_tablet");
        const css_phone = document.getElementById("css_phone");

        const content = document.getElementById("contentRoot");
        content.appendChild(css_reset);
        content.appendChild(css_base);
        content.appendChild(css_common);
        content.appendChild(css_default);
        content.appendChild(css_tablet);
        content.appendChild(css_phone);
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div className="email-app">
                <div className="email-bar">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/basicEmail">
                        <a>Basic Email</a>
                    </Link>
                </div>
                <div className="email-content">
                    <div className="email-border">
                        <div className="email-isolate">
                            <div id="contentRoot">
                                {`<!--- START ----!>
                                `}
                                <ErrorBoundary>
                                    <Component {...pageProps} />
                                </ErrorBoundary>
                                {`
                                  <!--- END ----!>`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmailApp;
