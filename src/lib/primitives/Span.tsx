import React, { FC } from "react";
import { Style, useMergeStyles, useCommonCss } from "../css-js";
import { PrimitveElement } from "./types";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement>, PrimitveElement {}

const styles = Style({
    ascSpan: {},
});

const Span: FC<SpanElement> = (props: SpanElement) => {
    const { defaultText } = useCommonCss();

    Span.defaultProps = {
        className: styles.classes.ascSpan,
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, Span.defaultProps);
    return <span {...(rest as SpanElement)} />;
};

export { Span };
