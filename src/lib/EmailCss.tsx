import { CssStyle, Theme } from "./theme";

type EmailCssOptions = {
    resetCss: string;
    commonCss: CssStyle;
    theme: Theme;
    overrides?: CssStyle[] | CssStyle;
};

export class EmailCss {
    constructor(private readonly _options: EmailCssOptions) {}
}
