import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";

export interface BodyElement extends React.HTMLProps<HTMLBodyElement>, PrimitveElement {}

const styles = style({
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

    const { mergedProps } = useStyle2(styles, props, Body.defaultProps);

    return <body {...(mergedProps as BodyElement)} />;
};

//<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;”>

export { Body };
