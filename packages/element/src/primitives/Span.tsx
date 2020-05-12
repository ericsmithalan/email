import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";

export interface ISpanElement extends React.HTMLProps<HTMLSpanElement>, CssStyleableComponent {}

const styles = css({
    ascSpan: {
        fontSize: 13,
    },
});

const Span: FC<ISpanElement> = (props: ISpanElement) => {
    const newProps = useCss(styles, Span.defaultProps || {}, props);
    return <span {...(newProps as ISpanElement)} />;
};

Span.defaultProps = {
    className: styles.classNames.ascSpan,
};

export { Span };
