import React, { FC } from "react";
import { Style, useMergedProps } from "../css-js";

export interface DivElement extends React.HTMLProps<HTMLDivElement> {}

const styles = Style({
    ascDiv: {
        fontSize: 13,
    },
});

const Div: FC<DivElement> = (props: DivElement) => {
    const newProps = useMergedProps(styles, props, Div.defaultProps);
    return <div {...(newProps as DivElement)} />;
};

Div.defaultProps = {
    className: styles.classes.ascDiv,
};

export { Div };
