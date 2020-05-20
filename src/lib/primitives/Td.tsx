import React, { FC } from "react";

import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { style } from "../style";
import { DepricatedTdAttributes, PrimitveElement, Prop } from "../types";

export interface TdElement
    extends React.HTMLProps<HTMLTableCellElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = style({
    ascTd: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight
    }
});

const Td: FC<TdElement> = (props: TdElement) => {
    const { ascTd } = useClassNames(styles);
    Td.defaultProps = {
        className: ascTd,
        align: "left",

        valign: "top"
    };

    const mergedProps = useStyle2<TdElement>(styles, props, Td.defaultProps);

    return <td {...(mergedProps as TdElement)} />;
};

export { Td };
