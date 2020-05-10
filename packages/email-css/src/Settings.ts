import { CssTheme } from "./theme/CssTheme";

export interface ICssSettings {
    create: () => void;
}

export class CssSettings {
    private _theme: CssTheme;

    constructor() {}

    public create() {
        console.log("CssSettings created");
    }
}
