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
import { CssHelpers } from "./helpers/CssHelpers";
import { Theme } from "../theme";

export class Parser {
    public styles: StyleSheet = {
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
                if (CssHelpers.isValidClassName(key)) {
                    this._classes[key] = CssHelpers.decamelize(key);
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
                        target: CssHelpers.isTarget(key) ? (key as CssTarget) : args.target,
                        pseudo: CssHelpers.isTarget(key) ? (key as CssPseudo) : args.pseudo,
                    });

                    const target = this.styles[props.target];

                    target[props.classKey] = this._parse(props);

                    this._classes[props.classKey] = CssHelpers.decamelize(props.classKey);

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
    const className = CssHelpers.isValidClassName(key) ? key : args.classKey;
    let pseudo = "";

    if (CssHelpers.isPseudo(key)) {
        pseudo = key;
    }

    return CssHelpers.camelize(`${className}${pseudo}`).trim();
};

const updateProps = (oldArgs: Partial<ParserProps>, newArgs: Partial<ParserProps>): ParserProps => {
    return Object.assign({}, oldArgs, newArgs) as ParserProps;
};
