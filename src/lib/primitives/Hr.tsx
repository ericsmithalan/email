import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyledProps } from "../hooks/useStyledProps";
import { useStyle2 } from "../hooks/useStyle2";

export interface HrElement extends React.HTMLProps<HTMLHRElement>, PrimitveElement {}

const styles = styleable({
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
