import React, { FC } from "react";
import { Style, useMergeStyles, useCommonCss } from "../css-js";
import { DepricatedTableAttributes, PrimitveElement } from "./types";

export interface TableElement
    extends React.HTMLProps<HTMLTableElement>,
        DepricatedTableAttributes,
        PrimitveElement {}

const styles = Style({
    ascTable: {},
});

const Table: FC<TableElement> = (props: TableElement) => {
    const { defaultText } = useCommonCss();

    Table.defaultProps = {
        className: styles.classes.ascTable,
        cellPadding: 0,
        cellSpacing: 0,
        width: "100%",
        border: 0,
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, Table.defaultProps);
    return (
        <table role="presentation" {...(rest as TableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};

export { Table };
