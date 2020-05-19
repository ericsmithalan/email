import { isFunction } from "util";

import {
    ClassType,
    CssPseudo,
    CssTarget,
    Fn,
    KeyValue,
    ParseArgs,
    ParseResults,
    Styleable,
    StyleRepository,
    Styles,
    Theme,
} from "../types";
import { camelize, decamelize } from "../utils/camelize";
import { isObject, isPseudo, isTarget, isValidClassName, isValueValid } from "../utils/validation";

export function parser(styles: Styles): ParseResults {
    const classNames: KeyValue = {};
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
        pseudo: "none",
        classKey: "",
    };

    const recursiveParse = (parseArgs: ParseArgs) => {
        const css: any = {};

        for (const [key, value] of Object.entries(parseArgs.value)) {
            let itemValue: any = parseArgs.value[key];

            let calculated = calculateValue(itemValue, {
                props: parseArgs.props,
                theme: parseArgs.theme,
            });

            if (Object.keys(calculated).length > 0) {
                if (isObject(calculated)) {
                    const args = updateArgs(parseArgs, {
                        value: calculated,
                        classKey: formatClassName({ classKey: parseArgs.classKey }, key),
                        target: isTarget(key) ? (key as CssTarget) : parseArgs.target,
                        pseudo: isTarget(key) ? (key as CssPseudo) : parseArgs.pseudo,
                    });

                    const target: ClassType = repository[args.target];

                    target[args.classKey] = recursiveParse(args) as ClassType;

                    classNames[args.classKey] = decamelize(args.classKey);
                } else {
                    if (isValueValid(calculated)) {
                        css[key] = calculated;
                    }
                }
            }
        }
        return css;
    };

    return {
        styles: repository,
        classNames: classNames,
        parse: <T extends Styleable>(
            theme: Theme,
            props: T,
            target?: CssTarget,
        ): StyleRepository => {
            const newArgs = updateArgs(args, {
                theme: theme,
                props: props as T,
                target: target || "@default",
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
    let calculated;
    if (isFunction(value)) {
        const fn = value as Fn;
        calculated = fn({ t: args.theme, p: args.props });
    } else {
        calculated = value;
    }

    return calculated;
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
