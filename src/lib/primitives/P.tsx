import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface PElement extends React.HTMLProps<HTMLParagraphElement>, PrimitveElement {}

const styles = style({
    ascP: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
});

const P: FC<PElement> = (props: PElement) => {
    const { defaultText } = useCommonCss();

    P.defaultProps = {
        className: styles.classNames.ascP,
    };

    const { mergedProps } = useStyle2<PElement>(styles, props, P.defaultProps);

    return <p {...(mergedProps as PElement)} />;
};

export { P };
