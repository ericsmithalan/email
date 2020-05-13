import React, { FC } from "react";
import { Style, useMergedProps } from "../css-js";

export interface OlElement extends React.HTMLProps<HTMLOListElement> {}

const styles = Style({
    ascOl: {},
});

const Ol: FC<OlElement> = (props: OlElement) => {
    const newProps = useMergedProps(styles, props, Ol.defaultProps);
    // @ts-ignore
    return <ol {...(newProps as OlElement)} />;
};

Ol.defaultProps = {
    className: styles.classes.ascOl,
};

export { Ol };
