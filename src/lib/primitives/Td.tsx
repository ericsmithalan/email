import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { DepricatedTdAttributes, PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyledProps } from "../hooks/useStyledProps";

export interface TdElement
    extends React.HTMLProps<HTMLTableCellElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = styleable({
    ascTd: {},
});

const Td: FC<TdElement> = (props: TdElement) => {
    const { defaultText } = useCommonCss();

    Td.defaultProps = {
        className: styles.classNames.ascTd,
        align: "left",
        commoncss: [defaultText],
        valign: "top",
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Td.defaultProps);

    return <td {...(rest as TdElement)} />;
};

export { Td };
