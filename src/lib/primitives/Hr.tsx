import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";
import { useStyle2 } from "../hooks/useStyle2";

export interface HrElement extends React.HTMLProps<HTMLHRElement>, PrimitveElement {}

const styles = style({
    ascHr: {},
});

const Hr: FC<HrElement> = (props: HrElement) => {
    Hr.defaultProps = {
        className: styles.classNames.ascHr,
    };

    const { mergedProps } = useStyle2<HrElement>(styles, props, Hr.defaultProps);

    return <hr {...(mergedProps as HrElement)} />;
};

export { Hr };
