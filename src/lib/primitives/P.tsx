import React, { FC } from "react";

import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { style } from "../style";
import { PrimitveElement, Prop } from "../types";

export interface PElement extends React.HTMLProps<HTMLParagraphElement>, PrimitveElement {}

const styles = style({
    ascP: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight
    }
});

const P: FC<PElement> = (props: PElement) => {
    const { ascP } = useClassNames(styles);
    P.defaultProps = {
        className: ascP
    };

    const mergedProps = useStyle2<PElement>(styles, props, P.defaultProps);

    return <p {...(mergedProps as PElement)}>{props.children}</p>;
};

export { P };
