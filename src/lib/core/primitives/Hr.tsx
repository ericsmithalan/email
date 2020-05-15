import React, { FC } from "react";
import { style } from "../css-js";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useMergeStyles } from "..";

export interface HrElement extends React.HTMLProps<HTMLHRElement>, PrimitveElement {}

const styles = style({
    ascHr: {},
});

const Hr: FC<HrElement> = (props: HrElement) => {
    Hr.defaultProps = {
        className: styles.classes.ascHr,
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, Hr.defaultProps);

    return <hr {...(rest as HrElement)} />;
};

export { Hr };
