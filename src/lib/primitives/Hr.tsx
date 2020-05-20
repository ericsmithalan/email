import React, { FC } from "react";

import { style } from "../css-js/style";
import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { PrimitveElement } from "../types";

export interface HrElement extends React.HTMLProps<HTMLHRElement>, PrimitveElement {}

const styles = style({
    ascHr: {}
});

const Hr: FC<HrElement> = (props: HrElement) => {
    const { ascHr } = useClassNames(styles);
    Hr.defaultProps = {
        className: ascHr
    };

    const mergedProps = useStyle2<HrElement>(styles, props, Hr.defaultProps);

    return <hr {...(mergedProps as HrElement)} />;
};

export { Hr };
