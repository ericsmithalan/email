import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { PrimitveElement } from "./types";

export interface PElement extends React.HTMLProps<HTMLOListElement>, PrimitveElement {}

const styles = Style({
    ascP: {},
});

const P: FC<PElement> = (props: PElement) => {
    const { commonCss, ...rest } = useMergeStyles(styles, props, P.defaultProps);
    // @ts-ignore
    return <ol {...(rest as PElement)} />;
};

P.defaultProps = {
    className: styles.classes.ascP,
};

export { P };
