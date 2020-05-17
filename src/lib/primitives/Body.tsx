import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyledProps } from "../hooks/useStyledProps";

export interface BodyElement extends React.HTMLProps<HTMLBodyElement>, PrimitveElement {}

const styles = styleable({
    ascBody: {},
});

const Body: FC<BodyElement> = (props: BodyElement) => {
    const { defaultText } = useCommonCss();
    Body.defaultProps = {
        className: styles.classNames.ascBody,
        commoncss: [defaultText],
        width: "100%",
        style: {
            margin: 0,
            padding: 0,
        },
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Body.defaultProps);

    return <body {...(rest as BodyElement)} />;
};

//<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;”>

export { Body };