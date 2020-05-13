import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { PrimitveElement } from "./types";

export interface LilElement extends React.HTMLProps<HTMLLIElement>, PrimitveElement {}

const styles = Style({
    ascLi: {},
});

const Li: FC<LilElement> = (props: LilElement) => {
    const newProps = useMergeStyles(styles, props, Li.defaultProps);
    return <li {...(newProps as LilElement)} />;
};

Li.defaultProps = {
    className: styles.classes.ascLi,
};

export { Li };
