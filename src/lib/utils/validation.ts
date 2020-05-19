import _ from "underscore";

import { AttributesKind } from "../enums/AttributesKind";
import { PseudoKind } from "../enums/PseudoKind";
import { StyleablePropertiesKind } from "../enums/StyleablePropertiesKind";
import { TagNameKind } from "../enums/TagNameKind";
import { TargetKind } from "../enums/TargetKind";

export const isValueValid = (value: any): boolean => {
    if (!hasValue(value)) {
        return false;
    }

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

export const isPseudo = (value: string): boolean => {
    if (!hasValue(value)) {
        return false;
    }

    if (value && value in PseudoKind) {
        return true;
    }

    if (value && value.indexOf(":") !== -1) {
        return true;
    }

    return false;
};

export const isStyleableProperty = (value: any): boolean => {
    if (!hasValue(value)) {
        return false;
    }

    if (value && value in StyleablePropertiesKind) {
        return true;
    }
    return false;
};

export const isTarget = (value: any): boolean => {
    if (!hasValue(value)) {
        return false;
    }

    if (value && value in TargetKind) {
        return true;
    }
    return false;
};

export const isTagName = (value: any): boolean => {
    if (!hasValue(value)) {
        return false;
    }

    if (value && value in TagNameKind) {
        return true;
    }
    return false;
};

export const isValidClassName = (value: string): boolean => {
    if (!hasValue(value)) {
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

export const hasValue = (value: any): boolean => {
    if (value === undefined || value === null || value === "") {
        return false;
    }

    return true;
};
