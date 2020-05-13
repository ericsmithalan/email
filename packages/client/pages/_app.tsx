import App, { AppProps } from "next/app";
import { useCssRepository, CssRepository } from "@email/css";
import { JSDOM } from "jsdom";

function MyApp({ Component, pageProps }) {
    const context: CssRepository = useCssRepository();

    return (
        <>
            <Component {...pageProps} />

            {context.jsonToHTML()}
        </>
    );
}

export default MyApp;
