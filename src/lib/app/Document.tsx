import Document, { DocumentContext, Head, Main, NextScript } from "next/document";
import { StyleManager } from "../";
import { DocProps } from "./types";
import { Body } from "src/lib/primitives/Body";
import { defaultCommon, defaultTheme, defaultReset } from "src/lib/theme";
import { EmailCssProvider } from "src/lib";
import path from "path";
import fs from "fs";

export default class EmailDocument extends Document<DocProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const theme = defaultTheme;
        const sheets = new StyleManager(theme);

        const common = defaultCommon.parse(theme, {}, "@common");

        sheets.add(common, "@common");
        sheets.add(defaultReset, "@reset");

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

        const styles = (
            <>
                <style id="css_fonts" dangerouslySetInnerHTML={{ __html: sheets.fonts() }}></style>
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
        );

        const log = () => {
            fs.writeFile(
                `${path.join(process.cwd(), "/logs/log.stylesheet.json")}`,
                JSON.stringify(sheets.stylesheets),
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                },
            );
        };

        log();

        return {
            ...initialProps,
            theme: defaultTheme,
            styles: styles,
        };
    }

    render() {
        return (
            <html>
                <Head></Head>
                <Body>
                    <Main />
                    <NextScript />
                </Body>
            </html>
        );
    }
}