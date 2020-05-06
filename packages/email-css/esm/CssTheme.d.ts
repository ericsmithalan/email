export declare const defaultTheme: CssTheme;
export declare type CssTheme = {
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
    spacing: CssSpace;
    breakpoints: CssBreakpoint;
};
export declare type CssBreakpoint = {
    phone: number;
    tablet: number;
};
export declare type CssSpace = {
    xsm: number;
    sm: number;
    m: number;
    lg: number;
    xlg: number;
};
//# sourceMappingURL=CssTheme.d.ts.map