import React from "react";
import { CssValidValueKind } from "../enums/CssValidValueKind";
import { CssTargetKind } from "../enums/CssTargetKind";
import { CssPseudoKind } from "../enums/CssPseudoKind";
import { CssAttributesKind } from "../enums/CssAttributesKind";
import { CssStyleablePropertiesKind } from "../enums/CssStyleablePropertiesKind";
import { CSSProperties } from "react";

import _ from "underscore";

/**
 * typeof value has to be in CssValidValueKind
 */
const isValueValid = (value: any): boolean => {
    if (value) {
        if (typeof value in CssValidValueKind) {
            return true;
        }

        return false;
    }

    return false;
};

/**
 * value has to be in CssPseudoKind
 */
const isPseudo = (value: any): boolean => {
    if (value && value in CssPseudoKind) {
        return true;
    }
    return false;
};

/**
 * value has to be in CssStyleablePropertiesKind
 */
const isStyleableProperty = (value: any): boolean => {
    if (value && value in CssStyleablePropertiesKind) {
        return true;
    }
    return false;
};

/**
 * value has to be in CssTargetKind
 */
const isTarget = (value: any): boolean => {
    if (value && value in CssTargetKind) {
        return true;
    }
    return false;
};

/**
 * value has to be in CssAttributesKind
 */
const isValidCssAttribute = (value: any): boolean => {
    if (value && value in CssAttributesKind) {
        return true;
    }
    return false;
};

/**
 * value cannot be Target, CssAttribute, or Pseudo
 */
const isValidClassName = (value: string): boolean => {
    if (value === undefined) {
        return false;
    }

    if (value in CssAttributesKind) {
        return false;
    }
    if (value in CssTargetKind) {
        return false;
    }
    if (value in CssPseudoKind) {
        return false;
    }

    return true;
};

/**
 * value cannot be Target, CssAttribute, or Pseudo
 */
const getStyleableProps = <T>(props: React.HTMLProps<T>): CSSProperties => {
    const results = {};
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            if (isStyleableProperty(key)) {
                const value = props[key];
                results[key] = value;
            }
        }
    }

    return results;
};

/**
 * camelizes string
 * a usable value
 */
const camelize = (str: string): string => {
    if (str) {
        return str.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2, offset) => {
            if (p2) {
                return p2.toUpperCase();
            }
            return p1.toLowerCase();
        });
    } else {
        console.error(`camelize could not parse str: ${str}`);
    }
};

/**
 * de-camelizes string
 * a usable value
 */
const decamelize = (str: string) => {
    if (str) {
        const separator = "-";
        return str
            .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
            .toLowerCase();
    }
};

/**
 * creates a hash id
 * a usable value
 */
const stringHashId = (...str: string[]): string => {
    let value = 5381;
    let len = str.join("").length;
    while (len--) value = (value * 33) ^ str.join("").charCodeAt(len);
    return (value >>> 0).toString(36);
};

/**
 * looks for key in object
 */
const hasKey = (obj: object, key: string): boolean => {
    return _.has(obj, key);
};

const combineClassNames = (
    defaultProps: React.HTMLProps<any> | undefined,
    props: React.HTMLProps<any> | undefined,
) => {
    const class1 = defaultProps?.className || "";
    const class2 = props.className || "";

    return `${class1} ${class2}`.trim();
};

const uniqueId = (): string => {
    return Math.random().toString(36).slice(2);
};

const cleanCssStringValue = (value: string): string => {
    if (value) {
        console.log(value);
        // let str = value;
        // if (value) {
        //     str.replace("px", "");
        // }

        // return str;
    }

    return undefined;
};

export const CssHelpers = {
    isValueValid,
    isTarget,
    isPseudo,
    isValidCssAttribute,
    isValidClassName,
    isStyleableProperty,
    getStyleableProps,
    camelize,
    decamelize,
    stringHashId,
    hasKey,
    combineClassNames,
    uniqueId,
    cleanCssStringValue,
};
