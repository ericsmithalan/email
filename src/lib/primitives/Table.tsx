import React, { FC } from "react";

import { style } from "../css-js/style";
import { Prop } from "../css-js/types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { DepricatedTableAttributes, PrimitveElement } from "../types";

export interface TableElement
    extends React.HTMLProps<HTMLTableElement>,
        DepricatedTableAttributes,
        PrimitveElement {}

const styles = style({
    ascTable: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight
    }
});

const Table: FC<TableElement> = (props: TableElement) => {
    const { ascTable } = useClassNames(styles);
    Table.defaultProps = {
        className: ascTable,
        cellPadding: 0,
        cellSpacing: 0,
        border: 0
    };

    const mergedProps = useStyle2<TableElement>(styles, props, Table.defaultProps);

    return (
        <table role="presentation" {...(mergedProps as TableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};

export { Table };
