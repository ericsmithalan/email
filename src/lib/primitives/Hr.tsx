import React, { FC } from "react";
import { Style, useMergedProps } from "../css-js";

export interface HrElement extends React.HTMLProps<HTMLHRElement> {}

const styles = Style({
    ascHr: {},
});

const Hr: FC<HrElement> = (props: HrElement) => {
    const newProps = useMergedProps(styles, props, Hr.defaultProps);
    return <hr {...(newProps as HrElement)} />;
};

Hr.defaultProps = {
    className: styles.classes.ascHr,
};

export { Hr };
