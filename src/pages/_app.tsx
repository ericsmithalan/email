import App, { AppProps } from "next/app";
import { useCssRepository, CssRepository } from "../lib/css";
import { JSDOM } from "jsdom";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
