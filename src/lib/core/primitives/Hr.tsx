import React, { FC } from "react";
import { styleable } from "../css-js/style";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

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
