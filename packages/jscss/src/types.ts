import * as CSS from "csstype";

export type StyleableProps = {
    className?: string;
    style?: AttributeSelector;
};

export type CssThemeBreakpoints = {
    phone: number;
    tablet: number;
};

export type CssTheme = {
    breakpoints?: CssThemeBreakpoints;
};

export type Css = ClassSelector;

export type ClassSelector = {
    [K in string]?: StyleKeySelector | PseudoSelector | AttributeSelector;
};
export type StyleKeySelector = {
    [K in keyof Responsive]?: AttributeSelector;
};
export type PseudoSelector = {
    [K in keyof CSS.Pseudos]?: AttributeSelector;
};

export type AttributeSelector = { [K in keyof Attribute]: Func<Attribute[K]> };

export type ClassNameSelector = {
    [K in string]?: string;
};

export type Sheets = {
    "@default": ClassSelector | PseudoSelector;
    "@phone": ClassSelector | PseudoSelector;
    "@tablet": ClassSelector | PseudoSelector;
};

export type AnySelector = ClassSelector | PseudoSelector | StyleKeySelector | AttributeSelector;

export type CssValue = string | number;

export type Args = { t: CssTheme; p: any };
export type Func<R> = R | ((a: Args) => R);
export type Func2 = (a: Args) => CssValue;

export type StyleKey = Responsive;
export type Responsive = "@default" | "@phone" | "@tablet";
export type Attribute = CSS.Properties<CssValue>;
export type Pseudo = CSS.Pseudos;

export interface Parser {
    parseClasses: () => ClassNameSelector;
    parse: <T extends StyleableProps>(props: T, theme: CssTheme, sheetKey?: StyleKey) => Sheets;
}

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
) => void
    ? I
    : never;

export type PropsOf<
    E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export type ParseArgs = {
    css: AnySelector;
    styleKey: StyleKey;
    theme: CssTheme;
    classKey: string;
    pseudo: Pseudo | undefined;
    props: StyleableProps;
};

// export type ThemedStyles<Theme> = (theme: Theme) => StaticStyle | DynamicStyle<Theme>;

// export type Styles<Theme> = StaticStyles | ThemedStyles<Theme>;

// selectors-list ::=
//     selector[:pseudo-class] [::pseudo-element]
//     [, selectors-list]

// properties-list ::=
//     [property : value] [; properties-list]

// export interface JsCssTheme {}

// export type Parse = {
//     value: Styles;
//     target: CssTarget;
//     theme: JsCssTheme;
//     classKey: string;
//     pseudo: CssPseudo;
//     props: Styleable;
// };

// export type ParsedValue = CssValue | Fn | Function | Object | Array<any>;
// export type CssValue = string | number | Symbol;

// export interface Styleable {
//     className?: string;
//     style?: CSS.Properties;
// }

// export interface Prop {
//     t: JsCssTheme;
//     p: any;
// }

// export interface ParseResults {
//     styles: StyleRepository;
//     classNames: KeyValue;
//     parse: <T extends Styleable>(
//         theme: JsCssTheme,
//         props: T,
//         target?: CssTarget
//     ) => StyleRepository;
//     parseClassNames: () => KeyValue;
// }

// export type Fn<R extends CssValue = CssValue> = (p: Prop) => R;

// //Fn = (<R extends CssValue>(t: any, p: any) => R) & Function;

// export interface CssProperties
//     extends CSS.Properties<CssValue>,
//         CSS.VendorProperties<CssValue>,
//         MSO.FontProperties<CssValue>,
//         MSO.Properties<CssValue> {}

// export type Styles = {
//     [K in string]: TargetType | PsuedoType | PropertyType | ClassType;
// };

// export type StyleRepository = {
//     [K in CssTarget]?: ClassType;
// };

// export type GlobalRepository = {
//     [K in GlobalTarget]?: GlobalTargetType;
// };

// export type GlobalTargetType = {
//     [K in "css"]: string;
// };

// export type ClassType = {
//     [K in string]: TargetType | PsuedoType | PropertyType;
// };

// // TargetType's are stored as parents of ClassType
// // however they are written as children of ClassTypes
// //
// // PsuedoType's are written as Children of ClassType but stored
// // as child of TargetType
// export type TargetType = {
//     [K in CssTarget]: ClassType | PsuedoType | PropertyType;
// };

// export type PsuedoType = {
//     [K in CssPseudo]: PropertyType;
// };

// export type PropertyType = {
//     [K in keyof CssProperties]: ParsedValue | CssValue;
// };

// export type GlobalTarget = keyof typeof GlobalTargetKind;
// export type CssTarget = keyof typeof TargetKind;
// export type CssPseudo = CSS.SimplePseudos;

// export type KeyValue = {
//     [key: string]: string;
// };
