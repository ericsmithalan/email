import React, { FC } from "react";

import { style } from "../css-js/style";
import { useStyle2 } from "../hooks/useStyle2";
import { PrimitveElement } from "../types";

export interface OlElement extends React.HTMLProps<HTMLOListElement>, PrimitveElement {}

const styles = style({
    ascOl: {},
});

const Ol: FC<OlElement> = (props: OlElement) => {
    Ol.defaultProps = {
        className: styles.classNames.ascOl,
    };

    const { mergedProps } = useStyle2<OlElement>(styles, props, Ol.defaultProps);
    // @ts-ignore
    return <ol {...(mergedProps as OlElement)} />;
};

export { Ol };
