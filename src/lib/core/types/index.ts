import CSS from "csstype";
import * as MSO from "./mso.types";

import { Theme } from "./theme.types";

export type CssValue = string | number;

type Fn2 = (p: Theme | any) => CssValue;

interface CssProperties
    extends CSS.Properties<CssValue>,
        CSS.VendorProperties<CssValue>,
        MSO.FontProperties<CssValue>,
        MSO.Properties<CssValue> {}

export type Styles = {
    [K in string]?: CssProperties | TargetType | PsuedoType | PropertyType;
};

export type StyleSheet = {
    [K in TargetSelector]?: ClassType;
};

type ClassType = {
    [K in string]?: CssProperties;
};

type TargetType = {
    [K in TargetSelector]?: PropertyType;
};

type PsuedoType = {
    [K in PsudoSelector]?: PropertyType;
};

type PropertyType = {
    [K in keyof CssProperties]?: CssValue | Fn2;
};

export type TargetSelector = "@tablet" | "@phone" | "@common" | "@base";
export type PsudoSelector = CSS.SimplePseudos;
