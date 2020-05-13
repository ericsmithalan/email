import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { PrimitveElement } from "./types";

export interface HrElement extends React.HTMLProps<HTMLHRElement>, PrimitveElement {}

const styles = Style({
    ascHr: {},
});

const Hr: FC<HrElement> = (props: HrElement) => {
    const { commonCss, ...rest } = useMergeStyles(styles, props, Hr.defaultProps);
    return <hr {...(rest as HrElement)} />;
};

Hr.defaultProps = {
    className: styles.classes.ascHr,
};

export { Hr };
