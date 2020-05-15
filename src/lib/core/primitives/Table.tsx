import React, { FC } from "react";
import { style } from "../css-js";
import { DepricatedTableAttributes, PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface TableElement
    extends React.HTMLProps<HTMLTableElement>,
        DepricatedTableAttributes,
        PrimitveElement {}

const styles = style({
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

    const { mergeCss, ...rest } = useStyledProps(styles, props, Table.defaultProps);
    return (
        <table role="presentation" {...(rest as TableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};

export { Table };
