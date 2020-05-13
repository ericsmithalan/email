import Document, { DocumentContext, Head, Main, NextScript } from "next/document";
import { StylesProvider, StyleSheets, defaultTheme } from "../lib";
import EmailApp from "./_app";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const stylesheet: StyleSheets = new StyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <StylesProvider theme={defaultTheme} stylesheets={stylesheet}>
                        <App {...props} />
                    </StylesProvider>
                ),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
                <>
                    <style
                        id="css_base"
                        dangerouslySetInnerHTML={{ __html: stylesheet.css("@base") }}
                    ></style>
                    <style
                        id="css_global"
                        dangerouslySetInnerHTML={{ __html: stylesheet.css("@global") }}
                    ></style>
                    <style
                        id="css_tablet"
                        dangerouslySetInnerHTML={{ __html: stylesheet.css("@tablet") }}
                    ></style>
                    <style
                        id="css_phone"
                        dangerouslySetInnerHTML={{ __html: stylesheet.css("@phone") }}
                    ></style>
                </>
            ),
        };
    }

    render() {
        return (
            <html>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
