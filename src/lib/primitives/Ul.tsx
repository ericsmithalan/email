import React, { FC } from "react";

import { style } from "../css-js/style";
import { useStyle2 } from "../hooks/useStyle2";
import { PrimitveElement } from "../types";

export interface UlElement extends React.HTMLProps<HTMLUListElement>, PrimitveElement {}

const styles = style({
    ascUl: {},
});

const Ul: FC<UlElement> = (props: UlElement) => {
    Ul.defaultProps = {
        className: styles.classNames.ascUl,
    };

    const { mergedProps } = useStyle2<UlElement>(styles, props, Ul.defaultProps);
    return <ul {...(mergedProps as UlElement)} />;
};

export { Ul };
