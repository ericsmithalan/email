import {
    CssParseArgs,
    CssPropertyDefinition,
    CssClassDefinition,
    CssValue,
    PropertyCollection,
} from "../types";
import { stringHashId } from "./stringHashId";
import { CssPropertyCollection } from "../collections/CssPropertyCollection";
import {
    guardAttributeName,
    guardValue,
    guardPseudo,
    guardTarget,
    guardPropertyCollection,
    guardClassName,
} from "./typeGuards";
import { decamelize } from "./camelize";

export const createClass = (
    key: string,
    args: Partial<CssParseArgs>,
    properties: PropertyCollection,
): CssClassDefinition => {
    guardPseudo(args.pseudo, "createClass");
    guardTarget(args.target, "createClass");
    guardPropertyCollection(properties, "createClass");
    guardClassName(args.classKey, "createProperty");

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
    guardAttributeName(args.propertyKey, "createProperty");
    guardValue(args.value, "createProperty");
    guardClassName(args.classKey, "createProperty");

    return {
        id: stringHashId(args.classKey, args.propertyKey, args.value.toString()),
        key: args.propertyKey,
        target: args.target,
        psuedo: args.pseudo,
        className: decamelize(args.classKey),
        name: decamelize(args.propertyKey),
        value: args.value as CssValue,
        css: "",
    };
};
