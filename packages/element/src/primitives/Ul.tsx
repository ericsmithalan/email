import React, { FC } from "react";
import { css, useCss } from "@email/css";

export interface IUlElement extends React.HTMLProps<HTMLUListElement> {}

const styles = css({
    ascUl: {},
});

const Ul: FC<IUlElement> = (props: IUlElement) => {
    const newProps = useCss(styles, props, Ul.defaultProps || {});
    return <ul {...(newProps as IUlElement)} />;
};

Ul.defaultProps = {
    className: styles.classNames.ascUl,
};

export { Ul };
