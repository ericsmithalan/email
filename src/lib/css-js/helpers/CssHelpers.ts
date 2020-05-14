import React from "react";
import { CssValueKind } from "../../core/enums/ValidValueKind";
import { TargetKind } from "../../core/enums/TargetKind";
import { CssPseudoKind } from "../../core/enums/PseudoKind";
import { AttributesKind } from "../../core/enums/AttributesKind";
import { StyleablePropertiesKind } from "../../core/enums/StyleablePropertiesKind";

import _ from "underscore";
import { TagNameKind } from "../../core/enums/TagNameKind";

const isValueValid = (value: any): boolean => {
    if (value) {
        if (typeof value in CssValueKind) {
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

const isStyleableProperty = (value: any): boolean => {
    if (value && value in StyleablePropertiesKind) {
        return true;
    }
    return false;
};

const isTarget = (value: any): boolean => {
    if (value && value in TargetKind) {
        return true;
    }
    return false;
};

const isTagName = (value: any): boolean => {
    if (value && value in TagNameKind) {
        return true;
    }
    return false;
};

const isValidClassName = (value: string): boolean => {
    if (value === undefined) {
        return false;
    }

    if (value in AttributesKind) {
        return false;
    }
    if (value in TargetKind) {
        return false;
    }
    if (value in CssPseudoKind) {
        return false;
    }

    return true;
};

const camelize = (str: string): string => {
    if (str) {
        return str
            .replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2, offset) => {
                if (p2) {
                    return p2.toUpperCase();
                }
                return p1.toLowerCase();
            })
            .replace(":", "_");
    } else {
        throw new Error(`camelize could not parse str: ${str}`);
    }
};

const decamelize = (str: string) => {
    if (str) {
        const separator = "-";
        return str
            .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
            .toLowerCase()
            .replace("_", ":");
    } else {
        throw new Error(`camelize could not parse str: ${str}`);
    }
};

const mergeClassNames = (defaultProps: any, props: any) => {
    const dirty: string[] = [];
    const clean: string[] = [];

    if (defaultProps && defaultProps.className) {
        if (defaultProps.className.split(" ").length > 1) {
            dirty.concat(defaultProps.className.split(" "));
        } else {
            dirty.push(defaultProps.className);
        }
    }

    if (props && props.className) {
        if (props.className.split(" ").length > 1) {
            dirty.concat(props.className.split(" "));
        } else {
            dirty.push(props.className);
        }
    }

    dirty.forEach((item) => {
        if (!clean.includes(item)) {
            clean.push(item);
        }
    });

    return clean.join(" ");
};

export const CssHelpers = {
    isValueValid,
    isTarget,
    isPseudo,
    isValidClassName,
    isStyleableProperty,
    camelize,
    decamelize,
    mergeClassNames,
    isTagName,
};
