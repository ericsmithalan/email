import React, { FC } from "react";

import { style } from "../css-js/style";
import { Prop } from "../css-js/types";
import { useStyle2 } from "../hooks/useStyle2";
import { PrimitveElement } from "../types";

export interface PElement extends React.HTMLProps<HTMLParagraphElement>, PrimitveElement {}

const styles = style({
    ascP: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight,
    },
});

const P: FC<PElement> = (props: PElement) => {
    P.defaultProps = {
        className: styles.classNames.ascP,
    };

    const { mergedProps } = useStyle2<PElement>(styles, props, P.defaultProps);

    return <p {...(mergedProps as PElement)} />;
};

export { P };
