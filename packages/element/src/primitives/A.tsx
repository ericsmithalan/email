import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";
import { DepricatedLinkAttributes } from "../types";

export interface IAElement
    extends React.HTMLProps<HTMLAnchorElement>,
        DepricatedLinkAttributes,
        CssStyleableComponent {}

const styles = css({
    ascA: {
        fontSize: 13,
    },
});

const A: FC<IAElement> = (props: IAElement) => {
    const newProps = useCss(styles, A.defaultProps || {}, props);
    return <a {...(newProps as IAElement)} />;
};

A.defaultProps = {
    className: styles.classNames.ascA,
    target: "_blank",
};

export { A };
