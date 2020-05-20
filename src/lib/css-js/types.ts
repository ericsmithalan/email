import CSS from "csstype";
import { CSSProperties, ReactNode } from "react";

import { BaseModel } from "../../models/BaseModel";
import { GlobalTargetKind, TargetKind } from "../enums/TargetKind";
import { Theme } from "../theme/types";
import * as MSO from "./types.mso";

export type ParseArgs = {
    value: any;
    target: CssTarget;
    theme: Theme;
    classKey: string;
    pseudo: CssPseudo;
    props: Styleable;
};

export type ParsedValue = CssValue | Fn | Function | Object | Array<any>;
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
    parseWithModel: <T extends BaseModel>(theme: Theme, model: T) => StyleRepository;
    parseClassNames: () => KeyValue;
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

export type GlobalRepository = {
    [K in GlobalTarget]?: GlobalTargetType;
};

export type GlobalTargetType = {
    [K in "css"]: string;
};

export type ClassType = {
    [K in string]: CssProperties | TargetType | PsuedoType | PropertyType;
};

// TargetType's are stored as parents of ClassType
// however they are written as children of ClassTypes
//
// PsuedoType's are written as Children of ClassType but stored
// as child of TargetType
export type TargetType = {
    [K in CssTarget]: ClassType | PsuedoType | PropertyType;
};

export type PsuedoType = {
    [K in CssPseudo]: PropertyType;
};

export type PropertyType = {
    [K in keyof CssProperties]?: ParsedValue | CssValue;
};

export type GlobalTarget = keyof typeof GlobalTargetKind;
export type CssTarget = keyof typeof TargetKind;
export type CssPseudo = CSS.SimplePseudos;

export type KeyValue = {
    [key: string]: string;
};
