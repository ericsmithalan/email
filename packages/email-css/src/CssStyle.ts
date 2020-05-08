import {
    CssDirtyStyles,
    CssClassNames,
    CssParseArgs,
    PropertyCollectionType,
    CssPropertyDefinition,
    CssTarget,
    CssPseudo,
    CssClassDefinition,
    CssValue,
} from "./types";
import { decamelize, camelize } from "./utils/camelize";
import _ from "underscore";
import { CssTheme } from "./theme/CssTheme";
import { CssCollection } from "./collections/CssCollection";
import { calculateValue } from "./utils/calculateValue";
import { stringHashId } from "./utils/stringHashId";
import { CssHelpers } from "./helpers/CssHelpers";

export class CssStyle {
    public readonly classes = new CssCollection<CssClassDefinition>();
    public readonly properties = new CssCollection<CssPropertyDefinition>();
    private _classNames: CssClassNames;

    constructor(private readonly _dirtyStyles: CssDirtyStyles, private readonly _theme: CssTheme) {
        this.parseCss({
            value: this._dirtyStyles,
            target: "@global",
            theme: this._theme,
            pseudo: "none",
        });
    }

    public get classNames(): CssClassNames {
        if (!this._classNames) {
            this._classNames = {};
            this.classes.get("@global").forEach((value) => {
                this._classNames[camelize(value.className)] = value.className;
            });
        }

        return this._classNames;
    }

    parseCss = (args: Partial<CssParseArgs>): void => {
        for (const key in args.value) {
            if (args.value.hasOwnProperty(key)) {
                let value = args.value[key];
                let calculated = calculateValue(value, args.theme);

                if (_.isObject(calculated)) {
                    const newArgs = updateArgs(args, {
                        value: calculated,
                        classKey: CssHelpers.isValidClassName(key) ? key : args.classKey,
                        target: CssHelpers.isTarget(key) ? (key as CssTarget) : args.target,
                        pseudo: CssHelpers.isPseudo(key) ? (key as CssPseudo) : args.pseudo,
                    });

                    const cls: CssClassDefinition = {
                        id: stringHashId(key, newArgs.target, newArgs.pseudo, newArgs.classKey),
                        key: key,
                        target: newArgs.target,
                        psuedo: newArgs.pseudo,
                        className: decamelize(newArgs.classKey),
                        css: "",
                    };

                    this.parseCss(updateArgs(newArgs, { classId: cls.id }));

                    this.classes.set(cls.target, cls.id, cls);

                    continue;
                }

                if (CssHelpers.isValueValid(calculated)) {
                    const newArgs = updateArgs(args, {
                        value: calculated,
                        propertyKey: key,
                        target: CssHelpers.isTarget(key) ? (key as CssTarget) : args.target,
                        pseudo: CssHelpers.isPseudo(key) ? (key as CssPseudo) : args.pseudo,
                    });

                    const property: CssPropertyDefinition = {
                        id: key,
                        classId: newArgs.classId,
                        key: newArgs.propertyKey,
                        className: decamelize(newArgs.classKey),
                        name: decamelize(newArgs.propertyKey),
                        value: newArgs.value as CssValue,
                        css: "",
                    };

                    this.properties.set(property.classId, property.id, property);
                    continue;
                }
            }
        }
    };
}

const updateArgs = (
    oldArgs: Partial<CssParseArgs>,
    newArgs: Partial<CssParseArgs>,
): Partial<CssParseArgs> => {
    return Object.assign({}, oldArgs, newArgs);
};
