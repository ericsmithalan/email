import { DirtyStyles } from "./types";
import { Parser } from "./Parser";

export const css = (styles: DirtyStyles): Parser => {
    return new Parser(styles);
};
