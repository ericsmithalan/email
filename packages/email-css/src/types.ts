import CSS from "csstype";
import { CssPseudoKind } from "./CssPseudos";
import { CssValidValueKind } from "./CssValidValue";
import { CssTargetKind } from "./CssTarget";
import { CssTheme } from "./CssTheme";
import { CssAttributesKind } from "./CssAttributes";
import { CssPropertyCollection } from "./CssPropertyCollection";
import { CssCollection } from "./CssCollection";

export type CssUnit = "px" | undefined;

export type CssValue = keyof typeof CssValidValueKind;

export type CssPseudo = keyof typeof CssPseudoKind;

export type CssTarget = keyof typeof CssTargetKind;

export type CssAttribute = keyof typeof CssAttributesKind;

export type Fn<R = CssValue> = (theme: CssTheme) => R;

export type CssDirtyValue = CssValue | Fn | string[] | number[] | Function;

export interface CssDirtyProperty<T extends CSS.Properties<T> | CssPseudo> {}

export type CssDirtyStyles = {
    [K in keyof CssDirtyProperty<K>]?: CssDirtyValue;
};

export type CssClassNames = {
    [key: string]: string;
};

export type CssPropertyDefinition = {
    key: string;
    className: string | undefined;
    name: string;
    value: CssValue;
    css: string;
};

export type CssClassDefinition = {
    key: string;
    className: string;
    target: CssTarget;
    css: string;
    isPseudo: boolean;
    properties: CssPropertyCollection;
};

export type ClassCollection = CssCollection<string, CssClassDefinition>;

export type GenericCollection<T> = CssCollection<string, T>;

export type PropertyCollection = CssCollection<string, CssPropertyDefinition>;

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
