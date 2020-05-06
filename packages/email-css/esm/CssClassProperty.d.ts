import { CssValue } from "./types";
export declare type CssClassPropertyProps = {
    key: string;
    className: string | undefined;
    name: string;
    value: CssValue;
    css: string;
};
export declare class CssClassProperty {
    _props: CssClassPropertyProps;
    _css: string;
    constructor(props: CssClassPropertyProps);
    get key(): string;
    get className(): string | undefined;
    get value(): CssValue;
    get name(): string;
    get css(): string;
}
//# sourceMappingURL=CssClassProperty.d.ts.map