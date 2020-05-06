import { CssDirtyStyles, CssClassNames, CssDirtyValue, CssValue, CssTarget, CssPseudo } from "./types";
import { decamelize } from "./utils/camelize";
import { CssTargetKind } from "./enums/CssTarget";
import { CssValidValueKind } from "./enums/CssValidValue";
import _ from "underscore";
import { CssTheme } from "./CssTheme";
import { CssClass } from "./CssClass";
import { CssClassProperty } from "./CssClassProperty";
import { CssPseudoKind } from "./enums/CssPseudos";

export interface IStyle {
    value: string;
}

export type ParseArgs = {
    value: CssDirtyStyles;
    target: CssTarget;
    classes: CssClass[];
    theme: CssTheme;
    classKey?: string | undefined;
    propertyKey?: string | undefined;
    pseudo?: CssPseudo | undefined;
};

export class CssFragment {
    constructor(
        private readonly _dirtyStyles: CssDirtyStyles,
        private readonly _theme: CssTheme,
        public readonly classNames: CssClassNames = {},
        public readonly styles: CssClass[] = [],
    ) {
        this._init();
    }

    private _init() {
        const parseArgs: ParseArgs = {
            value: this._dirtyStyles,
            target: "@global",
            theme: this._theme,
            classes: this.styles,
        };

        for (const key of Object.keys(this._dirtyStyles)) {
            // const hash = `${stringHashId(key)}`;
            const cssClassName = decamelize(`${key}`);

            this.classNames[key] = cssClassName;
        }

        parseCss(parseArgs);
    }

    // matches unhashed id with hashed id
    public parseClassName = (unhashedId: string) => {
        return _.invert(this.classNames)[unhashedId];
    };
}

const parseCss = (args: ParseArgs): CssClassProperty[] => {
    const properties: CssClassProperty[] = [];

    for (const key in args.value) {
        if (args.value.hasOwnProperty(key)) {
            let value = args.value[key] as CssDirtyValue;
            let calculated = calculate(value, args.theme);

            if (typeof calculated in CssValidValueKind) {
                const newArgs: ParseArgs = updateArgs(args, {
                    value: calculated as CssValue,
                    propertyKey: key,
                });

                properties.push(createProperty(newArgs));

                continue;
            }

            if (key in CssTargetKind) {
                const newArgs: ParseArgs = updateArgs(args, {
                    value: calculated,
                    target: key as CssTarget,
                });

                args.classes.push(createClass(key, newArgs));

                continue;
            }

            if (key in CssPseudoKind) {
                const newArgs: ParseArgs = updateArgs(args, {
                    value: calculated,
                    pseudo: key as CssPseudo,
                });

                args.classes.push(createClass(key, newArgs));

                continue;
            }

            if (_.isObject(calculated)) {
                const newArgs: ParseArgs = updateArgs(args, {
                    value: calculated,
                    classKey: key,
                });

                args.classes.push(createClass(key, newArgs));

                continue;
            }
        }
    }

    return properties;
};

const createClass = (key: string, args: ParseArgs): CssClass => {
    return new CssClass({
        key: key,
        target: args.target,
        isPseudo: args.pseudo != undefined,
        className: args.classKey || "",
        properties: parseCss(args),
        css: "",
    });
};

export const createProperty = (args: ParseArgs): CssClassProperty => {
    return new CssClassProperty({
        key: args.propertyKey || "",
        className: args.classKey,
        name: args.propertyKey || "",
        value: args.value as CssValue,
        css: "",
    });
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
