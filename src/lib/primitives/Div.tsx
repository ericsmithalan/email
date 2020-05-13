import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { PrimitveElement } from "./types";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = Style({
    ascDiv: {
        fontSize: 13,
    },
});

const Div: FC<DivElement> = (props: DivElement) => {
    const { css, ...rest } = useMergeStyles(styles, props, Div.defaultProps);
    return <div {...(rest as DivElement)} />;
};

Div.defaultProps = {
    className: styles.classes.ascDiv,
};

export { Div };
