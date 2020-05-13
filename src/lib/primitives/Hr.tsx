import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { PrimitveElement } from "./types";

export interface HrElement extends React.HTMLProps<HTMLHRElement>, PrimitveElement {}

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
