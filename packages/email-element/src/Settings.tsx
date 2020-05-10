export interface ICssElementSettings {
    create: () => void;
}

export class CssElementSettings {
    constructor() {}

    public create() {
        console.log("CssSettings created");
    }
}
