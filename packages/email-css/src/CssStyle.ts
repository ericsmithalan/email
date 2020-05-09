import {
    CssDirtyStyles,
    CssClassNames,
    CssParseArgs,
    CssValue,
    CssPropertyDefinition,
    CssPropertyRecord,
    CssTarget,
    CssClassRecord,
    CssPseudo,
    CssClassList,
    CssRepositoryList,
} from "./types";
import _ from "underscore";
import { CssTheme } from "./theme/CssTheme";
import { CssHelpers } from "./helpers/CssHelpers";
import { CssParserHelpers } from "./helpers/CssParserHelpers";
import { CssTargetKind } from "./enums/CssTargetKind";

export class CssStyle {
    public classes: CssRepositoryList | {} = {};
    private _classNames: CssClassNames = {};

    constructor(private readonly _dirtyStyles: CssDirtyStyles, private readonly _theme: CssTheme) {
        this.classes = {
            "@global": [],
            "@phone": [],
            "@tablet": [],
        };

        this.parseCss();
    }

    public classNames(): CssClassNames {
        return this._classNames;
    }

    public parseCss = (): void => {
        this._parseCss({
            value: this._dirtyStyles,
            target: "@global",
            theme: this._theme,
            pseudo: "none",
        });
    };

    private _parseCss = (args: Partial<CssParseArgs>) => {
        const css: CssPropertyDefinition[] = [];

        for (const key in args.value) {
            if (args.value.hasOwnProperty(key)) {
                let value = args.value[key];
                let calculated = CssParserHelpers.calculateValue(value, args.theme);

                if (_.isObject(calculated)) {
                    const newArgs = updateArgs(args, {
                        value: calculated,
                        classKey: getClassName(args, key),
                        target: CssHelpers.isTarget(key) ? (key as CssTarget) : args.target,
                        pseudo: CssHelpers.isTarget(key) ? (key as CssPseudo) : args.pseudo,
                    });

                    const target = this.classes[newArgs.target];

                    if (!has(target, newArgs.classKey)) {
                        const newObjet = {};

                        newObjet[newArgs.classKey] = this._parseCss(newArgs);

                        target.push(newObjet);
                    }

                    this._classNames[newArgs.classKey] = CssHelpers.decamelize(newArgs.classKey);

                    continue;
                }

                if (CssHelpers.isValueValid(calculated)) {
                    const newValue = {};
                    newValue[key] = calculated as CssValue;
                    css.push(newValue as CssPropertyDefinition);

                    continue;
                }
            }
        }

        return css;
    };
}

const getClassName = (args: Partial<CssParseArgs>, key: string): string => {
    const className = CssHelpers.isValidClassName(key) ? key : args.classKey;

    if (CssHelpers.isPseudo(className)) {
        return `${className}${args.pseudo}`;
    }

    return className;
};

const has = (
    arr: CssClassRecord<
        string,
        CssPropertyRecord<keyof React.CSSProperties, CssPropertyDefinition[]>
    >[],
    key: string,
): boolean => {
    arr.forEach((item) => {
        const itemKey = Object.keys(item)[0];
        if (itemKey === key) {
            return true;
        }
    });

    return false;
};

const updateArgs = (
    oldArgs: Partial<CssParseArgs>,
    newArgs: Partial<CssParseArgs>,
): Partial<CssParseArgs> => {
    return Object.assign({}, oldArgs, newArgs);
};
