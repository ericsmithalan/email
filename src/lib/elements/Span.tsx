import React, { FC } from "react";
import { css, useMergedProps } from "../css";

export interface ISpanElement extends React.HTMLProps<HTMLSpanElement> {}

const styles = css({
    ascSpan: {
        fontSize: 13,
    },
});

const Span: FC<ISpanElement> = (props: ISpanElement) => {
    const newProps = useMergedProps(styles, props, Span.defaultProps);
    return <span {...(newProps as ISpanElement)} />;
};

Span.defaultProps = {
    className: styles.classNames.ascSpan,
};

export { Span };
