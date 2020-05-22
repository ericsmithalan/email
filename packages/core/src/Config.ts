import { Configuration } from "./types";

class Config {
    private readonly _renderFor;
    constructor(options: Configuration) {
        this._renderFor = options.renderFor;
    }
}

export { Config };
