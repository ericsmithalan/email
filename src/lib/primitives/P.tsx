import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { PrimitveElement } from "./types";

export interface PElement extends React.HTMLProps<HTMLParagraphElement>, PrimitveElement {}

const styles = Style({
    ascP: {},
});

const P: FC<PElement> = (props: PElement) => {
    const { commonCss, ...rest } = useMergeStyles(styles, props, P.defaultProps);

    return <p {...(rest as PElement)} />;
};

P.defaultProps = {
    className: styles.classes.ascP,
};

export { P };
