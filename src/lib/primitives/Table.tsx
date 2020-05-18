import React, { FC } from "react";
import { style } from "../css-js/style";
import { DepricatedTableAttributes, PrimitveElement } from "../types";

import { useStyle2 } from "../hooks/useStyle2";
import { generateId } from "../utils/generateId";
import { Prop } from "../css-js/types";

export interface TableElement
    extends React.HTMLProps<HTMLTableElement>,
        DepricatedTableAttributes,
        PrimitveElement {}

const styles = style({
    ascTable: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight,
    },
});

const Table: FC<TableElement> = (props: TableElement) => {
    Table.defaultProps = {
        className: styles.classNames.ascTable,
        cellPadding: 0,
        cellSpacing: 0,
        border: 0,
    };

    const { mergedProps } = useStyle2<TableElement>(styles, props, Table.defaultProps);

    return (
        <table role="presentation" {...(mergedProps as TableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};

export { Table };
