import CSS from "csstype";
import { CssPseudoKind } from "./enums/CssPseudos";
import { CssValidValueKind } from "./enums/CssValidValue";
import { CssTargetKind } from "./enums/CssTarget";
import { Dictionary } from "typescript-collections";
import { CssTheme } from "./CssTheme";

export type CssValue = keyof typeof CssValidValueKind;
export type CssUnit = "px" | undefined;
export type Fn<R = CssValue> = (theme: CssTheme) => R;
export type CssPseudo = keyof typeof CssPseudoKind;
export type CssDirtyValue = CssValue | Fn | string[] | number[] | Function;
export type CssClasses = Dictionary<string, CssClass>;
export interface CssDirtyProperty<T extends CSS.Properties<T> | CssPseudo> {}
export type CssTarget = keyof typeof CssTargetKind;
export type CssStyle = CssDirtyStyles;

export type CssDirtyStyles = {
    [K in keyof CssDirtyProperty<K>]?: CssDirtyValue | CssStyle;
};

export type CssClassNames = {
    [key: string]: string;
};

export interface CssFragmentStyles {
    globals: CssClass[];
    targets: CssClass[];
    pseudos: CssClass[];
}

export type CssProperty = {
    key: string;
    cssClass: string;
    name: string;
    value: CssValue;
    important: boolean;
    pseudo?: string;
    target?: string;
};

export type CssClass = {
    key: string;
    cssClass: string;
    properties: CssProperty[];
    pseudo?: string;
    target?: string;
};
