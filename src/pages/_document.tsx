import Document, { DocumentContext } from "next/document";
import { StylesProvider, StyleSheets, defaultTheme } from "../lib/css-js";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const css = new StyleSheets(defaultTheme);
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <StylesProvider theme={defaultTheme} repository={css}>
                        <App {...props} />
                    </StylesProvider>
                ),
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style
                        id="css_base"
                        dangerouslySetInnerHTML={{ __html: css.toString("@base") }}
                    ></style>
                    <style
                        id="css_global"
                        dangerouslySetInnerHTML={{ __html: css.toString("@global") }}
                    ></style>
                    <style
                        id="css_tablet"
                        dangerouslySetInnerHTML={{ __html: css.toString("@tablet") }}
                    ></style>
                    <style
                        id="css_phone"
                        dangerouslySetInnerHTML={{ __html: css.toString("@phone") }}
                    ></style>
                </>
            ),
        };
    }
}
