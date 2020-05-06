import { CssDirtyStyles, CssClassNames, CssDirtyValue, CssTarget, CssPseudo } from "./types";
import { CssTheme } from "./CssTheme";
import { CssClass } from "./CssClass";
import { CssClassProperty } from "./CssClassProperty";
export interface IStyle {
    value: string;
}
export declare type ParseArgs = {
    value: CssDirtyStyles;
    target: CssTarget;
    classes: CssClass[];
    theme: CssTheme;
    classKey?: string | undefined;
    propertyKey?: string | undefined;
    pseudo?: CssPseudo | undefined;
};
export declare class CssFragment {
    private readonly _dirtyStyles;
    private readonly _theme;
    readonly classNames: CssClassNames;
    readonly styles: CssClass[];
    constructor(_dirtyStyles: CssDirtyStyles, _theme: CssTheme, classNames?: CssClassNames, styles?: CssClass[]);
    private _init;
    parseClassName: (unhashedId: string) => any;
}
export declare const createProperty: (args: ParseArgs) => CssClassProperty;
export declare const calculate: (value: CssDirtyValue, theme: CssTheme) => CssDirtyValue;
//# sourceMappingURL=CssFragment.d.ts.map