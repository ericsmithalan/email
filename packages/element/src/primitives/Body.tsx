import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";
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

const Body: FC<IBodyElement> = (props: IBodyElement) => {
    const newProps = useCss(styles, Body.defaultProps || {}, props);
    return <body {...(newProps as IBodyElement)} />;
};

Body.defaultProps = {
    className: styles.classNames.ascBody,
};

export { Body };
