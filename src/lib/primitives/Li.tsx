import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";

export interface LilElement extends React.HTMLProps<HTMLLIElement>, PrimitveElement {}

const styles = styleable({
    ascLi: {},
});

const Li: FC<LilElement> = (props: LilElement) => {
    const { defaultText } = useCommonCss();

    Li.defaultProps = {
        className: styles.classNames.ascLi,
        commoncss: [defaultText],
    };

    const { mergedProps } = useStyle2<LilElement>(styles, props, Li.defaultProps);
    return <li {...(mergedProps as LilElement)} />;
};

export { Li };
