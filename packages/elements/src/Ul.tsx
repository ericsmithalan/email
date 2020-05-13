import React, { FC } from "react";
import { css, useMergedProps } from "@email/css";

export interface IUlElement extends React.HTMLProps<HTMLUListElement> {}

const styles = css({
    ascUl: {},
});

const Ul: FC<IUlElement> = (props: IUlElement) => {
    const newProps = useMergedProps(styles, props, Ul.defaultProps);
    return <ul {...(newProps as IUlElement)} />;
};

Ul.defaultProps = {
    className: styles.classNames.ascUl,
};

export { Ul };
