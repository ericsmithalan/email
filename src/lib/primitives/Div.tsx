import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = style({
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
