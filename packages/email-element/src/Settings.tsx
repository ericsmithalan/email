export interface IElementSettings {
    create: () => void;
}

export class ElementSettings {
    constructor() {}

    public create() {
        console.log("CssSettings created");
    }
}
