import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";

import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement>, PrimitveElement {}

const styles = style({
    ascSpan: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
});

const Span: FC<SpanElement> = (props: SpanElement) => {
    Span.defaultProps = {
        className: styles.classNames.ascSpan,
    };

    const { mergedProps } = useStyle2<SpanElement>(styles, props, Span.defaultProps);
    return <span {...(mergedProps as SpanElement)} />;
};

export { Span };
