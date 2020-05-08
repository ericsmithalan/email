import { CssValidValueKind } from "../enums/CssValidValueKind";
import { CssTargetKind } from "../enums/CssTargetKind";
import { CssPseudoKind } from "../enums/CssPseudoKind";
import { CssAttributesKind } from "../enums/CssAttributesKind";
import { CssStyleablePropertiesKind } from "../enums/CssStyleablePropertiesKind";
import { CSSProperties } from "react";
import { CssPropertyDefinition, CssValue, CssClassDefinition } from "../types";
import { CssCollection } from "../collections/CssCollection";
import { CssPropertyCollection } from "../collections/CssPropertyCollection";
import _ from "underscore";

/**
 * typeof value has to be in CssValidValueKind
 * @param value
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
 * @param value
 */
const isPseudo = (value: any): boolean => {
    if (value && value in CssPseudoKind) {
        return true;
    }
    return false;
};

/**
 * value has to be in CssStyleablePropertiesKind
 * @param value
 */
const isStyleableProperty = (value: any): boolean => {
    if (value && value in CssStyleablePropertiesKind) {
        return true;
    }
    return false;
};

/**
 * value has to be in CssTargetKind
 * @param value
 */
const isTarget = (value: any): boolean => {
    if (value && value in CssTargetKind) {
        return true;
    }
    return false;
};

/**
 * value has to be in CssAttributesKind
 * @param value
 */
const isValidCssAttribute = (value: any): boolean => {
    if (value && value in CssAttributesKind) {
        return true;
    }
    return false;
};

/**
 * value cannot be Target, CssAttribute, or Pseudo
 * @param value
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
 * @param props
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
 * @param props
 */
const toCssPropertyDefinition = (
    classId: string,
    className: string,
    ...styleableProps: CSSProperties[]
) => {
    const definitions = new CssCollection<CssPropertyDefinition>();

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
                        definitions.set(classId, property.id, property);
                    }
                }
            }
        }
    });

    return definitions;
};

/**
 * validates PropertyDefinition
 * @param property
 * @param log
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
            if (!value && key != "css") {
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
 * validates ClassDefnitions
 */
const isClassDefinitionValid = (property: CssClassDefinition, log: boolean = false): boolean => {
    const results: string[] = [];
    let isValid = true;
    for (const key in property) {
        if (property.hasOwnProperty(key)) {
            const value = property[key];
            if (!value && key != "css") {
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
const renderCssClass = (
    className: string,
    key: string,
    properties: CssPropertyCollection,
): string => {
    const css: string[] = [];

    const clsName = classNameToString(key, className);

    properties.forEach((key: string, value: CssPropertyDefinition) => {
        css.push(value.css);
    });

    return classStringTemplate(clsName, css.join(""));
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
};
