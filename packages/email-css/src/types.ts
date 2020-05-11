import CSS from "csstype";
import { CssPseudoKind } from "./enums/CssPseudoKind";
import { CssValidValueKind } from "./enums/CssValidValueKind";
import { CssTargetKind } from "./enums/CssTargetKind";
import { CSSProperties, ReactNode } from "react";

export interface CssTheme {
    fontFamily: string;
    fontSize: string | number;
}

export interface CssStyleableComponent {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

export type CssValue = keyof typeof CssValidValueKind;

export type CssPseudo = keyof typeof CssPseudoKind;

export type CssTarget = keyof typeof CssTargetKind;

export type CssArgs<T extends CssStyleableComponent> = { theme: CssTheme; props: T };
export type Fn<R = CssValue> = (args: CssArgs<any>) => R;

export type Css = CssDirtyStyles;

export type CssDirtyValue = CssValue | Fn | string[] | number[] | Function | string;

export interface CssDirtyProperty<T extends CSS.Properties<T> | CssPseudo> {}

export type CssDirtyStyles = {
    [K in keyof CssDirtyProperty<K>]?: CssDirtyValue;
};

export type CssClassNames = {
    [key: string]: string;
};

export type CssParseArgs = {
    value: CssDirtyStyles;
    target: CssTarget;
    theme: CssTheme;
    classKey: string;
    pseudo: CssPseudo;
    props: CssStyleableComponent | undefined;
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
