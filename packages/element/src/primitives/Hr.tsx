import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";

export interface IHrElement extends React.HTMLProps<HTMLHRElement>, CssStyleableComponent {}

const styles = css({
    ascHr: {},
});

const Hr: FC<IHrElement> = (props: IHrElement) => {
    const newProps = useCss(styles, Hr.defaultProps || {}, props);
    return <hr {...(newProps as IHrElement)} />;
};

Hr.defaultProps = {
    className: styles.classNames.ascHr,
};

export { Hr };
