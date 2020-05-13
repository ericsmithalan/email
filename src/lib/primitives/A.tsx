import React, { FC } from "react";
import { Style, useMergedProps } from "../css-js";
import { DepricatedLinkAttributes } from "./types";

export interface AElement extends React.HTMLProps<HTMLAnchorElement>, DepricatedLinkAttributes {}

const styles = Style({
    ascA: {
        fontSize: 13,
    },
});

const A: FC<AElement> = (props: AElement) => {
    const newProps = useMergedProps(styles, props, A.defaultProps);
    return <a {...(newProps as AElement)} />;
};

A.defaultProps = {
    className: styles.classes.ascA,
    target: "_blank",
};

export { A };
