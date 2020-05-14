import CSS from "csstype";
import { CssPseudoKind } from "../enums/PseudoKind";
import { CssValueKind } from "../enums/ValidValueKind";
import { TargetKind } from "../enums/TargetKind";

import { CSSProperties } from "react";

export interface MergeCss {
    mergeCss?: string[];
}

export type CssValue = keyof typeof CssValueKind;
export type CssPseudo = keyof typeof CssPseudoKind;
export type CssTarget = keyof typeof TargetKind;

export type CssProperties = CSSProperties;

export type Css<T extends any = any> = { theme: Theme; props: T };
export type Fn<R = CssValue> = (args: Css<any>) => R;

export type CssStyle = DirtyStyles;

export type DirtyValue = CssValue | Fn | string[] | number[] | Function | string;
export type DirtyProperty = CSS.Properties | CssPseudo | CssTarget;

export type DirtyStyles = {
    [K in string & keyof DirtyProperty]?: DirtyValue;
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
    [K in CssTarget]?: StyleSheetClasses;
};

export type StyleSheetClasses = {
    [K in string]: StyleSheetProperty;
};

export type StyleSheetProperty = {
    [K in string]: CssValue;
};

export interface CommonCss {
    defaultText: DirtyStyles;
    fullWidth: DirtyStyles;
}

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
