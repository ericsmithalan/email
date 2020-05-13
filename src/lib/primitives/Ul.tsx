import React, { FC } from "react";
import { css, useMergedProps } from "../css-js";

export interface UlElement extends React.HTMLProps<HTMLUListElement> {}

const styles = css({
    ascUl: {},
});

const Ul: FC<UlElement> = (props: UlElement) => {
    const newProps = useMergedProps(styles, props, Ul.defaultProps);
    return <ul {...(newProps as UlElement)} />;
};

Ul.defaultProps = {
    className: styles.classes.ascUl,
};

export { Ul };