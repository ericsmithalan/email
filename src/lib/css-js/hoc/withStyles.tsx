import React, { FC } from "react";
import { DirtyStyles } from "../types";
import { Parser } from "../Parser";
import { useMergeStyles } from "../hooks/useMergeStyles";

export const withStyles = (styles: DirtyStyles) => <P extends object>(Comp: FC<P>) => {
    const cssStyles = new Parser(styles);

    const withStyles = (props: P) => {
        const mergedProps = useMergeStyles(cssStyles, props, Comp.defaultProps);

        return <Comp {...mergedProps} />;
    };
    return withStyles;
};
