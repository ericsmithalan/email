import React, { FC } from "react";
import { style } from "../css-js";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface BodyElement extends React.HTMLProps<HTMLBodyElement>, PrimitveElement {}

const styles = style({
    ascBody: {},
});

const Body: FC<BodyElement> = (props: BodyElement) => {
    const { defaultText } = useCommonCss();
    Body.defaultProps = {
        className: styles.classes.ascBody,
        mergeCss: [String(defaultText)],
        width: "100%",
        style: {
            margin: 0,
            padding: 0,
        },
    };

    const { mergeCss, ...rest } = useStyledProps(styles, props, Body.defaultProps);

    return <body {...(rest as BodyElement)} />;
};

//<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;”>

export { Body };
