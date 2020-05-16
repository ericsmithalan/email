import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyledProps } from "../hooks/useStyledProps";

export interface PElement extends React.HTMLProps<HTMLParagraphElement>, PrimitveElement {}

const styles = styleable({
    ascP: {},
});

const P: FC<PElement> = (props: PElement) => {
    const { defaultText } = useCommonCss();

    P.defaultProps = {
        className: styles.classNames.ascP,
        commoncss: [defaultText],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, P.defaultProps);

    return <p {...(rest as PElement)} />;
};

export { P };
