import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = style({
    ascDiv: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
});

const Div: FC<DivElement> = (props: DivElement) => {
    const { defaultText } = useCommonCss();

    Div.defaultProps = {
        className: styles.classNames.ascDiv,
    };

    const { mergedProps } = useStyle2<DivElement>(styles, props, Div.defaultProps);

    return <div {...(mergedProps as DivElement)} />;
};

export { Div };
