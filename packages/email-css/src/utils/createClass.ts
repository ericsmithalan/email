import {
    CssParseArgs,
    CssClassDefinition,
    PropertyCollection,
} from "../types";
import { stringHashId } from "./stringHashId";
import {
    guardPseudo,
    guardTarget,
    guardPropertyCollection,
    guardClassName,
} from "./guards";
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
