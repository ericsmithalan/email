import React, { FC } from "react";
import { styleable } from "../css-js/style";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = styleable({
    ascDiv: {},
});

const Div: FC<DivElement> = (props: DivElement) => {
    const { defaultText } = useCommonCss();

    Div.defaultProps = {
        className: styles.classNames.ascDiv,
        commoncss: [String(defaultText)],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Div.defaultProps);

    return <div {...(rest as DivElement)} />;
};

export { Div };
