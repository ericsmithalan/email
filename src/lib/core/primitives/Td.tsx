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
        mergeCss: [String(defaultText)],
        valign: "top",
    };

    const { mergeCss, ...rest } = useStyledProps(styles, props, Td.defaultProps);

    return <td {...(rest as TdElement)} />;
};

export { Td };
