import React, { FC } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css/src";
import { DepricatedBodyAttributes } from "../types";

export interface IBodyElement
    extends React.HTMLProps<HTMLBodyElement>,
        DepricatedBodyAttributes,
        CssStyleableComponent {}

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

const Body = withCss(styles)(BodyElement);

export { Body };
