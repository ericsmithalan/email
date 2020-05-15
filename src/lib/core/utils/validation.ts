import { CssValue } from "../types/css.types";
import CSS from "csstype";
import { PseudoKind } from "../enums/PseudoKind";
import { StyleablePropertiesKind } from "../enums/StyleablePropertiesKind";
import { TargetKind } from "../enums/TargetKind";
import { TagNameKind } from "../enums/TagNameKind";
import { AttributesKind } from "../enums/AttributesKind";
import _ from "underscore";

export const isValueValid = (value: any): boolean => {
    if (value) {
        if (typeof value === "string" || typeof value === "number") {
            return true;
        }
        return false;
    }
    return false;
};

export const isObject = (value: any): boolean => {
    return _.isObject(value);
};

export const isArray = (value: any): boolean => {
    return _.isArray(value);
};

export const isFunction = (value: any): boolean => {
    return _.isFunction(value);
};

export const isPseudo = (value: any): boolean => {
    if (value && value in PseudoKind) {
        return true;
    }
    return false;
};

export const isStyleableProperty = (value: any): boolean => {
    if (value && value in StyleablePropertiesKind) {
        return true;
    }
    return false;
};

export const isTarget = (value: any): boolean => {
    if (value && value in TargetKind) {
        return true;
    }
    return false;
};

export const isTagName = (value: any): boolean => {
    if (value && value in TagNameKind) {
        return true;
    }
    return false;
};

export const isValidClassName = (value: string): boolean => {
    if (value === undefined) {
        return false;
    }

    if (value in AttributesKind) {
        return false;
    }
    if (value in TargetKind) {
        return false;
    }
    if (value in PseudoKind) {
        return false;
    }

    return true;
};
