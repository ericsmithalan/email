import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement>, PrimitveElement {}

const styles = style({
    ascSpan: {},
});

const Span: FC<SpanElement> = (props: SpanElement) => {
    const { defaultText } = useCommonCss();

    Span.defaultProps = {
        className: styles.classNames.ascSpan,
        commoncss: [defaultText],
    };

    const { mergedProps } = useStyle2<SpanElement>(styles, props, Span.defaultProps);
    return <span {...(mergedProps as SpanElement)} />;
};

export { Span };
