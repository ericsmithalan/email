import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";
import { DepricatedTdAttributes } from "../types";

export interface ITdElement
    extends React.HTMLProps<HTMLTableCellElement>,
        DepricatedTdAttributes,
        CssStyleableComponent {}

const styles = css({
    ascTd: {
        fontSize: 13,
    },
});

const Td: FC<ITdElement> = (props: ITdElement) => {
    const newProps = useCss(styles, Td.defaultProps || {}, props);
    return <td {...(newProps as ITdElement)} />;
};

Td.defaultProps = {
    className: styles.classNames.ascTd,
    align: "left",
};

export { Td };
