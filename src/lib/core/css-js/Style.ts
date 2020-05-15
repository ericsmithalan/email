import { CssTarget, Styles, Styleable, ParseResults } from "../types/css.types";

import { Theme } from "../types/theme.types";
import { parser } from "../css-js/Parser";

export function styleable(styles: Styles): ParseResults;
export function styleable(styles: Styles, target?: CssTarget): ParseResults {
    return parser(styles, target || "@default");
}
// export function parse(theme?: Theme, styles?: Styles): Styles;
// export function parse(props?: T, styles?: Styles): Styles;
// export function parse(props?: T, theme?: Theme, styles?: Styles): Styles;
