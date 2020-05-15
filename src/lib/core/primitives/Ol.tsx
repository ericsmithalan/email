import React, { FC } from "react";
import { style } from "../css-js";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface OlElement extends React.HTMLProps<HTMLOListElement>, PrimitveElement {}

const styles = style({
    ascOl: {},
});

const Ol: FC<OlElement> = (props: OlElement) => {
    const { defaultText } = useCommonCss();

    Ol.defaultProps = {
        className: styles.classes.ascOl,
        commoncss: [String(defaultText)],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Ol.defaultProps);
    // @ts-ignore
    return <ol {...(rest as OlElement)} />;
};

export { Ol };
