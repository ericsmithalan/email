import { isFunction } from "util";
import {
    CssPseudo,
    CssTarget,
    CssValue,
    Fn,
    ParseResults,
    Styleable,
    StyleRepository,
    Styles,
    ParseArgs,
} from "../types/css.types";
import { Theme } from "../types/theme.types";
import { decamelize, camelize } from "../utils/camelize";
import { isObject, isTarget, isValueValid, isValidClassName, isPseudo } from "../utils/validation";

export function parser(styles: Styles, target?: CssTarget): ParseResults {
    const classNames = {};
    const repository = {
        "@reset": {},
        "@base": {},
        "@common": {},
        "@default": {},
        "@phone": {},
        "@tablet": {},
    };

    if (!styles) {
        throw new Error(`Styles is undefined : ${styles}`);
    }

    const args = {
        value: styles,
        target: target || "@default",
        pseudo: "none",
        classKey: "",
    };

    const recursiveParse = (parseArgs: ParseArgs) => {
        const css: object = {};

        for (const key in parseArgs.value as object) {
            if (parseArgs.value.hasOwnProperty(key)) {
                let value = parseArgs.value[key];

                let calculated = calculateValue(value, {
                    props: parseArgs.props,
                    theme: parseArgs.theme,
                });

                if (isObject(calculated)) {
                    const args = updateArgs(parseArgs, {
                        value: calculated,
                        classKey: formatClassName({ classKey: parseArgs.classKey }, key),
                        target: isTarget(key) ? (key as CssTarget) : parseArgs.target,
                        pseudo: isTarget(key) ? (key as CssPseudo) : parseArgs.pseudo,
                    });

                    const target = repository[args.target];
                    target[args.classKey] = recursiveParse(args);

                    classNames[args.classKey] = decamelize(args.classKey);

                    continue;
                }

                if (isValueValid(calculated)) {
                    css[key] = calculated as CssValue;

                    continue;
                }
            }
        }

        return css;
    };

    return {
        styles: repository,
        classNames: classNames,
        parse: function <T extends Styleable>(theme: Theme, props: T): StyleRepository {
            const newArgs = updateArgs(args, {
                theme: theme,
                props: props,
            });

            recursiveParse(newArgs);

            return repository;
        },
    };
}

const calculateValue = (
    value: object | string | number | Fn,
    args: { props: Styleable; theme: Theme },
): object | string | number => {
    if (!isObject(value)) {
        if (isFunction(value)) {
            const fn = value as Fn;
            return fn({ t: args.theme, p: args.props });
        }
    }

    return value;
};

const formatClassName = (args: { classKey: string }, key: string): string => {
    const className = isValidClassName(key) ? key : args.classKey;
    let pseudo = "";

    if (isPseudo(key)) {
        pseudo = key;
    }

    return camelize(`${className}${pseudo}`).trim();
};

const updateArgs = (oldArgs: object, newArgs: object): ParseArgs => {
    return Object.assign({}, oldArgs, newArgs) as ParseArgs;
};
