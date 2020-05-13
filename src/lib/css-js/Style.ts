import { DirtyStyles } from "./types";
import { Parser } from "./Parser";

export const Style = (styles: DirtyStyles): Parser => {
    return new Parser(styles);
};
