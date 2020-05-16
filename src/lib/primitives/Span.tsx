import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyledProps } from "../hooks/useStyledProps";

export interface SpanElement extends React.HTMLProps<HTMLSpanElement>, PrimitveElement {}

const styles = styleable({
    ascSpan: {},
});

const Span: FC<SpanElement> = (props: SpanElement) => {
    const { defaultText } = useClassNames("@common");

    Span.defaultProps = {
        className: styles.classNames.ascSpan,
        commoncss: [defaultText],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Span.defaultProps);
    return <span {...(rest as SpanElement)} />;
};

export { Span };
