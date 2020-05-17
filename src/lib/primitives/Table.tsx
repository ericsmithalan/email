import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { DepricatedTableAttributes, PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyledProps } from "../hooks/useStyledProps";
import { useStyle2 } from "../hooks/useStyle2";
import { generateId } from "../utils/generateId";

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
        uid: generateId(),
        className: styles.classNames.ascTable,
        cellPadding: 0,
        cellSpacing: 0,
        border: 0,
        commoncss: [defaultText],
    };

    const { mergedProps } = useStyle2<TableElement>(styles, props, Table.defaultProps);

    return (
        <table role="presentation" {...(mergedProps as TableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};

export { Table };
