import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyledProps } from "../hooks/useStyledProps";
import { useStyle2 } from "../hooks/useStyle2";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = styleable({
    ascDiv: {},
});

const Div: FC<DivElement> = (props: DivElement) => {
    const { defaultText } = useCommonCss();

    Div.defaultProps = {
        className: styles.classNames.ascDiv,
        commoncss: [defaultText],
    };

    const { mergedProps } = useStyle2<DivElement>(styles, props, Div.defaultProps);

    return <div {...(mergedProps as DivElement)} />;
};

export { Div };
