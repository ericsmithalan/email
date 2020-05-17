import CSS from "csstype";
import * as MSO from "./types.mso";
import { CSSProperties } from "react";
import { Theme } from "../theme/types";

export type ParseArgs = {
    value: object | string | number;
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
    commoncss?: string[];
}

export interface Prop {
    t?: Theme;
    p?: any;
}

export interface ParseResults {
    styles: StyleRepository;
    classNames: ClassNameSelector;
    parse: <T extends Styleable>(theme: Theme, props?: T, target?: CssTarget) => StyleRepository;
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

type ClassType = {
    [K in string]?: CssProperties;
};

type TargetType = {
    [K in CssTarget]?: PropertyType;
};

type PsuedoType = {
    [K in CssPseudo]?: PropertyType;
};

type PropertyType = {
    [K in keyof CssProperties]?: CssValue | Fn;
};

export type CssTarget = "@tablet" | "@phone" | "@common" | "@base" | "@reset" | "@default";
export type CssPseudo = CSS.SimplePseudos | "none";

export type ClassNameSelector = {
    [K in string]: string;
};
