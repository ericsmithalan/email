import Document, { DocumentContext, Head, Main, NextScript } from "next/document";
import { StyleManager, defaultTheme, Parser, cssReset } from "../lib";
import { Helmet } from "react-helmet";
import { DocProps } from "../types";
import { Body } from "src/lib/core/primitives/Body";
import { commonCss } from "src/lib/core/theme";
import { EmailCssProvider } from "src/lib/core";
import fs from "fs";

export default class MyDocument extends Document<DocProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const theme = defaultTheme;
        const sheets = new StyleManager(theme);

        const common = new Parser(commonCss, "@common").parse(theme);

        sheets.add(common, "@common");
        sheets.add(cssReset, "@reset");

        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <EmailCssProvider theme={defaultTheme} stylesheets={sheets}>
                        <App {...props} />
                    </EmailCssProvider>
                ),
            });

        const initialProps = await Document.getInitialProps(ctx);

        const log = () => {
            fs.writeFile("log.json", JSON.stringify(sheets.stylesheets), function (err) {
                if (err) {
                    console.log(err);
                }
            });
        };

        log();

        return {
            ...initialProps,
            stylesheets: (
                <>
                    <style
                        id="css_reset"
                        dangerouslySetInnerHTML={{ __html: sheets.css("@reset") }}
                    ></style>
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
                <Head>{this.helmetHeadComponents}</Head>
                <Body>
                    <Main />
                    <NextScript />
                </Body>
            </html>
        );
    }
}
