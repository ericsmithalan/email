import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { DepricatedLinkAttributes } from "../types";

export interface IAElement extends React.HTMLProps<HTMLAnchorElement>, DepricatedLinkAttributes {}

const styles = css({
    ascA: {
        fontSize: 13,
    },
});

const AElement: FC<IAElement> = (props: IAElement) => {
    return <a {...(props as IAElement)} />;
};

AElement.defaultProps = {
    className: styles.classNames().ascA,
    target: "_blank",
};

const A = withCss(styles)(AElement);

export { A };
