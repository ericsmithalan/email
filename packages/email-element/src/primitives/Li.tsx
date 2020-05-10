import React, { FC } from "react";
import { css, withCss } from "@email/css";

export interface ILilElement extends React.HTMLProps<HTMLLIElement> {}

const styles = css({
    ascLi: {},
});

const LiElement: FC<ILilElement> = (props: ILilElement) => {
    return <li {...(props as ILilElement)} />;
};

LiElement.defaultProps = {
    className: styles.classNames().ascLi,
};

const Li = withCss(styles)(LiElement);

export { Li };
