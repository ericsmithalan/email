import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement> {}

const styles = Style({
    ascSpan: {
        fontSize: 13,
    },
});

const Span: FC<SpanElement> = (props: SpanElement) => {
    const newProps = useMergeStyles(styles, props, Span.defaultProps);
    return <span {...(newProps as SpanElement)} />;
};

Span.defaultProps = {
    className: styles.classes.ascSpan,
};

export { Span };
