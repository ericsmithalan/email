import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";

export interface HrElement extends React.HTMLProps<HTMLHRElement> {}

const styles = Style({
    ascHr: {},
});

const Hr: FC<HrElement> = (props: HrElement) => {
    const newProps = useMergeStyles(styles, props, Hr.defaultProps);
    return <hr {...(newProps as HrElement)} />;
};

Hr.defaultProps = {
    className: styles.classes.ascHr,
};

export { Hr };
