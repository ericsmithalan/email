import React, { FC } from "react";

import { style } from "../css-js/style";
import { useStyle2 } from "../hooks/useStyle2";
import { PrimitveElement } from "../types";

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
