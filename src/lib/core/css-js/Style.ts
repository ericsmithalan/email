import { CssTarget, Styles } from "../types/css.types";
import { Parser } from "./Parser";

export const Style = (styles: Styles, target: CssTarget = undefined): Parser => {
    return new Parser(styles, target);
};
