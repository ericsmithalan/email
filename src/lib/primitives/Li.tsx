import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";

export interface LilElement extends React.HTMLProps<HTMLLIElement> {}

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
