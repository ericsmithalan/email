import React, { FC } from "react";
import { css, useMergedProps } from "@email/css";
import { DepricatedBodyAttributes } from "./types";

export interface IBodyElement extends React.HTMLProps<HTMLBodyElement>, DepricatedBodyAttributes {}

const styles = css({
    ascBody: {
        fontSize: 13,
    },
});

const Body: FC<IBodyElement> = (props: IBodyElement) => {
    const newProps = useMergedProps(styles, props, Body.defaultProps);
    return <body {...(newProps as IBodyElement)} />;
};

Body.defaultProps = {
    className: styles.classNames.ascBody,
};

export { Body };
