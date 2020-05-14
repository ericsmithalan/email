import { DirtyStyles, CssTarget } from "../types/css.types";
import { Parser } from "./Parser";

export const Style = (styles: DirtyStyles, target: CssTarget = undefined): Parser => {
    return new Parser(styles, target);
};
