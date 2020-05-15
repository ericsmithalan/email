import React, { FC } from "react";
import { styleable } from "../css-js/style";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface OlElement extends React.HTMLProps<HTMLOListElement>, PrimitveElement {}

const styles = styleable({
    ascOl: {},
});

const Ol: FC<OlElement> = (props: OlElement) => {
    const { defaultText } = useCommonCss();

    Ol.defaultProps = {
        className: styles.classNames.ascOl,
        commoncss: [String(defaultText)],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Ol.defaultProps);
    // @ts-ignore
    return <ol {...(rest as OlElement)} />;
};

export { Ol };
