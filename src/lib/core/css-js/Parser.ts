import {
    Styles,
    CssValue,
    CssTarget,
    CssPseudo,
    StyleSheet,
    ClassNameSelector,
} from "../types/css.types";
import _ from "underscore";
import { Theme } from "../types/theme.types";
import { isValidClassName, isTarget, isValueValid, isObject } from "../utils/validation";
import { decamelize, camelize } from "../utils/camelize";
import { calculateValue } from "../utils/calculateValue";
import { updateProps as updateArgs } from "../utils/updateProps";
import { getClassName } from "../utils/getClassName";

export type ParseArgs = {
    value: object | string | number;
    target: CssTarget;
    theme: Theme;
    classKey: string;
    pseudo: CssPseudo;
    props: any | undefined;
};

export class Parser {
    public styles: StyleSheet = {
        "@reset": {},
        "@base": {},
        "@common": {},
        "@default": {},
        "@phone": {},
        "@tablet": {},
    };
    private _classNames: ClassNameSelector = {};

    constructor(private readonly _styles: Styles, private readonly _target: CssTarget = undefined) {
        // render to get classNames
        this._setClasses(_styles);
    }

    public get classes(): ClassNameSelector {
        return this._classNames;
    }

    private _setClasses(props: any) {
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (isValidClassName(key)) {
                    this._classNames[key] = decamelize(key);
                }
            }
        }
    }

    public parse = (theme: Theme, props: object = {}): StyleSheet => {
        if (!this._styles) {
            throw new Error(`Styles is undefined : ${this._styles}`);
        }
        this._parse({
            value: this._styles,
            target: this._target ? this._target : "@default",
            theme: theme,
            pseudo: "none",
            classKey: "",
            props: props,
        });

        return this.styles;
    };

    private _parse = (parseArgs: ParseArgs) => {
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
                        classKey: getClassName({ classKey: parseArgs.classKey }, key),
                        target: isTarget(key) ? (key as CssTarget) : parseArgs.target,
                        pseudo: isTarget(key) ? (key as CssPseudo) : parseArgs.pseudo,
                    }) as ParseArgs;

                    const target = this.styles[args.target];
                    target[args.classKey] = this._parse(args);

                    this._classNames[args.classKey] = decamelize(args.classKey);

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
}
