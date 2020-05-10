import CSS from "csstype";
import { CssPseudoKind } from "./enums/CssPseudoKind";
import { CssValidValueKind } from "./enums/CssValidValueKind";
import { CssTargetKind } from "./enums/CssTargetKind";
import { CssAttributesKind } from "./enums/CssAttributesKind";

export interface CssTheme {
    fontFamily: string;
    fontSize: string | number;
}

export type CssUnit = "px" | undefined;

export type CssValue = keyof typeof CssValidValueKind;

export type CssPseudo = keyof typeof CssPseudoKind;

export type CssTarget = keyof typeof CssTargetKind;

export type CssAttribute = keyof typeof CssAttributesKind;

export type Fn<R = CssValue> = (theme: CssTheme) => R;

export type Css = CssDirtyStyles;

export type CssDirtyValue = CssValue | Fn | string[] | number[] | Function | string;

export interface CssDirtyProperty<T extends CSS.Properties<T> | CssPseudo> {}

export type CssDirtyStyles = {
    [K in keyof CssDirtyProperty<K>]?: CssDirtyValue;
};

export type CssClassNames = {
    [key: string]: string;
};

export interface CssPropertyDefinition {
    [key: string]: CssValue;
}

export interface CssClassDefinition {
    [key: string]: CssPropertyDefinition[];
}

export type CssParseArgs = {
    value: CssDirtyStyles;
    target: CssTarget;
    theme: CssTheme;
    classKey: string;
    pseudo: CssPseudo;
};

export type CssRepositoryList = {
    [K in CssTarget]: CssClassList;
};

export type CssClassList = {
    [K in string]: CssPropertyListItem;
};

export type CssPropertyListItem = {
    [K in string]: CssValue;
};

export type CssClassRecord<
    K,
    T extends CssPropertyRecord<keyof React.CSSProperties, CssPropertyDefinition[]>
> = {
    [K in string]: T;
};

export type CssPropertyRecord<
    K extends keyof React.CSSProperties,
    T extends CssPropertyDefinition[]
> = {
    [P in K]: T;
};
