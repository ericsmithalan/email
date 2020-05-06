import { CssTheme } from "./CssTheme";
import { CssDirtyStyles, CssClassNames } from "./types";
import { CssFragment } from "./CssFragment";
export declare type Css = (styles: CssDirtyStyles, theme: CssTheme) => CssClassNames;
export declare const css: (styles: CssDirtyStyles, theme?: CssTheme) => CssFragment;
//# sourceMappingURL=Css.d.ts.map