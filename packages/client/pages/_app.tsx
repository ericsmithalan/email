import App, { AppProps } from "next/app";
import { useCssRepository, CssRepository } from "@email/css";
import { JSDOM } from "jsdom";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
