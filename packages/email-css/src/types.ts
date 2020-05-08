import CSS from "csstype";
import { CssPseudoKind } from "./enums/CssPseudoKind";
import { CssValidValueKind } from "./enums/CssValidValueKind";
import { CssTargetKind } from "./enums/CssTargetKind";
import { CssTheme } from "./theme/CssTheme";
import { CssAttributesKind } from "./enums/CssAttributesKind";
import { CssPropertyCollection } from "./collections/CssPropertyCollection";
import { GenericCollection } from "./collections/GenericCollection";

export type CssUnit = "px" | undefined;

export type CssValue = keyof typeof CssValidValueKind;

export type CssPseudo = keyof typeof CssPseudoKind;

export type CssTarget = keyof typeof CssTargetKind;

export type CssAttribute = keyof typeof CssAttributesKind;

export type Fn<R = CssValue> = (theme: CssTheme) => R;

export type CssStyleFragment = CssDirtyStyles;

export type CssDirtyValue = CssValue | Fn | string[] | number[] | Function | string;

export interface CssDirtyProperty<T extends CSS.Properties<T> | CssPseudo> {}

export type CssDirtyStyles = {
    [K in keyof CssDirtyProperty<K>]?: CssDirtyValue;
};

export type CssClassNames = {
    [key: string]: string;
};

export interface Collectable {
    id: string;
    className: string;
}

export interface CssPropertyDefinition extends Collectable {
    key: string;
    classId: string;
    className: string;
    name: string;
    value: CssValue;
    css: string;
}

export interface CssClassDefinition extends Collectable {
    key: string;
    className: string;
    target: CssTarget;
    css: string;
    psuedo: CssPseudo;
}

export type CssParseArgs = {
    value: CssDirtyStyles;
    target: CssTarget;
    theme: CssTheme;
    classKey: string;
    classId: string;
    propertyKey: string;
    pseudo: CssPseudo;
};

export type CollectionMap<T extends Collectable> = Map<string, Map<string, T>>;

export type ClassCollectionType = GenericCollection<CssClassDefinition>;

export type GenericCollectionType<T extends Collectable> = GenericCollection<T>;

export type PropertyCollectionType = GenericCollection<CssPropertyDefinition>;

export interface ClassCollectionTuple<K extends string, T> {
    0: K;
    1: T;
}

export interface CallbackFn<K extends string, T> {
    (key: K, value: T): T;
}
