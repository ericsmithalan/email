import React, { FC } from "react";

import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { style } from "../style";
import { PrimitveElement, Prop } from "../types";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = style({
    ascDiv: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight
    }
});

const Div: FC<DivElement> = (props: DivElement) => {
    const { ascDiv } = useClassNames(styles);
    Div.defaultProps = {
        className: ascDiv
    };

    const mergedProps = useStyle2<DivElement>(styles, props, Div.defaultProps);

    return <div {...(mergedProps as DivElement)} />;
};

export { Div };
