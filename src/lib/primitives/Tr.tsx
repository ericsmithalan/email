import React, { FC } from "react";

import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { style } from "../style";
import { DepricatedTdAttributes, PrimitveElement } from "../types";

export interface TrElement
    extends React.HTMLProps<HTMLTableRowElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = style({
    ascTr: {}
});

const Tr: FC<TrElement> = (props: TrElement) => {
    const { ascTr } = useClassNames(styles);
    Tr.defaultProps = {
        className: ascTr
    };

    const mergedProps = useStyle2<TrElement>(styles, props, Tr.defaultProps);

    return <tr {...(mergedProps as TrElement)} />;
};

export { Tr };
