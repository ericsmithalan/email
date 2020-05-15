import React, { FC } from "react";
import { style } from "../css-js";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface LilElement extends React.HTMLProps<HTMLLIElement>, PrimitveElement {}

const styles = style({
    ascLi: {},
});

const Li: FC<LilElement> = (props: LilElement) => {
    const { defaultText } = useCommonCss();

    Li.defaultProps = {
        className: styles.classes.ascLi,
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useStyledProps(styles, props, Li.defaultProps);
    return <li {...(rest as LilElement)} />;
};

export { Li };
