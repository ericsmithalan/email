import CSS from "csstype";
import { CssPseudoKind } from "./enums/CssPseudoKind";
import { CssValidValueKind } from "./enums/CssValidValueKind";
import { CssTargetKind } from "./enums/CssTargetKind";

export type CssValue = keyof typeof CssValidValueKind;
export type CssPseudo = keyof typeof CssPseudoKind;
export type CssTarget = keyof typeof CssTargetKind;

export type CssArgs<T extends any> = { theme: Theme; props: T };
export type Fn<R = CssValue> = (args: CssArgs<any>) => R;

export type DirtyValue = CssValue | Fn | string[] | number[] | Function | string;
export interface DirtyProperty<T extends CSS.Properties<T> | CssPseudo> {}

export type DirtyStyles = {
    [K in keyof DirtyProperty<K>]?: DirtyValue;
};

export type CssClassNames = {
    [key: string]: string;
};

export type ParserProps = {
    value: DirtyStyles;
    target: CssTarget;
    theme: Theme;
    classKey: string;
    pseudo: CssPseudo;
    props: any | undefined;
};

export type StyleSheet = {
    [K in CssTarget]: StyleSheetClasses;
};

export type StyleSheetClasses = {
    [K in string]: StyleSheetProperty;
};

export type StyleSheetProperty = {
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

export interface Theme {
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
