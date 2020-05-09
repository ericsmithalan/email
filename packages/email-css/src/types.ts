import CSS from "csstype";
import { CssPseudoKind } from "./enums/CssPseudoKind";
import { CssValidValueKind } from "./enums/CssValidValueKind";
import { CssTargetKind } from "./enums/CssTargetKind";
import { CssTheme } from "./theme/CssTheme";
import { CssAttributesKind } from "./enums/CssAttributesKind";

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

export interface CssPropertyDefinition {
    id: string;
    classId: string;
    name: string;
    value: CssValue;
}

export interface CssClassDefinition {
    id: string;
    className: string;
    target: CssTarget;
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

export type PropertyRepository = CssRecord<string, PropertyRecord[]>;
export type ClassRepository = CssRecord<string, ClassRecord[]>;

export type PropertyRecord = CssRecord<string, CssPropertyDefinition>;
export type ClassRecord = CssRecord<string, CssClassDefinition>;

export type GenericRecord<T> = CssRecord<string, T>;

export type CssRecord<K extends string, T> = {
    [P in K]: T;
};
