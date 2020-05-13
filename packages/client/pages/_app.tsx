import App, { AppProps } from "next/app";
import { useCssRepository, CssRepository } from "@email/css";

function MyApp({ Component, pageProps }) {
    const context: CssRepository = useCssRepository();

    return (
        <>
            <Component {...pageProps} />

            {JSON.stringify(context.jsonToHTML())}
        </>
    );
}

export default MyApp;
