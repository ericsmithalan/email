import React, { FC } from "react";
import { css, useMergedProps } from "../css";
import { DepricatedTdAttributes } from "./types";

export interface ITdElement extends React.HTMLProps<HTMLTableCellElement>, DepricatedTdAttributes {}

const styles = css({
    ascTd: {
        fontSize: 13,
    },
});

const Td: FC<ITdElement> = (props: ITdElement) => {
    const newProps = useMergedProps(styles, props, Td.defaultProps);
    return <td {...(newProps as ITdElement)} />;
};

Td.defaultProps = {
    className: styles.classNames.ascTd,
    align: "left",
};

export { Td };
