import { CssDirtyStyles, CssClassNames, CssTarget, CssPseudo, CssParseArgs } from "./types";
import { decamelize } from "./utils/camelize";
import { CssTargetKind } from "./CssTargetKind";
import { CssValidValueKind } from "./CssValidValueKind";
import _ from "underscore";
import { CssTheme } from "./CssTheme";
import { CssPseudoKind } from "./CssPseudoKind";
import { CssClassCollection } from "./CssClassCollection";
import { CssPropertyCollection } from "./CssPropertyCollection";
import { createClass, createProperty } from "./utils/create";
import { calculateValue } from "./utils/calculateValue";
import { guardHasKey } from "./utils/typeGuards";

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
    }
}

const parseCss = (
    args: Partial<CssParseArgs>,
    classList: CssClassCollection,
): CssPropertyCollection => {
    const properties = new CssPropertyCollection();

    for (const key in args.value) {
        guardHasKey(args.value, key);

        let value = args.value[key];
        let calculated = calculateValue(value, args.theme);

        if (typeof calculated in CssValidValueKind) {
            const attrKey = key;

            const newArgs: Partial<CssParseArgs> = updateArgs(args, {
                value: calculated,
                propertyKey: attrKey,
            });

            const property = createProperty(newArgs);

            properties.add(property.className, property);

            // updateArgs(args, {
            //     value: args.value,
            //     target: "@global",
            //     theme: args.theme,
            //     pseudo: "none",
            //     classKey: args.classKey,
            //     propertyKey: args.propertyKey,
            // });

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

const buildCssClass = <T extends CssTarget | CssPseudo | string>(
    args: Partial<CssParseArgs>,
    key: T,
    classList: CssClassCollection,
) => {
    const props: CssPropertyCollection = parseCss(args, classList);

    const cls = createClass(key, args, props);
    classList.add(cls.target, cls);
};

const updateArgs = (
    oldArgs: Partial<CssParseArgs>,
    newArgs: Partial<CssParseArgs>,
): Partial<CssParseArgs> => {
    return Object.assign({}, oldArgs, newArgs);
};
