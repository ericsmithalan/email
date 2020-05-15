import { CssTarget, ParseResults, Styles } from "../types/css.types";
import { parser } from "./parser";

export function styleable(styles: Styles): ParseResults;
export function styleable(styles: Styles, target?: CssTarget): ParseResults {
    return parser(styles);
}
