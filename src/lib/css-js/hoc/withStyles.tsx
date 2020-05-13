import React, { FC } from "react";
import { DirtyStyles } from "../types";
import { Parser } from "../Parser";
import { useMergedProps } from "../hooks/useMergedProps";

export const withStyles = (styles: DirtyStyles) => <P extends object>(Comp: FC<P>) => {
    const cssStyles = new Parser(styles);

    const withStyles = (props: P) => {
        const mergedProps = useMergedProps(cssStyles, props, Comp.defaultProps);

        return <Comp {...mergedProps} />;
    };
    return withStyles;
};
