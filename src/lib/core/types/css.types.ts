import CSS from "csstype";
import * as MSO from "./mso.types";
import { Theme } from "./theme.types";

export type CssValue = string | number;

type Fn = (p: any) => CssValue;

export interface CssProperties
    extends CSS.Properties<CssValue>,
        CSS.VendorProperties<CssValue>,
        MSO.FontProperties<CssValue>,
        MSO.Properties<CssValue> {}

export type Styles = {
    [K in string]?: CssProperties | TargetType | PsuedoType | PropertyType;
};

export type StyleSheet = {
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

export interface MergeCss {
    mergeCss?: string[];
}

export type ClassNameSelector = {
    [K in string]: string;
};
