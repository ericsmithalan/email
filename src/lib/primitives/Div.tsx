import React, { FC } from "react";

import { style } from "../css-js/style";
import { Prop } from "../css-js/types";
import { useStyle2 } from "../hooks/useStyle2";
import { PrimitveElement } from "../types";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = style({
    ascDiv: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight,
    },
});

const Div: FC<DivElement> = (props: DivElement) => {
    Div.defaultProps = {
        className: styles.classNames.ascDiv,
    };

    const { mergedProps } = useStyle2<DivElement>(styles, props, Div.defaultProps);

    return <div {...(mergedProps as DivElement)} />;
};

export { Div };
