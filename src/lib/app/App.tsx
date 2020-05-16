import App from "next/app";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { Shell } from "./shell/Shell";
import React, { ReactElement, ReactFragment } from "react";
import { Toolbar } from "./toolbar/Toolbar";

export type AppProps = {
    cssStyles: ReactElement[] | ReactFragment;
} & AppPropsType;

export async function getServerSideProps() {
    return { props: { innerHeight: 29 } };
}

export default class EmailApp extends App<AppProps> {
    componentDidMount() {
        moveStylesheets();
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Toolbar />
                <Shell>
                    <Component {...pageProps} />
                </Shell>
            </>
        );
    }
}

const moveStylesheets = () => {
    const content = document.getElementById("contentRoot");

    if (content) {
        const css_reset = document.getElementById("css_reset");
        const css_common = document.getElementById("css_common");
        const css_base = document.getElementById("css_base");
        const css_default = document.getElementById("css_default");
        const css_tablet = document.getElementById("css_tablet");
        const css_phone = document.getElementById("css_phone");

        content.insertBefore(css_phone, content.firstChild);
        content.insertBefore(css_tablet, content.firstChild);
        content.insertBefore(css_default, content.firstChild);
        content.insertBefore(css_common, content.firstChild);
        content.insertBefore(css_base, content.firstChild);
        content.insertBefore(css_reset, content.firstChild);
    }
};
