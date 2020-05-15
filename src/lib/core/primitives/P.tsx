import React, { FC } from "react";
import { style } from "../css-js";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface PElement extends React.HTMLProps<HTMLParagraphElement>, PrimitveElement {}

const styles = style({
    ascP: {},
});

const P: FC<PElement> = (props: PElement) => {
    const { defaultText } = useCommonCss();

    P.defaultProps = {
        className: styles.classes.ascP,
        commoncss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useStyledProps(styles, props, P.defaultProps);

    return <p {...(rest as PElement)} />;
};

export { P };
