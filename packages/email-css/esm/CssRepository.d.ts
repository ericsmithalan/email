import { Dictionary } from "typescript-collections";
import { CSSProperties } from "react";
import { CssClass } from "./CssClass";
import { CssTarget } from "./types";
interface CssResource {
    index: number;
    target: CssTarget;
    className: string;
    css: string;
}
interface CssResource2 {
    target: string;
    className: string;
    css: string[];
}
export declare class CssRepository {
    sheets: CssResource2[];
    readonly stylesheets: CssResource[];
    readonly classes: Dictionary<string, CssClass>;
    add: (cssClasses: CssClass[]) => void;
    updateStyle: (className: string, styles: CSSProperties) => void;
    getInlinableStyles: (className: string) => CSSProperties;
    stylesheet: (type: "@global" | "@tablet" | "@phone") => string;
}
export {};
//# sourceMappingURL=CssRepository.d.ts.map