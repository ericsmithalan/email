import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { DepricatedTableAttributes, PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface TableElement
    extends React.HTMLProps<HTMLTableElement>,
        DepricatedTableAttributes,
        PrimitveElement {}

const styles = styleable({
    ascTable: {},
});

const Table: FC<TableElement> = (props: TableElement) => {
    const { defaultText } = useCommonCss();

    Table.defaultProps = {
        className: styles.classNames.ascTable,
        cellPadding: 0,
        cellSpacing: 0,
        border: 0,
        commoncss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useStyledProps(styles, props, Table.defaultProps);
    return (
        <table role="presentation" {...(rest as TableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};

export { Table };
