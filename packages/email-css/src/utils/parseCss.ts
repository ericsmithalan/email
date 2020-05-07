import {
    CssParseArgs,
    PropertyCollection,
    CssPropertyDefinition,
    CssPseudo,
    CssTarget,
} from "../types";
import { CssClassCollection } from "../collections/CssClassCollection";
import { CssGenericCollection } from "../collections/CssGenericCollection";
import { guardHasKey } from "../utils/guards";
import { calculateValue } from "./calculateValue";
import { buildCssClass } from "./buildCssClass";
import { buildCssProperty } from "./buildCssProperty";
import { CssTargetKind } from "../enums/CssTargetKind";
import { CssPseudoKind } from "../enums/CssPseudoKind";
import { CssValidValueKind } from "../enums/CssValidValueKind";
import _ from "underscore";
import { updateArgs } from "./updateArgs";

export const parseCss = (
    args: Partial<CssParseArgs>,
    classList: CssClassCollection,
): PropertyCollection => {
    const properties = new CssGenericCollection<string, CssPropertyDefinition>();

    for (const key in args.value) {
        guardHasKey(args.value, key);

        let value = args.value[key];
        let calculated = calculateValue(value, args.theme);

        if (typeof calculated in CssValidValueKind) {
            buildCssProperty(
                updateArgs(args, {
                    value: calculated,
                    propertyKey: key,
                }),
                properties,
            );

            continue;
        }

        if (key in CssTargetKind) {
            buildCssClass<CssTarget>(
                updateArgs(args, {
                    value: calculated,
                    target: CssTargetKind[key],
                }),
                key as CssTarget,
                classList,
            );

            continue;
        }

        if (key in CssPseudoKind) {
            buildCssClass<CssPseudo>(
                updateArgs(args, {
                    value: calculated,
                    pseudo: CssPseudoKind[key],
                }),
                key as CssPseudo,
                classList,
            );

            continue;
        }

        if (_.isObject(calculated)) {
            buildCssClass<string>(
                updateArgs(args, {
                    value: calculated,
                    classKey: key,
                }),
                key,
                classList,
            );

            continue;
        }
    }

    return properties;
};
