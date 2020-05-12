import React, { FC } from "react";
import { css, useCss } from "@email/css";

export interface IHrElement extends React.HTMLProps<HTMLHRElement> {}

const styles = css({
    ascHr: {},
});

const Hr: FC<IHrElement> = (props: IHrElement) => {
    const newProps = useCss(styles, props, Hr.defaultProps || {});
    return <hr {...(newProps as IHrElement)} />;
};

Hr.defaultProps = {
    className: styles.classNames.ascHr,
};

export { Hr };
