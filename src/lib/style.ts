import { parser } from "./parser";
import { ParseResults, Styles } from "./types";

export function style(styles: Styles): ParseResults {
    return parser(styles);
}
