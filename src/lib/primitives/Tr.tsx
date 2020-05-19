import React, { FC } from "react";

import { style } from "../css-js/style";
import { useStyle2 } from "../hooks/useStyle2";
import { DepricatedTdAttributes, PrimitveElement } from "../types";

export interface TrElement
    extends React.HTMLProps<HTMLTableRowElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = style({
    ascTr: {},
});

const Tr: FC<TrElement> = (props: TrElement) => {
    Tr.defaultProps = {
        className: styles.classNames.ascTr,
    };

    const { mergedProps } = useStyle2<TrElement>(styles, props, Tr.defaultProps);

    return <tr {...(mergedProps as TrElement)} />;
};

export { Tr };
