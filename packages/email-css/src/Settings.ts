import { Theme } from "@email/theme";

export interface ICssSettings {
    create: () => void;
}

export class CssSettings {
    constructor() {}

    public create() {
        console.log("CssSettings created");
    }
}
