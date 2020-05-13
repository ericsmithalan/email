import Document, { DocumentContext } from "next/document";
import { CssProvider, CssRepository, defaultTheme } from "@email/css";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const css = new CssRepository();
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
            styles: <>{initialProps.styles}</>,
        };
    }
}

export default MyDocument;
