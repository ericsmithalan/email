import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";

export interface ILilElement extends React.HTMLProps<HTMLLIElement>, CssStyleableComponent {}

const styles = css({
    ascLi: {},
});

const Li: FC<ILilElement> = (props: ILilElement) => {
    const newProps = useCss(styles, Li.defaultProps || {}, props);
    return <li {...(newProps as ILilElement)} />;
};

Li.defaultProps = {
    className: styles.classNames.ascLi,
};

export { Li };
