import React, { FC } from "react";
import { styleable } from "../css-js/style";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement>, PrimitveElement {}

const styles = styleable({
    ascSpan: {},
});

const Span: FC<SpanElement> = (props: SpanElement) => {
    const { defaultText } = useCommonCss();

    Span.defaultProps = {
        className: styles.classNames.ascSpan,
        commoncss: [String(defaultText)],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Span.defaultProps);
    return <span {...(rest as SpanElement)} />;
};

export { Span };
