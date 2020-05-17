import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";

export interface OlElement extends React.HTMLProps<HTMLOListElement>, PrimitveElement {}

const styles = styleable({
    ascOl: {},
});

const Ol: FC<OlElement> = (props: OlElement) => {
    const { defaultText } = useCommonCss();

    Ol.defaultProps = {
        className: styles.classNames.ascOl,
        commoncss: [defaultText],
    };

    const { mergedProps } = useStyle2<OlElement>(styles, props, Ol.defaultProps);
    // @ts-ignore
    return <ol {...(mergedProps as OlElement)} />;
};

export { Ol };
