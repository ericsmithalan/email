import { Styles } from "../types";

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
        lightWeight: number;
        normalWeight: number;
        boldWeight: number;
    };
    spacing: Spaceing;
    breakpoints: Breakpoint;
}
