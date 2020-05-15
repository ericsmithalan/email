import React, { FC } from "react";
import { style } from "../css-js";
import { DepricatedTdAttributes, PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface TdElement
    extends React.HTMLProps<HTMLTableCellElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = style({
    ascTd: {},
});

const Td: FC<TdElement> = (props: TdElement) => {
    const { defaultText } = useCommonCss();

    Td.defaultProps = {
        className: styles.classes.ascTd,
        align: "left",
        commoncss: [String(defaultText)],
        valign: "top",
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Td.defaultProps);

    return <td {...(rest as TdElement)} />;
};

export { Td };
