import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { PrimitveElement } from "./types";

export interface BodyElement extends React.HTMLProps<HTMLBodyElement>, PrimitveElement {}

const styles = Style({
    ascBody: {
        margin: 0,
        padding: 0,
    },
});

const Body: FC<BodyElement> = (props: BodyElement) => {
    const { mergeCss, ...rest } = useMergeStyles(styles, props, Body.defaultProps);
    return <body {...(rest as BodyElement)} />;
};

//<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;”>

Body.defaultProps = {
    className: styles.classes.ascBody,
};

export { Body };
