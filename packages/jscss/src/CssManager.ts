import { Log } from "@templates/debug";
import deepmerge from "deepmerge";

import { Attribute, AttributeSelector, Css, CssTheme, Sheets, StyleableProps, StyleKey } from "./types";
import { cssToString } from "./utils/cssToString";
import { getCurrentClassName } from "./utils/getCurrentClassName";
import { isStyleableProp } from "./utils/isStyleableProp";
import { mergeProps } from "./utils/mergeProps";
import { cssCloseString, cssOpenString } from "./utils/styleMediaStrings";
import { toCamelCase } from "./utils/toCamelCase";

// export interface CssManager {
//     theme: CssTheme;
//     addParsedCss: (css: Css) => void;
//     registerProps: <T extends StyleableProps>(props: T) => T;
//     getCss: (styleKey: StyleKey) => string;
// }

export class CssManager {
    constructor(private readonly _theme: CssTheme) {}

    _styles: Sheets = {
        "@default": {},
        "@phone": {},
        "@tablet": {}
    };

    get theme(): CssTheme {
        return this._theme;
    }

    addParsedCss = (css: Css) => {
        this._mergeSheets(css);
    };

    registerProps = <T extends StyleableProps>(props: T): T => {
        if (props && props.className) {
            const className = getCurrentClassName(props.className);

            return this._registerProps(props, className) as T;
        }

        return props;
    };

    private _registerProps = (
        props: StyleableProps,
        className: string
    ): StyleableProps | undefined => {
        const results: object = {};
        let initialStyles = undefined;

        // get properties that can be added as styles
        const styleableProps = this._getStyleableProps(props);

        // get inlined styles
        const inlineStyles = this._getInlineStyles(props);

        // merge styles
        const mergedStyles = deepmerge.all([styleableProps, inlineStyles]);

        // update stylesheet to include styles
        this._setRegisteredStyle(mergedStyles, "@default", className);

        // get merged styles
        const newStyles = this._getRegisteredStyle("@default", className);

        return mergeProps(props, { style: newStyles });
    };

    private _mergeInlineStyles = (props: StyleableProps, styles: object): AttributeSelector => {
        if (props["style"]) {
            return deepmerge.all([props, props.style]);
        } else {
            props["style"] = styles;
            return deepmerge.all([props, props.style]);
        }
    };

    private _getInlineStyles = (props: StyleableProps): AttributeSelector | undefined => {
        if (props.style) {
            const style = props.style;
            const results: Attribute = {};
            for (const key in style) {
                if (style.hasOwnProperty(key)) {
                    results[key] = style[key];
                }
            }

            return results;
        }

        //TODO: Map these to get correct CSS Value
        return undefined;
    };

    private _getStyleableProps = (props: object): AttributeSelector | undefined => {
        const results: Attribute = {};
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (isStyleableProp(key)) {
                    results[key] = props[key];
                }
            }
        }

        if (Object.keys(results).length === 0) {
            return undefined;
        }

        //TODO: Map these to get correct CSS Value
        return results;
    };

    private _mergeSheets = (css: Css) => {
        try {
            this._styles = deepmerge.all([this._styles, css]) as Sheets;
        } catch (e) {
            Log.throwError(e);
        }
    };

    private _getRegisteredStyle = (styleKey: StyleKey, className: string = undefined): Css => {
        //@ts-ignore
        if (className) {
            const classKey = toCamelCase(className);

            return this._styles[styleKey][classKey] as Css;
        } else {
            return this._styles[styleKey] as Css;
        }
    };

    private _setRegisteredStyle = (
        styles: object,
        styleKey: StyleKey,
        className: string = undefined
    ): void => {
        if (className) {
            let newStyles = styles;
            const classKey = toCamelCase(className);

            //@ts-ignore
            const current = this._styles[styleKey][classKey];

            // if className exists, merge the styles
            if (current) {
                newStyles = deepmerge.all([current, styles]);
            }

            console.log("newStyles", classKey, current, newStyles);
            //@ts-ignore
            this._styles[styleKey][classKey] = newStyles;
        } else {
            this._styles[styleKey] = styles;
        }
    };

    getCss = (styleKey: StyleKey) => {
        let important = false;

        const css: string[] = [];
        const styles = this._getRegisteredStyle(styleKey);

        if (styleKey !== "@default") {
            important = true;
        }

        css.push(cssOpenString(styleKey));
        css.push(cssToString(styles, important));
        css.push(cssCloseString(styleKey));

        return css.join("");
    };
}
