import React, { FC } from "react";
import { css, useMergedProps } from "../css-js";

export interface IOlElement extends React.HTMLProps<HTMLOListElement> {}

const styles = css({
    ascOl: {},
});

const Ol: FC<IOlElement> = (props: IOlElement) => {
    const newProps = useMergedProps(styles, props, Ol.defaultProps);
    // @ts-ignore
    return <ol {...(newProps as IOlElement)} />;
};

Ol.defaultProps = {
    className: styles.classes.ascOl,
};

export { Ol };
