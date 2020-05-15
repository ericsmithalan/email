import { Helmet } from "react-helmet";
import { withBoundary } from "../lib/core";
import Link from "next/link";
import { FC } from "react";
import { AppPropsType, NextComponentType, NextPageContext } from "next/dist/next-server/lib/utils";

const EmailApp = ({ Component, pageProps }: AppPropsType) => {
    return (
        <div>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/basicEmail">
                    <a>Basic Email</a>
                </Link>
            </div>
            <Component {...pageProps} />
        </div>
    );
};

const ErrorFallBack = withBoundary(EmailApp);

export default EmailApp;
