import { Log } from "@templates/debug";

import {
    AnySelector,
    Args,
    ClassNameSelector,
    Css,
    CssTheme,
    CssValue,
    Func2,
    ParseArgs,
    Parser,
    Pseudo,
    Sheets,
    StyleableProps,
    StyleKey,
} from "./types";
import { hasValue } from "./utils/hasValue";
import { isFunction } from "./utils/isFunction";
import { isObject } from "./utils/isObject";
import { isPseudo } from "./utils/isPseudo";
import { isStyleSheetKey } from "./utils/isStyleSheetKey";
import { maybeClassName } from "./utils/maybeClassName";
import { toClassName } from "./utils/toClassName";

export class CssParser implements Parser {
    constructor(private readonly _css: Css) {}
    _parsedCss: Sheets = {
        "@default": {},
        "@phone": {},
        "@tablet": {}
    };

    parse = <T extends StyleableProps>(
        props: T,
        theme: CssTheme,
        sheetKey: StyleKey = "@default"
    ) => {
        const args: ParseArgs = {
            theme: theme,
            props: props as T,
            styleKey: sheetKey,
            css: this._css,
            classKey: "",
            pseudo: undefined
        };

        this._parse(args);

        return this._parsedCss;
    };

    parseClasses = (): ClassNameSelector => {
        const classes: ClassNameSelector = {};

        for (const key in this._css) {
            if (this._css.hasOwnProperty(key)) {
                classes[key] = toClassName(key);
            }
        }

        return classes;
    };

    _parse = (parseArgs: ParseArgs) => {
        const css: AnySelector = {};

        for (const [key, value] of Object.entries(parseArgs.css)) {
            let calculated = calculateValue(value, {
                props: parseArgs.props,
                theme: parseArgs.theme
            });

            if (isObject(calculated)) {
                const args = updateArgs(parseArgs, {
                    css: calculated,
                    classKey: formatClassName({ classKey: parseArgs.classKey }, key),
                    styleKey: isStyleSheetKey(key) ? (key as StyleKey) : parseArgs.styleKey,
                    pseudo: isPseudo(key) ? (key as Pseudo) : parseArgs.pseudo
                });

                const sheet = this._parsedCss[args.styleKey];
                sheet[args.classKey] = this._parse(args) as Css;
            } else {
                css[key] = calculated;
            }
        }
        return css;
    };
}

const calculateValue = <T extends StyleableProps>(
    value: Css | CssValue | Func2,
    args: { props: T; theme: CssTheme }
): Css => {
    let calculated = value;

    if (isFunction(value)) {
        const fn = value as Func2;
        calculated = fn({ t: args.theme, p: args.props as T } as Args);
    }

    if (!hasValue(calculated)) {
        Log.throwError(`calculateValue invalid ${value}`);
    }

    return calculated as Css;
};

const formatClassName = (args: { classKey: string }, key: string): string => {
    const className = maybeClassName(key) ? key : args.classKey;
    let pseudo = "";

    if (isPseudo(key)) {
        pseudo = key;
    }

    const name = `${className}${pseudo}`.trim();

    if (hasValue(name)) {
        return name;
    } else {
        Log.throwError(`invalid className ${name}`);
    }

    return name;
};

const updateArgs = (oldArgs: Partial<ParseArgs>, newArgs: Partial<ParseArgs>): ParseArgs => {
    if (hasValue(newArgs.pseudo) && !isPseudo(newArgs.pseudo)) {
        Log.warn(`parse > updateArgs invalid pseudo args:`, { ...newArgs });
    }
    if (!isStyleSheetKey(newArgs.styleKey)) {
        Log.warn(`parse > updateArgs invalid pseudo target:`, { ...newArgs });
    }

    return Object.assign({}, oldArgs, newArgs) as ParseArgs;
};
