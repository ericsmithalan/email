import Document, { DocumentContext, Head, Main, NextScript } from "next/document";
import { StylesProvider, StyleSheets, defaultTheme, Theme } from "../lib";
import { Helmet, HelmetProps, HelmetData } from "react-helmet";

type DocumentProps = {
    helmet: HelmetData;
    stylesheets: StyleSheets;
    theme: Theme;
};

export default class MyDocument extends Document<DocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const sheets = new StyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <StylesProvider theme={defaultTheme} stylesheets={sheets}>
                        <App {...props} />
                    </StylesProvider>
                ),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            sheets: sheets,
            styles: (
                <>
                    <style
                        id="css_global"
                        dangerouslySetInnerHTML={{ __html: sheets.css("@global") }}
                    ></style>
                    <style
                        id="css_tablet"
                        dangerouslySetInnerHTML={{ __html: sheets.css("@tablet") }}
                    ></style>
                    <style
                        id="css_phone"
                        dangerouslySetInnerHTML={{ __html: sheets.css("@phone") }}
                    ></style>
                </>
            ),
            theme: defaultTheme,
            helmet: Helmet.renderStatic(),
        };
    }

    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent();
    }

    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent();
    }

    get helmetHeadComponents() {
        return Object.keys(this.props.helmet)
            .filter((el) => el !== "htmlAttributes" && el !== "bodyAttributes")
            .map((el) => this.props.helmet[el].toComponent());
    }

    render() {
        return (
            <html {...this.helmetHtmlAttrComponents}>
                <Head>
                    {this.helmetHeadComponents}
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width; initial-scale=1.0; maximum-scale=1.0;"
                    />
                    <base target="_blank" />
                    {this.props.styles}
                </Head>
                <body {...this.helmetBodyAttrComponents}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
