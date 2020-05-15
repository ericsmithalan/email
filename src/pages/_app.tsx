import { Helmet } from "react-helmet";
import { withBoundary } from "../lib/core";
import { FC } from "react";
import { AppPropsType, NextComponentType, NextPageContext } from "next/dist/next-server/lib/utils";

const EmailApp = ({ Component, pageProps }: AppPropsType) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

const ErrorFallBack = withBoundary(EmailApp);

export default EmailApp;
