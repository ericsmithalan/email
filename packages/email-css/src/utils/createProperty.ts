import { CssParseArgs, CssPropertyDefinition, CssValue } from "../types";
import { stringHashId } from "./stringHashId";
import { guardAttributeName, guardValue, guardClassName } from "../utils/guards";
import { decamelize } from "./camelize";

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
