import React, { FC } from "react";
import { style } from "../css-js";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement>, PrimitveElement {}

const styles = style({
    ascSpan: {},
});

const Span: FC<SpanElement> = (props: SpanElement) => {
    const { defaultText } = useCommonCss();

    Span.defaultProps = {
        className: styles.classes.ascSpan,
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useStyledProps(styles, props, Span.defaultProps);
    return <span {...(rest as SpanElement)} />;
};

export { Span };
