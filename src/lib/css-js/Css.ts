import { DirtyStyles } from "./types";
import { CssStyle } from "./CssStyle";

export const css = (styles: DirtyStyles): CssStyle => {
    return new CssStyle(styles);
};
