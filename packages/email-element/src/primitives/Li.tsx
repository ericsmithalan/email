import React, { FC } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css/src";

export interface ILilElement extends React.HTMLProps<HTMLLIElement>, CssStyleableComponent {}

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
