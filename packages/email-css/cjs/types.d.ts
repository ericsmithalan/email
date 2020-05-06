import CSS from "csstype";
import { CssPseudoKind } from "./enums/CssPseudos";
import { CssValidValueKind } from "./enums/CssValidValue";
import { CssTargetKind } from "./enums/CssTarget";
import { Dictionary } from "typescript-collections";
import { CssTheme } from "./CssTheme";
export declare type CssValue = keyof typeof CssValidValueKind;
export declare type CssUnit = "px" | undefined;
export declare type Fn<R = CssValue> = (theme: CssTheme) => R;
export declare type CssPseudo = keyof typeof CssPseudoKind;
export declare type CssDirtyValue = CssValue | Fn | string[] | number[] | Function;
export declare type CssClasses = Dictionary<string, CssClass>;
export interface CssDirtyProperty<T extends CSS.Properties<T> | CssPseudo> {
}
export declare type CssTarget = keyof typeof CssTargetKind;
export declare type CssStyle = CssDirtyStyles;
export declare type CssDirtyStyles = {
    [K in keyof CssDirtyProperty<K>]?: CssDirtyValue | CssStyle;
};
export declare type CssClassNames = {
    [key: string]: string;
};
export interface CssFragmentStyles {
    globals: CssClass[];
    targets: CssClass[];
    pseudos: CssClass[];
}
export declare type CssProperty = {
    key: string;
    cssClass: string;
    name: string;
    value: CssValue;
    important: boolean;
    pseudo?: string;
    target?: string;
};
export declare type CssClass = {
    key: string;
    cssClass: string;
    properties: CssProperty[];
    pseudo?: string;
    target?: string;
};
//# sourceMappingURL=types.d.ts.map