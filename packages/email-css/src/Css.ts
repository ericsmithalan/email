import { CssDirtyStyles } from "./types";
import { CssStyle } from "./CssStyle";

export const css = (styles: CssDirtyStyles): CssStyle => {
    return new CssStyle(styles);
};
