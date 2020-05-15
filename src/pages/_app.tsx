import App from "next/app";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { Shell } from "../components/";
import React, { ReactElement, ReactFragment } from "react";
import "../styles/index.scss";

export type AppProps = {
    cssStyles: ReactElement[] | ReactFragment;
} & AppPropsType;

class EmailApp extends App<AppProps> {
    componentDidMount() {
        moveStylesheets();
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Shell>
                <Component {...pageProps} />
            </Shell>
        );
    }
}

const moveStylesheets = () => {
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
};

export default EmailApp;
