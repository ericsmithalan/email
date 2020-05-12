import React, { FC } from "react";
import { css, useCss } from "@email/css";
import { DepricatedTableAttributes } from "../types";

export interface ITableElement
    extends React.HTMLProps<HTMLTableElement>,
        DepricatedTableAttributes {}

const styles = css({
    ascTable: {
        fontSize: 13,
    },
});

const Table: FC<ITableElement> = (props: ITableElement) => {
    const newProps = useCss(styles, props, Table.defaultProps || {});
    return (
        <table {...(newProps as ITableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};

Table.defaultProps = {
    className: styles.classNames.ascTable,
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%",
    border: 0,
};

export { Table };
