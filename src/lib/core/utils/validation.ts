import { CssValueKind } from "../enums/ValidValueKind";
import { TargetKind } from "../enums/TargetKind";
import { PseudoKind } from "../enums/PseudoKind";
import { AttributesKind } from "../enums/AttributesKind";
import { StyleablePropertiesKind } from "../enums/StyleablePropertiesKind";
import { TagNameKind } from "../enums/TagNameKind";

export const isValueValid = (value: any): boolean => {
    if (value) {
        if (typeof value in CssValueKind) {
            return true;
        }
        return false;
    }
    return false;
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
