import {
    CssDirtyStyles,
    CssClassNames,
    CssTarget,
    CssPseudo,
    CssParseArgs,
    CssPropertyDefinition,
    PropertyCollection,
} from "./types";
import { decamelize } from "./utils/camelize";
import { CssTargetKind } from "./enums/CssTargetKind";
import { CssValidValueKind } from "./enums/CssValidValueKind";
import _ from "underscore";
import { CssTheme } from "./theme/CssTheme";
import { CssPseudoKind } from "./enums/CssPseudoKind";
import { CssClassCollection } from "./collections/CssClassCollection";
import { CssPropertyCollection } from "./collections/CssPropertyCollection";
import { createClass, createProperty } from "./utils/create";
import { calculateValue } from "./utils/calculateValue";
import { guardHasKey } from "./utils/typeGuards";
import { CssGenericCollection } from "./collections/CssGenericCollection";

export class CssFragment {
    public readonly classList = new CssClassCollection();
    public readonly propertyList = new CssPropertyCollection();
    public readonly classNames: CssClassNames = {};

    constructor(private readonly _dirtyStyles: CssDirtyStyles, private readonly _theme: CssTheme) {
        for (const key of Object.keys(this._dirtyStyles)) {
            const cssClassName = decamelize(`${key}`);
            this.classNames[key] = cssClassName;
        }
        parseCss(
            {
                value: this._dirtyStyles,
                target: "@global",
                theme: this._theme,
                pseudo: "none",
            },
            this.classList,
        );

        if (this.classList.count() > 0) {
            console.log(this.classList);
        }
    }
}

const parseCss = (
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

const buildCssProperty = (args: Partial<CssParseArgs>, properties: PropertyCollection) => {
    const property = createProperty(args);

    properties.add(property.className, property);
};

const buildCssClass = <T extends CssTarget | CssPseudo | string>(
    args: Partial<CssParseArgs>,
    key: T,
    classList: CssClassCollection,
) => {
    const props: PropertyCollection = parseCss(args, classList);

    if (props.count() > 0) {
        const cls = createClass(key, args, props);
        classList.add(cls.target, cls);
    }
};

const updateArgs = (
    oldArgs: Partial<CssParseArgs>,
    newArgs: Partial<CssParseArgs>,
): Partial<CssParseArgs> => {
    return Object.assign({}, oldArgs, newArgs);
};
