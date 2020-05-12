import Document, { DocumentContext } from "next/document";
import { CssProvider, CssRepository } from "@email/css";
import { ascendumTheme } from "../theme/defaultTheme";
import App from "next/app";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const css = new CssRepository();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <CssProvider repository={css} theme={ascendumTheme}>
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
