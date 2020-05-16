import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyledProps } from "../hooks/useStyledProps";

export interface HrElement extends React.HTMLProps<HTMLHRElement>, PrimitveElement {}

const styles = styleable({
    ascHr: {},
});

const Hr: FC<HrElement> = (props: HrElement) => {
    Hr.defaultProps = {
        className: styles.classNames.ascHr,
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Hr.defaultProps);

    return <hr {...(rest as HrElement)} />;
};

export { Hr };
