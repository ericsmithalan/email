import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useCommonCss, useStyledProps } from "..";

export interface LilElement extends React.HTMLProps<HTMLLIElement>, PrimitveElement {}

const styles = styleable({
    ascLi: {},
});

const Li: FC<LilElement> = (props: LilElement) => {
    const { defaultText } = useCommonCss();

    Li.defaultProps = {
        className: styles.classNames.ascLi,
        commoncss: [String(defaultText)],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Li.defaultProps);
    return <li {...(rest as LilElement)} />;
};

export { Li };
