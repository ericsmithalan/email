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
import { hasValue, isFunction, isObject, isPseudo, isTarget, isValidClassName, isValueValid } from "../utils/validation";

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
    };

    const recursiveParse = (parseArgs: ParseArgs) => {
        const css: any = {};

        if (!isObject(parseArgs.value)) {
            throw new Error(`invalid parser value ${parseArgs.value}`);
        }

        for (const [key, value] of Object.entries(parseArgs.value)) {
            let calculated = calculateValue(value as any, {
                props: parseArgs.props,
                theme: parseArgs.theme,
            });

            if (Object.keys(calculated).length > 0) {
                if (isObject(calculated)) {
                    const args = updateArgs(parseArgs, {
                        value: calculated,
                        classKey: formatClassName({ classKey: parseArgs.classKey }, key),
                        target: isTarget(key) ? (key as CssTarget) : parseArgs.target,
                        pseudo: isPseudo(key) ? (key as CssPseudo) : parseArgs.pseudo,
                    });

                    try {
                        const target: ClassType = repository[args.target];
                        target[args.classKey] = recursiveParse(args) as ClassType;
                    } catch (e) {
                        throw new Error(`parse error args:${{ ...args }}`);
                    }

                    if (isValidClassName(args.classKey)) {
                        classNames[args.classKey] = decamelize(args.classKey);
                    } else {
                        console.warn(`parser > parse tried to add invalid className args:`, {
                            ...args,
                        });
                    }
                } else {
                    if (isValueValid(calculated)) {
                        try {
                            css[key] = calculated;
                        } catch (e) {
                            console.error(`parser > parse error calculated:${calculated}`, css);
                        }
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
            const newArgs = updateArgs(args as Partial<ParseArgs>, {
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

    if (!hasValue(value)) {
        throw new Error(`invalid value ${value}`);
    }

    if (isFunction(value)) {
        const fn = value as Fn;

        if (hasValue(args) && hasValue(args.props) && hasValue(args.theme)) {
            calculated = fn({ t: args.theme, p: args.props });
        } else {
            throw new Error(
                `args or args.props or args.theme is undefined args:${args} args.props:${args.props} args.theme:${args.theme}`,
            );
        }
    } else {
        calculated = value;
    }

    if (!hasValue(calculated)) {
        throw new Error(`invalid value ${value}`);
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
        throw new Error(`invalid className ${name}`);
    }
};

const updateArgs = (oldArgs: Partial<ParseArgs>, newArgs: Partial<ParseArgs>): ParseArgs => {
    if (hasValue(newArgs.pseudo) && !isPseudo(newArgs.pseudo)) {
        console.warn(`parse > updateArgs invalid pseudo args:`, { ...newArgs });
    }
    if (!isTarget(newArgs.target)) {
        console.warn(`parse > updateArgs invalid pseudo target:`, { ...newArgs });
    }

    return Object.assign({}, oldArgs, newArgs) as ParseArgs;
};
