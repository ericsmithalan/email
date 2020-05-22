import { CssParser } from "./CssParser";
import { Css, Parser } from "./types";

export const cool = "cool";
export function css(css: Css): Parser {
    return new CssParser(css);
}
