import {
    CssDirtyStyles,
    CssClassNames,
    CssParseArgs,
    CssValue,
    CssTarget,
    CssPseudo,
    CssRepositoryList,
    CssPropertyListItem,
    CssDirtyValue,
    CssTheme,
    CssArg,
} from "./types";
import _ from "underscore";
import { CssHelpers } from "./helpers/CssHelpers";

export class CssStyle {
    public classes: CssRepositoryList | {} = {};
    private _classNames: CssClassNames = {};

    constructor(private readonly _dirtyStyles: CssDirtyStyles) {
        this.classes = {
            "@global": {},
            "@phone": {},
            "@tablet": {},
        };

        // render to get classNames
        this.setClassNames(_dirtyStyles);
    }

    public get classNames(): CssClassNames {
        return this._classNames;
    }

    private setClassNames(props: any) {
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (CssHelpers.isValidClassName(key)) {
                    this._classNames[key] = CssHelpers.decamelize(key);
                }
            }
        }
    }

    public parseCss = (props: object | undefined = undefined, theme: CssTheme): void => {
        if (props) {
            this._parseCss({
                value: this._dirtyStyles,
                target: "@global",
                theme: theme,
                pseudo: "none",
                classKey: "",
                props: props,
            });
        }
    };

    private _parseCss = (args: CssParseArgs) => {
        const css: CssPropertyListItem = {};

        for (const key in args.value) {
            if (args.value.hasOwnProperty(key)) {
                let value = args.value[key];
                let calculated = calculateValue(value, args);

                if (_.isObject(calculated)) {
                    const newArgs = updateArgs(args, {
                        value: calculated,
                        classKey: getClassName(args, key),
                        target: CssHelpers.isTarget(key) ? (key as CssTarget) : args.target,
                        pseudo: CssHelpers.isTarget(key) ? (key as CssPseudo) : args.pseudo,
                    });

                    const target = this.classes[newArgs.target];

                    target[newArgs.classKey] = this._parseCss(newArgs);

                    this._classNames[newArgs.classKey] = CssHelpers.decamelize(newArgs.classKey);

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

const calculateValue = (
    value: CssDirtyValue & CssValue,
    args: CssArg,
): CssDirtyValue | CssValue => {
    let calculated;

    if (_.isFunction(value)) {
        const fn = value as Function;
        calculated = fn({ theme: args.theme, props: args.props });
    } else {
        calculated = value;
    }

    return calculated;
};

const getClassName = (args: Partial<CssParseArgs>, key: string): string => {
    const className = CssHelpers.isValidClassName(key) ? key : args.classKey;
    let pseudo = "";

    if (CssHelpers.isPseudo(key)) {
        pseudo = key;
    }

    return CssHelpers.camelize(`${className}${pseudo}`).trim();
};

const updateArgs = (
    oldArgs: Partial<CssParseArgs>,
    newArgs: Partial<CssParseArgs>,
): CssParseArgs => {
    return Object.assign({}, oldArgs, newArgs) as CssParseArgs;
};
