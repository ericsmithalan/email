import { CssClassProperty } from "./CssClassProperty";
import { CSSProperties } from "react";
import { CssTarget } from "./types";
export declare type CssClassType = "pseudo" | "target" | undefined;
export declare type CssClassProps = {
    key: string;
    className: string;
    properties: CssClassProperty[];
    target: CssTarget;
    css: string;
    isPseudo: boolean;
};
export declare class CssClass {
    _props: CssClassProps;
    _css: string;
    constructor(props: CssClassProps);
    getCssProperties(): CSSProperties;
    get key(): string;
    get className(): string;
    updateProperties(value: CSSProperties): void;
    get properties(): CssClassProperty[];
    get css(): string;
    get id(): string;
    get isPseudo(): boolean;
    get target(): CssTarget;
}
//# sourceMappingURL=CssClass.d.ts.map