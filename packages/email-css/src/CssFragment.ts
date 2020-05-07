import {
    CssDirtyStyles,
    CssPropertyDefinition,
    CssClassNames,
    CssDirtyValue,
    CssValue,
    CssTarget,
    CssPseudo,
    CssClassDefinition,
} from "./types";
import { decamelize } from "./utils/camelize";
import { CssTargetKind } from "./CssTarget";
import { CssValidValueKind } from "./CssValidValue";
import _ from "underscore";
import { CssTheme } from "./CssTheme";
import { CssPseudoKind } from "./CssPseudos";
import { CssAttributesKind } from "./CssAttributes";
import { CssClassCollection } from "./CssClassCollection";
import { CssPropertyCollection } from "./CssPropertyCollection";

export type ParseArgs = {
    value: CssDirtyStyles;
    target: CssTarget;
    theme: CssTheme;
    classKey?: string | undefined;
    propertyKey?: string | undefined;
    pseudo?: CssPseudo | undefined;
};

export class CssFragment {
    constructor(
        private readonly _dirtyStyles: CssDirtyStyles,
        private readonly _theme: CssTheme,
        public readonly classList = new CssClassCollection(),
        public readonly propertyList = new CssPropertyCollection(),
        public readonly classNames: CssClassNames = {},
    ) {
        for (const key of Object.keys(this._dirtyStyles)) {
            const cssClassName = decamelize(`${key}`);
            this.classNames[key] = cssClassName;
        }

        parseCss(
            {
                value: this._dirtyStyles,
                target: "@global",
                theme: this._theme,
            },
            this.classList,
        );
    }
}

const parseCss = (args: ParseArgs, classList: CssClassCollection): CssPropertyCollection => {
    const properties = new CssPropertyCollection();

    for (const key in args.value) {
        if (args.value.hasOwnProperty(key)) {
            let value = args.value[key] as CssDirtyValue;
            let calculated = calculate(value, args.theme);

            if (typeof calculated in CssValidValueKind) {
                if (key in CssAttributesKind) {
                    const attrKey = key;

                    const newArgs: ParseArgs = updateArgs(args, {
                        value: calculated as CssValue,
                        propertyKey: attrKey,
                    });

                    const property = createProperty(newArgs);

                    properties.add(property.className, property);
                } else {
                    console.error(`${key} is not a CssAttribute`);
                }

                continue;
            }

            if (key in CssTargetKind) {
                const newArgs: ParseArgs = updateArgs(args, {
                    value: calculated,
                    target: key as CssTarget,
                });

                const props: CssPropertyCollection = parseCss(newArgs, classList);

                const cls = createClass(key, newArgs, props);
                classList.add(key as CssTarget, cls);

                continue;
            }

            if (key in CssPseudoKind) {
                const newArgs: ParseArgs = updateArgs(args, {
                    value: calculated,
                    pseudo: key as CssPseudo,
                });

                const props: CssPropertyCollection = parseCss(newArgs, classList);
                const cls = createClass(key, newArgs, props);
                classList.add(cls.target, cls);

                continue;
            }

            if (_.isObject(calculated)) {
                const newArgs: ParseArgs = updateArgs(args, {
                    value: calculated,
                    classKey: key,
                });

                const props: CssPropertyCollection = parseCss(newArgs, classList);
                const cls = createClass(key, newArgs, props);
                classList.add(cls.target, cls);

                continue;
            }
        }
    }

    return properties;
};

const createClass = (key: string, args: ParseArgs, properties: CssPropertyCollection): CssClassDefinition => {
    return {
        key: key,
        target: args.target,
        isPseudo: args.pseudo != undefined,
        className: args.classKey || "",
        properties: properties,
        css: "",
    };
};

export const createProperty = (args: ParseArgs): CssPropertyDefinition => {
    return {
        key: args.propertyKey || "",
        className: args.classKey,
        name: args.propertyKey || "",
        value: args.value as CssValue,
        css: "",
    };
};

const updateArgs = (oldArgs: ParseArgs, newArgs: Partial<ParseArgs>): ParseArgs => {
    return Object.assign({}, oldArgs, newArgs);
};

export const calculate = (value: CssDirtyValue, theme: CssTheme): CssDirtyValue | CssValue => {
    let calculated = value;

    if (_.isArray(calculated)) {
        const arrayValue = calculated as string[];
        if (arrayValue.length <= 2) {
            calculated = arrayValue.join("!") as CssDirtyValue;
        }
        if (arrayValue.length > 2) {
            calculated = arrayValue.join(",") as CssDirtyValue;
        }
    }

    if (_.isFunction(calculated)) {
        const fn = value as Function;
        calculated = fn(theme);
    }

    return calculated;
};
