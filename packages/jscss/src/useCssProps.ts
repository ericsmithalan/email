import React from "react";

import { CssContext } from "./CssContext";
import { Parser, StyleableProps } from "./types";
import { mergeProps } from "./utils/mergeProps";

export const useCssProps = <T extends StyleableProps>(
    parser: Parser,
    props: T,
    defaultProps: Partial<T>
): T => {
    const { manager } = React.useContext(CssContext);

    const initialProps = mergeProps(props, defaultProps);

    console.log(initialProps);

    const parsed = parser.parse(initialProps, manager.theme);
    manager.addParsedCss(parsed);

    const newProps: T = manager.registerProps(initialProps) as T;

    console.log("final merge", newProps);

    return newProps as T;
};
