import React from "react";
import { CssValidValueKind } from "../enums/CssValidValueKind";
import { CssTargetKind } from "../enums/CssTargetKind";
import { CssPseudoKind } from "../enums/CssPseudoKind";
import { CssAttributesKind } from "../enums/CssAttributesKind";
import { CssStyleablePropertiesKind } from "../enums/CssStyleablePropertiesKind";
import { CSSProperties } from "react";
import {
    CssPropertyDefinition,
    CssValue,
    CssClassDefinition,
    GenericCollectionValues,
} from "../types";
import { CssCollection } from "../collections/CssCollection";
import _ from "underscore";
import { GenericCollection } from "../collections/GenericCollection";

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
 * used to extract items where the key matches CssAttributes
 * in CssStyleablePropertiesKind
 */
const findStyleableProps = (props: object): CSSProperties => {
    const results = {};
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            if (CssHelpers.isStyleableProperty(key)) {
                results[key as string] = props[key];
            }
        }
    }

    return results;
};

/**
 * converts CSSProperties to Property Definitions
 * in CssStyleablePropertiesKind
 */
const toCssPropertyDefinition = (
    classId: string,
    className: string,
    ...styleableProps: CSSProperties[]
): GenericCollectionValues<CssPropertyDefinition> => {
    const definitions = new GenericCollection<CssPropertyDefinition>();

    styleableProps.forEach((obj) => {
        if (obj && Object.keys(obj)) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = obj[key];

                    const property: CssPropertyDefinition = {
                        id: key,
                        classId: classId,
                        key: key,
                        className: className,
                        name: decamelize(key),
                        value: value as CssValue,
                        css: "",
                    };

                    if (isPropertyDefinitionValid(property, true)) {
                        definitions.set(property.id, property);
                    }
                }
            }
        }
    });

    return definitions.values;
};

/**
 * validates PropertyDefinition
 */
const isPropertyDefinitionValid = (
    property: CssPropertyDefinition,
    log: boolean = false,
): boolean => {
    const results: string[] = [];
    let isValid = true;

    for (const key in property) {
        if (property.hasOwnProperty(key)) {
            const value = property[key];
            if (!value && typeof value in CssValidValueKind && key != "css") {
                // 0 is not a valid number type
                if (value !== "0" && value !== 0) {
                    results.push(key);
                    isValid = false;
                }
            }
        }
    }

    if (log && results.length > 0) {
        console.error(`invalid property ${results.join(",")} ${property.value}`);
    }

    return isValid;
};

/**
 * validates ClassDefnitions
 */
const isClassDefinitionValid = (property: CssClassDefinition, log: boolean = false): boolean => {
    const results: string[] = [];
    let isValid = true;
    for (const key in property) {
        if (property.hasOwnProperty(key)) {
            const value = property[key];
            if (!value && typeof value === "object" && key !== "css") {
                results.push(key);
                isValid = false;
            }
        }
    }

    if (log && results.length > 0) {
        console.error(`invalid property ${results.join(",")}`);
    }

    return isValid;
};

/**
 * renders css Class
 */
const renderCssClass = (className: string, key: string, properties: object): string => {
    const css: string[] = [];

    const clsName = classNameToString(key, className);

    // properties.forEach((key: string, value: CssPropertyDefinition) => {
    //     css.push(value.css);
    // });

    return classStringTemplate(clsName, css.join(""));
};

/**
 * convert CssProperties to
 */
const toGenericCollection = <T>(...obj: T[]): GenericCollectionValues<T> => {
    const results: GenericCollectionValues<T> = {};

    const merged = { ...obj };
    for (const key in merged) {
        if (merged.hasOwnProperty(key)) {
            const value = merged[key];

            if (CssHelpers.isValueValid(value)) {
                results[key] = value;
            }
        }
    }

    return results;
};

/**
 * renders css Class
 */
const classNameToString = (key: string, className: string): string => {
    let name = key;

    if (key in CssPseudoKind) {
        if (className) {
            name = `${decamelize(className)}${decamelize(key)}`;
        }
    } else {
        name = `${decamelize(className)}`;
    }

    return name;
};

/**
 * renders css Class
 */
const classStringTemplate = (className: string, properties: string): string => {
    return `.${className}{${properties}}`;
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
    const separator = "-";
    return str
        .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
        .toLowerCase();
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

export const CssHelpers = {
    isValueValid,
    isTarget,
    isPseudo,
    isValidCssAttribute,
    isValidClassName,
    isStyleableProperty,
    findStyleableProps,
    toCssPropertyDefinition,
    isPropertyDefinitionValid,
    camelize,
    decamelize,
    stringHashId,
    isClassDefinitionValid,
    renderCssClass,
    hasKey,
    toGenericCollection,
    combineClassNames,
};
