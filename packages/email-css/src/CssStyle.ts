import {
    CssDirtyStyles,
    CssClassNames,
    CssParseArgs,
    CssValue,
    CssTarget,
    CssPseudo,
    CssRepositoryList,
    CssPropertyListItem,
    CssDirtyValue,
} from "./types";
import _ from "underscore";
import { CssTheme } from "./types";
import { CssHelpers } from "./helpers/CssHelpers";

export class CssStyle {
    public classes: CssRepositoryList | {} = {};
    private _classNames: CssClassNames = {};

    constructor(private readonly _dirtyStyles: CssDirtyStyles, private readonly _theme: CssTheme) {
        this.classes = {
            "@global": {},
            "@phone": {},
            "@tablet": {},
        };

        this.parseCss();
    }

    public classNames(): CssClassNames {
        return this._classNames;
    }

    public parseCss = (): void => {
        this._parseCss({
            value: this._dirtyStyles,
            target: "@global",
            theme: this._theme,
            pseudo: "none",
        });
    };

    private _parseCss = (args: Partial<CssParseArgs>) => {
        const css: CssPropertyListItem = {};

        for (const key in args.value) {
            if (args.value.hasOwnProperty(key)) {
                let value = args.value[key];
                let calculated = calculateValue(value, args.theme);

                if (_.isObject(calculated)) {
                    const newArgs = updateArgs(args, {
                        value: calculated,
                        classKey: getClassName(args, key),
                        target: CssHelpers.isTarget(key) ? (key as CssTarget) : args.target,
                        pseudo: CssHelpers.isTarget(key) ? (key as CssPseudo) : args.pseudo,
                    });

                    const target = this.classes[newArgs.target];

                    target[newArgs.classKey] = this._parseCss(newArgs);

                    this._classNames[newArgs.classKey] = CssHelpers.decamelize(newArgs.classKey);

                    continue;
                }

                if (CssHelpers.isValueValid(calculated)) {
                    css[key] = calculated as CssValue;

                    continue;
                }
            }
        }

        return css;
    };
}

const calculateValue = (
    value: CssDirtyValue & CssValue,
    theme: CssTheme,
): CssDirtyValue | CssValue => {
    let calculated;

    if (_.isFunction(value)) {
        const fn = value as Function;
        calculated = fn(theme);
    } else {
        calculated = value;
    }

    return calculated;
};

const getClassName = (args: Partial<CssParseArgs>, key: string): string => {
    const className = CssHelpers.isValidClassName(key) ? key : args.classKey;
    let pseudo = "";

    if (CssHelpers.isPseudo(key)) {
        pseudo = key;
    }

    return CssHelpers.camelize(`${className}${pseudo}`).trim();
};

const cleanCssStringValue = (value: string): string => {
    if (value) {
        // let str = value;
        // if (value) {
        //     str.replace("px", "");
        // }
        // return str;
    }

    return undefined;
};

const updateArgs = (
    oldArgs: Partial<CssParseArgs>,
    newArgs: Partial<CssParseArgs>,
): Partial<CssParseArgs> => {
    return Object.assign({}, oldArgs, newArgs);
};
