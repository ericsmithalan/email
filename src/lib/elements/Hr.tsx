import React, { FC } from "react";
import { css, useMergedProps } from "../css";

export interface IHrElement extends React.HTMLProps<HTMLHRElement> {}

const styles = css({
    ascHr: {},
});

const Hr: FC<IHrElement> = (props: IHrElement) => {
    const newProps = useMergedProps(styles, props, Hr.defaultProps);
    return <hr {...(newProps as IHrElement)} />;
};

Hr.defaultProps = {
    className: styles.classNames.ascHr,
};

export { Hr };
