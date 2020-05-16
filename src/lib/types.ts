import CSS from "csstype";
import * as MSO from "./types.mso";

export interface CommonCss {
    defaultText: Styles;
    fullWidth: Styles;
}

export type CssStyle = Styles;

export type Spaceing = {
    xsm: number;
    sm: number;
    m: number;
    lg: number;
    xlg: number;
};

export type Breakpoint = {
    phone: number;
    tablet: number;
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
        googleFonts: string;
        headerFontFamily: string;
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

export type DepricatedAlign = "center" | "left" | "right";

export interface PrimitveElement extends Styleable {
    commoncss?: string[];
}

export type DepricatedElementAttributes = {
    width?: number | string;
    height?: number | string;
};

export type DepricatedTableAttributes = {
    align?: DepricatedAlign;
    bgcolor?: string | string;
    cellPadding?: number | string;
    cellSpacing?: number | string;
    border?: number | string;
};

export type DepricatedLinkAttributes = {
    border?: number | string;
};

export type DepricatedImageAttributes = {
    align?: DepricatedAlign;
    border?: number | string;
    hspace?: number | string;
    vspace?: number | string;
};

export type DepricatedTdAttributes = {
    align?: DepricatedAlign;
    bgcolor?: string;
    nowrap?: string;
    valign?: "top" | "middle" | "bottom" | "baseline";
};

export type DepricatedTrAttributes = {
    bgcolor?: string;
};

export type DepricatedHrAttributes = {
    align?: string;
};

export type DepricatedBodyAttributes = {
    background?: string;
    bgcolor?: string;
};

export type ParseArgs = {
    value: object | string | number;
    target: CssTarget;
    theme: Theme;
    classKey: string;
    pseudo: CssPseudo;
    props: any | undefined;
};

export type CssValue = string | number | Symbol;

export interface Styleable {}

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
