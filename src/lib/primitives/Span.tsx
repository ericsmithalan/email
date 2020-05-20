import React, { FC } from "react";

import { style } from "../css-js/style";
import { Prop } from "../css-js/types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { PrimitveElement } from "../types";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement>, PrimitveElement {}

const styles = style({
    ascSpan: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight
    }
});

const Span: FC<SpanElement> = (props: SpanElement) => {
    const { ascSpan } = useClassNames(styles);
    Span.defaultProps = {
        className: ascSpan
    };

    const mergedProps = useStyle2<SpanElement>(styles, props, Span.defaultProps);
    return <span {...(mergedProps as SpanElement)} />;
};

export { Span };
