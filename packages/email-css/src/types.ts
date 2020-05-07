import CSS from "csstype";
import { CssPseudoKind } from "./CssPseudoKind";
import { CssValidValueKind } from "./CssValidValueKind";
import { CssTargetKind } from "./CssTargetKind";
import { CssTheme } from "./CssTheme";
import { CssAttributesKind } from "./CssAttributesKind";
import { CssPropertyCollection } from "./CssPropertyCollection";
import { CssGenericCollection } from "./CssGenericCollection";

export type CssUnit = "px" | undefined;

export type CssValue = keyof typeof CssValidValueKind;

export type CssPseudo = keyof typeof CssPseudoKind;

export type CssTarget = keyof typeof CssTargetKind;

export type CssAttribute = keyof typeof CssAttributesKind;

export type Fn<R = CssValue> = (theme: CssTheme) => R;

export type CssStyle = CssDirtyStyles;

export type CssDirtyValue = CssValue | Fn | string[] | number[] | Function | string;

export interface CssDirtyProperty<T extends CSS.Properties<T> | CssPseudo> {}

export type CssDirtyStyles = {
    [K in keyof CssDirtyProperty<K>]?: CssDirtyValue;
};

export type CssClassNames = {
    [key: string]: string;
};

export interface CssPropertyDefinition extends Collectable {
    key: string;
    className: string;
    name: string;
    value: CssValue;
    css: string;
    target: CssTarget;
    psuedo: CssPseudo;
}

export type CssParseArgs = {
    value: CssDirtyStyles;
    target: CssTarget;
    theme: CssTheme;
    classKey: string;
    propertyKey: string;
    pseudo: CssPseudo;
};

export interface CssClassDefinition extends Collectable {
    key: string;
    className: string;
    target: CssTarget;
    css: string;
    psuedo: CssPseudo;
    properties: PropertyCollection;
}

export type ClassCollection = CssGenericCollection<string, CssClassDefinition>;

export type GenericCollection<T extends Collectable> = CssGenericCollection<string, T>;

export type PropertyCollection = CssGenericCollection<string, CssPropertyDefinition>;

export interface ClassCollectionTuple<K extends string, T> {
    0: K;
    1: T;
}

export interface CallbackFn<K extends string, T> {
    (key: K, value: T): T;
}

export interface Collectable {
    id: string;
}
