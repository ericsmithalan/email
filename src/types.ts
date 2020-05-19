import { CssTarget } from "./lib/types";

export interface InjectableStyle {
    id: string;
    target: CssTarget;
    css: string;
}

export interface Injectables {
    styles: InjectableStyle[];
}
