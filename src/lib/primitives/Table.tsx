import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { DepricatedTableAttributes, PrimitveElement } from "./types";

export interface TableElement
    extends React.HTMLProps<HTMLTableElement>,
        DepricatedTableAttributes,
        PrimitveElement {}

const styles = Style({
    ascTable: {
        fontSize: 13,
    },
});

const Table: FC<TableElement> = (props: TableElement) => {
    const { css, ...rest } = useMergeStyles(styles, props, Table.defaultProps);
    return (
        <table {...(rest as TableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};

Table.defaultProps = {
    className: styles.classes.ascTable,
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%",
    border: 0,
};

export { Table };
