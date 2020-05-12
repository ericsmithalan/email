import CSS from "csstype";
import { CssPseudoKind } from "./enums/CssPseudoKind";
import { CssValidValueKind } from "./enums/CssValidValueKind";
import { CssTargetKind } from "./enums/CssTargetKind";

export type CssValue = keyof typeof CssValidValueKind;

export type CssPseudo = keyof typeof CssPseudoKind;

export type CssTarget = keyof typeof CssTargetKind;

export type CssArgs<T extends any> = { theme: CssTheme; props: T };
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
    props: any | undefined;
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

export type Breakpoint = {
    phone: number;
    tablet: number;
};

export type Spaceing = {
    xsm: number;
    sm: number;
    m: number;
    lg: number;
    xlg: number;
};

export interface CssTheme {
    name: string;
    colors: {
        backgroundColor: string;
        contentBackgroundColor: string;
        darkFontColor: string;
        lightFontColor: string;
        orangeColor: string;
        blueColor: string;
        purpleColor: string;
        linkColor: string;
        hoverColor: string;
        white: string;
    };
    fonts: {
        fontFamily: string;
        fontHeaderSize: number;
        fontSubHeaderSize: number;
        fontTitleSize: number;
        fontSubTitleSize: number;
        fontDefaultSize: number;
        fontSmallSize: number;
    };
    spacing: Spaceing;
    breakpoints: Breakpoint;
}
