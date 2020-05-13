import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { DepricatedTdAttributes } from "./types";

export interface TdElement extends React.HTMLProps<HTMLTableCellElement>, DepricatedTdAttributes {}

const styles = Style({
    ascTd: {
        fontSize: 13,
    },
});

const Td: FC<TdElement> = (props: TdElement) => {
    const newProps = useMergeStyles(styles, props, Td.defaultProps);
    return <td {...(newProps as TdElement)} />;
};

Td.defaultProps = {
    className: styles.classes.ascTd,
    align: "left",
};

export { Td };
