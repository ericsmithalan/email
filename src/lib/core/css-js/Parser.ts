import {
    Styles,
    ParserProps,
    CssValue,
    CssTarget,
    CssPseudo,
    StyleSheet,
    ClassNameSelector,
} from "../types/css.types";
import _ from "underscore";
import { Theme } from "../types/theme.types";
import { isValidClassName, isTarget, isValueValid, isPseudo } from "../utils/validation";
import { decamelize, camelize } from "../utils/camelize";
import { calculateValue } from "../utils/calculateValue";
import { updateProps } from "../utils/updateProps";
import { getClassName } from "../utils/getClassName";

export class Parser {
    public styles: StyleSheet = {
        "@reset": {},
        "@base": {},
        "@common": {},
        "@default": {},
        "@phone": {},
        "@tablet": {},
    };
    private _classes: ClassNameSelector = {};

    constructor(private readonly _styles: Styles, private readonly _target: CssTarget = undefined) {
        // render to get classNames
        this.setClasses(_styles);
    }

    public get classes(): ClassNameSelector {
        return this._classes;
    }

    private setClasses(props: any) {
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (isValidClassName(key)) {
                    this._classes[key] = decamelize(key);
                }
            }
        }
    }

    public parse = (theme: Theme, props: object = {}): StyleSheet => {
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

    private _parse = (args: ParserProps) => {
        const css: object = {};

        for (const key in args.value as object) {
            if (args.value.hasOwnProperty(key)) {
                let value = args.value[key];
                let calculated = calculateValue(value, args);

                if (_.isObject(calculated)) {
                    const props = updateProps(args, {
                        value: calculated,
                        classKey: getClassName(args, key),
                        target: isTarget(key) ? (key as CssTarget) : args.target,
                        pseudo: isTarget(key) ? (key as CssPseudo) : args.pseudo,
                    });

                    const target = this.styles[props.target];
                    target[props.classKey] = this._parse(props);

                    this._classes[props.classKey] = decamelize(props.classKey);

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
