import { CssManager } from "@templates/jscss";

import { Configuration, RenderFor, Theme } from "./types";

class Template {
    private readonly _cssManager: CssManager;
    private _renderFor: RenderFor;
    private _theme: Theme;

    constructor(options: Configuration) {
        this._renderFor = options.renderFor;
        this._theme = options.theme;
        this._cssManager = new CssManager(this._theme);
    }

    setRenderFor = (value: RenderFor) => {
        this._renderFor = value;
    };

    setTheme = (value: Theme) => {
        this._theme = value;
    };
}

export { Template };
