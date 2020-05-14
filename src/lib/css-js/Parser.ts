import {
    DirtyStyles,
    CssClassNames,
    ParserProps,
    CssValue,
    CssTarget,
    CssPseudo,
    StyleSheet,
    StyleSheetProperty,
    DirtyValue,
} from "./types";
import _ from "underscore";
import { Theme } from "../theme";
import { isValidClassName, isTarget, isValueValid, isPseudo } from "../core/utils/validation";
import { decamelize, camelize } from "../core/utils/camelize";

export class Parser {
    public styles: StyleSheet = {
        "@reset": {},
        "@base": {},
        "@common": {},
        "@default": {},
        "@phone": {},
        "@tablet": {},
    };
    private _classes: CssClassNames = {};

    constructor(
        private readonly _styles: DirtyStyles,
        private readonly _target: CssTarget = undefined,
    ) {
        // render to get classNames
        this.setClasses(_styles);
    }

    public get classes(): CssClassNames {
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
        const css: StyleSheetProperty = {};

        for (const key in args.value) {
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

const calculateValue = (value: DirtyValue & CssValue, args: ParserProps): DirtyValue | CssValue => {
    let calculated;

    if (_.isFunction(value)) {
        const fn = value as Function;
        calculated = fn({ theme: args.theme, props: args.props });
    } else {
        calculated = value;
    }

    return calculated;
};

const getClassName = (args: Partial<ParserProps>, key: string): string => {
    const className = isValidClassName(key) ? key : args.classKey;
    let pseudo = "";

    if (isPseudo(key)) {
        pseudo = key;
    }

    return camelize(`${className}${pseudo}`).trim();
};

const updateProps = (oldArgs: Partial<ParserProps>, newArgs: Partial<ParserProps>): ParserProps => {
    return Object.assign({}, oldArgs, newArgs) as ParserProps;
};
