import { CssStyle, Theme } from "../theme";

type EmailCssOptions = {
    resetCss: string;
    commonCss: CssStyle;
    theme: Theme;
    overrides?: CssStyle[] | CssStyle;
    inline: boolean;
    stylesheets: boolean;
};

export class EmailCss {
    constructor(private readonly _props: EmailCssOptions) {}
}
