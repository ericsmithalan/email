import App from "next/app";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { Shell } from "./shell/Shell";
import React, { ReactElement, ReactFragment } from "react";

export type AppProps = {
    cssStyles: ReactElement[] | ReactFragment;
} & AppPropsType;

export async function getServerSideProps() {
    return { props: { innerHeight: 29 } };
}

export default class EmailApp extends App<AppProps> {
    componentDidMount() {
        moveStylesheets();
        console.log(this.props);
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
