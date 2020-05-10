import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { CssHelpers } from "@email/css";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement> {}

const styles = css({
    ascSpan: {},
});

const SpanElement: FC<SpanElement> = (props: SpanElement) => {
    return <span {...(props as SpanElement)} />;
};

SpanElement.defaultProps = {
    className: styles.classNames().ascSpan,
};

const Span = withCss(styles)(SpanElement);

export { Span };
