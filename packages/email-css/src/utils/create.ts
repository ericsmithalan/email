import { CssParseArgs, CssPropertyDefinition, CssClassDefinition, CssValue } from "../types";
import { stringHashId } from "./stringHashId";
import { CssPropertyCollection } from "../CssPropertyCollection";
import { guardAttributeName, guardValue, guardPseudo, guardTarget } from "./typeGuards";
import { decamelize } from "./camelize";

export const createClass = (
    key: string,
    args: Partial<CssParseArgs>,
    properties: CssPropertyCollection,
): CssClassDefinition => {
    guardPseudo(args.pseudo);
    guardTarget(args.target);

    return {
        id: stringHashId(key, args.target, args.pseudo, args.classKey),
        key: key,
        target: args.target,
        psuedo: args.pseudo,
        className: decamelize(args.classKey),
        properties: properties,
        css: "",
    };
};

export const createProperty = (args: Partial<CssParseArgs>): CssPropertyDefinition => {
    guardAttributeName(args.propertyKey);
    guardValue(args.value);

    return {
        id: stringHashId(args.classKey, args.propertyKey),
        key: args.propertyKey,
        className: decamelize(args.classKey),
        name: decamelize(args.propertyKey),
        value: args.value as CssValue,
        css: "",
    };
};
