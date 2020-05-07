import { CssValidValueKind } from "../enums/CssValidValueKind";
import { CssTargetKind } from "../enums/CssTargetKind";
import { CssPseudoKind } from "../enums/CssPseudoKind";
import { CssAttributesKind } from "../enums/CssAttributesKind";

const isValueValid = (value: any): boolean => {
    if (value) {
        if (typeof value in CssValidValueKind) {
            return true;
        }

        return false;
    }

    return false;
};

const isPseudo = (value: any): boolean => {
    if (value && value in CssPseudoKind) {
        return true;
    }
    return false;
};

const isTarget = (value: any): boolean => {
    if (value && value in CssTargetKind) {
        return true;
    }
    return false;
};

const isValidCssAttribute = (value: any): boolean => {
    if (value && value in CssAttributesKind) {
        return true;
    }
    return false;
};

const isValidClassName = (value: any): boolean => {
    if (!value || value in CssAttributesKind || value in CssTargetKind || value in CssPseudoKind) {
        return false;
    }
    return true;
};

export const CssHelpers = {
    isValueValid,
    isTarget,
    isPseudo,
    isValidCssAttribute,
    isValidClassName,
};
