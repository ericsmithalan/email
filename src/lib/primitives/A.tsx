import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { DepricatedLinkAttributes, PrimitveElement } from "./types";

export interface AElement
    extends React.HTMLProps<HTMLAnchorElement>,
        PrimitveElement,
        DepricatedLinkAttributes {}

const styles = Style({
    ascA: {
        fontSize: 13,
    },
});

const A: FC<AElement> = (props: AElement) => {
    const { mergeCss, ...rest } = useMergeStyles(styles, props, A.defaultProps);
    return <a {...(rest as AElement)} />;
};

A.defaultProps = {
    className: styles.classes.ascA,
    target: "_blank",
};

export { A };
