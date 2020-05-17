import { CssTarget, ParseResults, Styles } from "../types";
import { parser } from "./parser";

export function style(styles: Styles): ParseResults;
export function style(styles: Styles, target?: CssTarget): ParseResults {
    return parser(styles);
}
