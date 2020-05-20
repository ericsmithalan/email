import { BaseModel } from "../../models/BaseModel";
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
import { Log } from "../utils/Logger";
import { hasValue, isFunction, isObject, isPseudo, isTarget, isValidClassName, isValueValid } from "../utils/validation";
import { CssValue, ParsedValue } from "./types";

export function parser(styles: Styles, classesOnly: boolean = false): ParseResults {
    const classNames: KeyValue = {};
    const repository = {
        "@reset": {},
        "@base": {},
        "@common": {},
        "@default": {},
        "@phone": {},
        "@tablet": {}
    };

    if (!styles) {
        Log.throwError(`Styles is undefined : ${styles}`);
    }

    const args = {
        value: styles
    };

    const recursiveParse = (parseArgs: ParseArgs) => {
        const css: any = {};

        if (!isObject(parseArgs.value)) {
            Log.throwError(`invalid parser value ${parseArgs.value}`);
        }

        for (const [key, value] of Object.entries(parseArgs.value)) {
            let calculated = calculateValue(value as any, {
                props: parseArgs.props,
                theme: parseArgs.theme
            });

            if (isObject(calculated)) {
                const args = updateArgs(parseArgs, {
                    value: calculated,
                    classKey: formatClassName({ classKey: parseArgs.classKey }, key),
                    target: isTarget(key) ? (key as CssTarget) : parseArgs.target,
                    pseudo: isPseudo(key) ? (key as CssPseudo) : parseArgs.pseudo
                });

                try {
                    const target: ClassType = repository[args.target];
                    target[args.classKey] = recursiveParse(args) as ClassType;
                } catch (e) {
                    Log.throwError(`parse error args:${{ ...args }}`);
                }

                if (isValidClassName(args.classKey)) {
                    classNames[args.classKey] = decamelize(args.classKey);
                } else {
                    Log.warn(`parser > parse tried to add invalid className args:`, {
                        ...args
                    });
                }
            } else {
                try {
                    css[key] = calculated as CssValue;
                } catch (e) {
                    Log.throwError(`parser > parse error calculated:${calculated}${css}`);
                }
            }
        }
        return css;
    };

    const getClassNamesOnly = (): KeyValue => {
        const classes: KeyValue = {};

        if (!isObject(styles)) {
            Log.throwError(`invalid styles value ${styles}`);
        }

        for (const key in styles) {
            if (styles.hasOwnProperty(key)) {
                classes[key] = decamelize(key);
            }
        }

        return classes;
    };

    return {
        styles: repository,
        classNames: classNames,
        parse: <T extends Styleable>(
            theme: Theme,
            props: T,
            target?: CssTarget
        ): StyleRepository => {
            const newArgs = updateArgs(args as Partial<ParseArgs>, {
                theme: theme,
                props: props as T,
                target: target || "@default"
            });

            recursiveParse(newArgs);

            return repository;
        },
        parseWithModel: <T extends BaseModel>(theme: Theme, model: T) => {
            const newArgs = updateArgs(args as Partial<ParseArgs>, {
                theme: theme,
                props: model,
                target: "@default"
            });

            recursiveParse(newArgs);

            return repository;
        },
        parseClassNames: () => {
            return getClassNamesOnly();
        }
    };
}

const calculateValue = (
    value: ParsedValue,
    args: { props: Styleable; theme: Theme }
): ParsedValue => {
    let calculated: ParsedValue = value;

    if (!hasValue(value)) {
        Log.throwError(`invalid value ${value}`);
    }

    if (isFunction(value)) {
        const fn = value as Fn;

        if (hasValue(args) && hasValue(args.props) && hasValue(args.theme)) {
            calculated = fn({ t: args.theme, p: args.props });

            console.log(calculated);
            if (!isValueValid(calculated)) {
                Log.error(`parse > calculateValue value is invalid ${calculated}`);
            }
        } else {
            Log.throwError(
                `args or args.props or args.theme is undefined args:${args} args.props:${args.props} args.theme:${args.theme}`
            );
        }
    }

    if (!hasValue(calculated)) {
        Log.throwError(`invalid value ${value}`);
    }

    return calculated;
};

const formatClassName = (args: { classKey: string }, key: string): string => {
    const className = isValidClassName(key) ? key : args.classKey;
    let pseudo = "";

    if (isPseudo(key)) {
        pseudo = key;
    }

    const name = camelize(`${className}${pseudo}`).trim();

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
    if (!isTarget(newArgs.target)) {
        Log.warn(`parse > updateArgs invalid pseudo target:`, { ...newArgs });
    }

    return Object.assign({}, oldArgs, newArgs) as ParseArgs;
};
