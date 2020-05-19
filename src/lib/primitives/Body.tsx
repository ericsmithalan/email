import React, { FC } from "react";

import { style } from "../css-js/style";
import { Prop } from "../css-js/types";
import { useStyle2 } from "../hooks/useStyle2";
import { PrimitveElement } from "../types";

export interface BodyElement extends React.HTMLProps<HTMLBodyElement>, PrimitveElement {}

const styles = style({
    ascBody: {
        margin: 0,
        padding: 0,
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight
    }
});

const Body: FC<BodyElement> = (props: BodyElement) => {
    Body.defaultProps = {
        className: styles.classNames.ascBody,

        width: "100%"
    };

    const { mergedProps } = useStyle2(styles, props, Body.defaultProps);

    return <body {...(mergedProps as BodyElement)} />;
};

export { Body };
