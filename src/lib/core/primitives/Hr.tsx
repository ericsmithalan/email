import React, { FC } from "react";
import { style } from "../css-js";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface HrElement extends React.HTMLProps<HTMLHRElement>, PrimitveElement {}

const styles = style({
    ascHr: {},
});

const Hr: FC<HrElement> = (props: HrElement) => {
    Hr.defaultProps = {
        className: styles.classes.ascHr,
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Hr.defaultProps);

    return <hr {...(rest as HrElement)} />;
};

export { Hr };
