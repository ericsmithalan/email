import {
    CssDirtyStyles,
    CssClassNames,
    CssParseArgs,
    CssValue,
    ClassRecord,
    PropertyRecord,
} from "./types";
import _ from "underscore";
import { CssTheme } from "./theme/CssTheme";
import { CssHelpers } from "./helpers/CssHelpers";
import { CssParserHelpers } from "./helpers/CssParserHelpers";
import { CssTargetKind } from "./enums/CssTargetKind";

export class CssStyle {
    public readonly classes: ClassRecord = {};
    public readonly properties: PropertyRecord = {};
    private _classNames: CssClassNames = {};

    constructor(private readonly _dirtyStyles: CssDirtyStyles, private readonly _theme: CssTheme) {
        this.parseCss({
            value: this._dirtyStyles,
            target: "@global",
            theme: this._theme,
            pseudo: "none",
        });

        this.buildClassNames();
    }

    private buildClassNames(): void {
        const collection = this.classes[CssTargetKind["@global"]];

        if (collection) {
            for (const key in collection) {
                if (collection.hasOwnProperty(key)) {
                    const value = collection[key];
                    this._classNames[CssHelpers.camelize(value.className)] = value.className;
                }
            }
        }
    }

    public get classNames(): CssClassNames {
        return this._classNames;
    }

    parseCss = (args: Partial<CssParseArgs>): void => {
        for (const key in args.value) {
            if (args.value.hasOwnProperty(key)) {
                let value = args.value[key];
                let calculated = CssParserHelpers.calculateValue(value, args.theme);

                if (_.isObject(calculated)) {
                    const newArgs = updateArgs(args, {
                        value: calculated,
                        classKey: CssHelpers.isValidClassName(key) ? key : args.classKey,
                    });

                    const id = CssHelpers.stringHashId(
                        newArgs.classKey,
                        newArgs.target,
                        newArgs.pseudo,
                    );

                    this.classes[id] = {
                        id: id,
                        target: newArgs.target,
                        psuedo: newArgs.pseudo,
                        className: newArgs.classKey,
                    };

                    this.parseCss(updateArgs(newArgs, { classId: id }));
                }

                if (CssHelpers.isValueValid(calculated)) {
                    const id = CssHelpers.stringHashId(args.classId, key);

                    this.properties[id] = {
                        id: id,
                        classId: args.classId,
                        name: key,
                        value: calculated as CssValue,
                    };

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
