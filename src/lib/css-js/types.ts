import CSS from "csstype";
import { CSSProperties, ReactNode } from "react";

import { Theme } from "../theme/types";
import * as MSO from "./types.mso";

export type ParseArgs = {
    value: any;
    target: CssTarget;
    theme: Theme;
    classKey: string;
    pseudo: CssPseudo;
    props: any | undefined;
};

export type CssValue = string | number | Symbol;

export interface Styleable {
    uid?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

export interface Prop {
    t: Theme;
    p: any;
}

export interface ParseResults {
    styles: StyleRepository;
    classNames: KeyValue;
    parse: <T extends Styleable>(theme: Theme, props: T, target?: CssTarget) => StyleRepository;
}

export type Fn<R extends CssValue = CssValue> = (p: Prop) => R;

//Fn = (<R extends CssValue>(t: any, p: any) => R) & Function;

export interface CssProperties
    extends CSS.Properties<CssValue>,
        CSS.VendorProperties<CssValue>,
        MSO.FontProperties<CssValue>,
        MSO.Properties<CssValue> {}

export type Styles = {
    [K in string]?: CssProperties | TargetType | PsuedoType | PropertyType;
};

export type StyleRepository = {
    [K in CssTarget]?: ClassType;
};

export type ClassType = {
    [K in string]?: CssProperties;
};

export type TargetType = {
    [K in CssTarget]?: PropertyType;
};

export type PsuedoType = {
    [K in CssPseudo]?: PropertyType;
};

export type PropertyType = {
    [K in keyof CssProperties]?: CssValue | Fn;
};

export type CssTarget = "@tablet" | "@phone" | "@common" | "@base" | "@reset" | "@default";
export type CssPseudo = CSS.SimplePseudos | "none";

export type KeyValue = {
    [K in string]: string;
};
