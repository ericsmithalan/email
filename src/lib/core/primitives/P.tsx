import React, { FC } from "react";
import { styleable } from "../css-js/style";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface PElement extends React.HTMLProps<HTMLParagraphElement>, PrimitveElement {}

const styles = styleable({
    ascP: {},
});

const P: FC<PElement> = (props: PElement) => {
    const { defaultText } = useCommonCss();

    P.defaultProps = {
        className: styles.classNames.ascP,
        commoncss: [String(defaultText)],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, P.defaultProps);

    return <p {...(rest as PElement)} />;
};

export { P };
