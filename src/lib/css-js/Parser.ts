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
    Theme,
} from "./types";
import _ from "underscore";
import { CssHelpers } from "./helpers/CssHelpers";

export class Parser {
    public classes: StyleSheet;
    private _classNames: CssClassNames = {};

    constructor(private readonly _dirtyStyles: DirtyStyles) {
        this.classes = {
            "@base": {},
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

    public parseCss = (props: any | undefined = undefined, theme: Theme): void => {
        this._parseCss({
            value: this._dirtyStyles,
            target: "@global",
            theme: theme,
            pseudo: "none",
            classKey: "",
            props: props,
        });
    };

    private _parseCss = (args: ParserProps) => {
        const css: StyleSheetProperty = {};

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

const updateArgs = (oldArgs: Partial<ParserProps>, newArgs: Partial<ParserProps>): ParserProps => {
    return Object.assign({}, oldArgs, newArgs) as ParserProps;
};
