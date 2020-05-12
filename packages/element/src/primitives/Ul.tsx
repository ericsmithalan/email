import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";

export interface IUlElement extends React.HTMLProps<HTMLUListElement>, CssStyleableComponent {}

const styles = css({
    ascUl: {},
});

const Ul: FC<IUlElement> = (props: IUlElement) => {
    const newProps = useCss(styles, Ul.defaultProps || {}, props);
    return <ul {...(newProps as IUlElement)} />;
};

Ul.defaultProps = {
    className: styles.classNames.ascUl,
};

export { Ul };
