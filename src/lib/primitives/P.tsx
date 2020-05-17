import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";

export interface PElement extends React.HTMLProps<HTMLParagraphElement>, PrimitveElement {}

const styles = style({
    ascP: {},
});

const P: FC<PElement> = (props: PElement) => {
    const { defaultText } = useCommonCss();

    P.defaultProps = {
        className: styles.classNames.ascP,
        commoncss: [defaultText],
    };

    const { mergedProps } = useStyle2<PElement>(styles, props, P.defaultProps);

    return <p {...(mergedProps as PElement)} />;
};

export { P };
