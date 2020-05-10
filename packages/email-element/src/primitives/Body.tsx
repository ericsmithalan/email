import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { DepricatedBodyAttributes } from "../types";
import { CssHelpers } from "@email/css";

export interface IBodyElement extends React.HTMLProps<HTMLBodyElement>, DepricatedBodyAttributes {}

const styles = css({
    ascBody: {
        fontSize: 13,
    },
});

const BodyElement: FC<IBodyElement> = (props: IBodyElement) => {
    return <body {...(props as IBodyElement)} />;
};

BodyElement.defaultProps = {
    className: styles.classNames().ascBody,
};

const A = withCss(styles)(BodyElement);

export { A };
