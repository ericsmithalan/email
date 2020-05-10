import React, { FC } from "react";
import { css, withCss } from "@email/css";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement> {}

const styles = css({
    ascSpan: {
        fontSize: 13,
    },
});

const SpanElement: FC<SpanElement> = (props: SpanElement) => {
    return <span {...(props as SpanElement)} />;
};

SpanElement.defaultProps = {
    className: styles.classNames().ascSpan,
};

const Span = withCss(styles)(SpanElement);

export { Span };
