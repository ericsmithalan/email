import React, { FC } from "react";
import { css, withCss } from "@email/css";

export interface IUlElement extends React.HTMLProps<HTMLUListElement> {}

const styles = css({
    ascUl: {},
});

const UlElement: FC<IUlElement> = (props: IUlElement) => {
    return <ul {...(props as IUlElement)} />;
};

UlElement.defaultProps = {
    className: styles.classNames().ascUl,
};

const Ul = withCss(styles)(UlElement);

export { Ul };
