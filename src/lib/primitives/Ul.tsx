import React, { FC } from "react";

import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { style } from "../style";
import { PrimitveElement } from "../types";

export interface UlElement extends React.HTMLProps<HTMLUListElement>, PrimitveElement {}

const styles = style({
    ascUl: {}
});

const Ul: FC<UlElement> = (props: UlElement) => {
    const { ascUl } = useClassNames(styles);
    Ul.defaultProps = {
        className: ascUl
    };

    const mergedProps = useStyle2<UlElement>(styles, props, Ul.defaultProps);
    return <ul {...(mergedProps as UlElement)} />;
};

export { Ul };
