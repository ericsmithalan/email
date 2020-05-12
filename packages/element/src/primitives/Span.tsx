import React, { FC } from "react";
import { css, useCss } from "@email/css";

export interface ISpanElement extends React.HTMLProps<HTMLSpanElement> {}

const styles = css({
    ascSpan: {
        fontSize: 13,
    },
});

const Span: FC<ISpanElement> = (props: ISpanElement) => {
    const newProps = useCss(styles, props, Span.defaultProps || {});
    return <span {...(newProps as ISpanElement)} />;
};

Span.defaultProps = {
    className: styles.classNames.ascSpan,
};

export { Span };
