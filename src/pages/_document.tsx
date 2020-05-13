import Document, { DocumentContext, Head, Main, NextScript } from "next/document";
import { StylesProvider, StyleSheets, defaultTheme, commonCss } from "../lib";
import { Helmet } from "react-helmet";
import { DocProps } from "../types";

export default class MyDocument extends Document<DocProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const sheets = new StyleSheets();

        // new Parser(componentCommon, "@common")
        const componentStyles = commonCss.parse(defaultTheme, {});

        sheets.add(componentStyles, "@common");

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
                        id="css_common"
                        dangerouslySetInnerHTML={{ __html: sheets.css("@common") }}
                    ></style>
                    <style
                        id="css_base"
                        dangerouslySetInnerHTML={{ __html: sheets.css("@base") }}
                    ></style>
                    <style
                        id="css_default"
                        dangerouslySetInnerHTML={{ __html: sheets.css("@default") }}
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
