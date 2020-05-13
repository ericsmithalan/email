import App, { AppProps } from "next/app";
import { useCssRepository } from "../lib/css-js";
import { JSDOM } from "jsdom";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
