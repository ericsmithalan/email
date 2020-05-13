import Document, { DocumentContext } from "next/document";
import { CssProvider, CssRepository, defaultTheme } from "../lib/css";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const css = new CssRepository(defaultTheme);
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <CssProvider theme={defaultTheme} repository={css}>
                        <App {...props} />
                    </CssProvider>
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
