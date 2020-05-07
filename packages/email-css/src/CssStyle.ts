import { CssDirtyStyles, CssClassNames } from "./types";
import { decamelize } from "./utils/camelize";
import _ from "underscore";
import { CssTheme } from "./theme/CssTheme";
import { CssClassCollection } from "./collections/CssClassCollection";
import { CssPropertyCollection } from "./collections/CssPropertyCollection";
import { parseCss } from "./utils/parseCss";

export class CssStyle {
    public readonly classList = new CssClassCollection();
    public readonly propertyList = new CssPropertyCollection();
    public readonly classNames: CssClassNames = {};

    constructor(private readonly _dirtyStyles: CssDirtyStyles, private readonly _theme: CssTheme) {
        for (const key of Object.keys(this._dirtyStyles)) {
            const cssClassName = decamelize(`${key}`);
            this.classNames[key] = cssClassName;
        }
        parseCss(
            {
                value: this._dirtyStyles,
                target: "@global",
                theme: this._theme,
                pseudo: "none",
            },
            this.classList,
        );

        if (this.classList.count() > 0) {
            console.log(this.classList);
        }

        if (this.propertyList.count() > 0) {
            console.log(this.propertyList);
        }
    }
}
