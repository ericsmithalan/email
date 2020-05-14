import React, { FC } from "react";
import { Style, useMergeStyles, useCommonCss } from "../css-js";
import { PrimitveElement } from "./types";

export interface PElement extends React.HTMLProps<HTMLParagraphElement>, PrimitveElement {}

const styles = Style({
    ascP: {},
});

const P: FC<PElement> = (props: PElement) => {
    const { defaultText } = useCommonCss();

    P.defaultProps = {
        className: styles.classes.ascP,
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, P.defaultProps);

    return <p {...(rest as PElement)} />;
};

export { P };
