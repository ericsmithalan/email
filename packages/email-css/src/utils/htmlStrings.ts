import { CssPropertyCollection } from "../collections/CssPropertyCollection";
import { CssPseudoKind } from "../enums/CssPseudoKind";
import { decamelize } from "./camelize";
import { CssPropertyDefinition } from "../types";

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

const classStringTemplate = (className: string, properties: string): string => {
    return `.${className}{${properties}}`;
};

export { renderCssClass };
