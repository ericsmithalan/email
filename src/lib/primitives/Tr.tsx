import React, { FC } from "react";
import { style } from "../css-js/style";
import { DepricatedTdAttributes, PrimitveElement } from "../types";

import { generateId } from "../utils/generateId";
import { useStyle2 } from "../hooks/useStyle2";

export interface TrElement
    extends React.HTMLProps<HTMLTableRowElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = style({
    ascTr: {},
});

const Tr: FC<TrElement> = (props: TrElement) => {
    Tr.defaultProps = {
        uid: generateId(),
        className: styles.classNames.ascTr,
    };

    const { mergedProps } = useStyle2<TrElement>(styles, props, Tr.defaultProps);

    return <tr {...(mergedProps as TrElement)} />;
};

export { Tr };
