import {
    Styles,
    CssValue,
    CssTarget,
    CssPseudo,
    StyleRepository,
    ClassNameSelector,
    ParseResults,
    Styleable,
} from "../types/css.types";
import _ from "underscore";
import { Theme } from "../types/theme.types";
import { isValidClassName, isTarget, isValueValid, isObject } from "../utils/validation";
import { decamelize, camelize } from "../utils/camelize";
import { calculateValue } from "../utils/calculateValue";
import { updateProps as updateArgs } from "../utils/updateProps";
import { formatClassName } from "../utils/formatClassName";
import { defaultTheme } from "../theme";

export type ParseArgs = {
    value: object | string | number;
    target: CssTarget;
    theme: Theme;
    classKey: string;
    pseudo: CssPseudo;
    props: any | undefined;
};

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
                    }) as ParseArgs;

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
