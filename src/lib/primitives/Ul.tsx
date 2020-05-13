import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";

export interface UlElement extends React.HTMLProps<HTMLUListElement> {}

const styles = Style({
    ascUl: {},
});

const Ul: FC<UlElement> = (props: UlElement) => {
    const newProps = useMergeStyles(styles, props, Ul.defaultProps);
    return <ul {...(newProps as UlElement)} />;
};

Ul.defaultProps = {
    className: styles.classes.ascUl,
};

export { Ul };
