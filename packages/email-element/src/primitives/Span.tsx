import React, { FC } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css/src";

export interface ISpanElement extends React.HTMLProps<HTMLSpanElement>, CssStyleableComponent {}

const styles = css({
    ascSpan: {
        fontSize: 13,
    },
});

const SpanElement: FC<ISpanElement> = (props: ISpanElement) => {
    return <span {...(props as ISpanElement)} />;
};

SpanElement.defaultProps = {
    className: styles.classNames().ascSpan,
};

const Span = withCss(styles)(SpanElement);

export { Span };
