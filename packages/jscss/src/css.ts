import { CssParser, Parser } from "./CssParser";
import { Css } from "./types";

export const cool = "cool";
export function css(css: Css): Parser {
    return new CssParser(css);
}
