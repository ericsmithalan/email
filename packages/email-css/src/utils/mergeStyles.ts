import { CSSProperties } from "react";

export const mergeStyles = (
    propStyle: CSSProperties | undefined,
    defaultStyle: CSSProperties | undefined,
    inlineStyle: CSSProperties | undefined,
    styleablePropStyles: CSSProperties | undefined,
): CSSProperties => {
    return Object.assign({}, defaultStyle, propStyle, inlineStyle, styleablePropStyles);
};
