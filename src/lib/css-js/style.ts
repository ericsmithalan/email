import { ParseResults, Styles } from "../types";
import { parser } from "./parser";

export function style(styles: Styles): ParseResults {
    return parser(styles);
}
