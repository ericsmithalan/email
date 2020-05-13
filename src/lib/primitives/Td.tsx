import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { DepricatedTdAttributes, PrimitveElement } from "./types";

export interface TdElement
    extends React.HTMLProps<HTMLTableCellElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = Style({
    ascTd: {
        fontSize: 13,
    },
});

const Td: FC<TdElement> = (props: TdElement) => {
    const { css, ...rest } = useMergeStyles(styles, props, Td.defaultProps);
    return <td {...(rest as TdElement)} />;
};

Td.defaultProps = {
    className: styles.classes.ascTd,
    align: "left",
};

export { Td };
