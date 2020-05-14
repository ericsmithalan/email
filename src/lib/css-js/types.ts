import CSS from "csstype";
import { CssPseudoKind } from "../enums/PseudoKind";
import { CssValueKind } from "../enums/ValidValueKind";
import { TargetKind } from "../enums/TargetKind";

import { CSSProperties } from "react";
import { Theme } from "../theme";

export interface MergeCss {
    mergeCss?: string[];
}

export type CssValue = keyof typeof CssValueKind;
export type CssPseudo = keyof typeof CssPseudoKind;
export type CssTarget = keyof typeof TargetKind;

export type CssProperties = CSSProperties;

export type Css<T extends any = any> = { theme: Theme; props: T };
export type Fn<R = CssValue> = (args: Css<any>) => R;

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
