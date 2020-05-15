import React, { FC } from "react";
import { style } from "../css-js";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = style({
    ascDiv: {},
});

const Div: FC<DivElement> = (props: DivElement) => {
    const { defaultText } = useCommonCss();

    Div.defaultProps = {
        className: styles.classes.ascDiv,
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useStyledProps(styles, props, Div.defaultProps);

    return <div {...(rest as DivElement)} />;
};

export { Div };
