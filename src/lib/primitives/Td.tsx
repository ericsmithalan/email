import React, { FC } from "react";

import { style } from "../css-js/style";
import { Prop } from "../css-js/types";
import { useStyle2 } from "../hooks/useStyle2";
import { DepricatedTdAttributes, PrimitveElement } from "../types";

export interface TdElement
    extends React.HTMLProps<HTMLTableCellElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = style({
    ascTd: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight,
    },
});

const Td: FC<TdElement> = (props: TdElement) => {
    Td.defaultProps = {
        className: styles.classNames.ascTd,
        align: "left",

        valign: "top",
    };

    const { mergedProps } = useStyle2<TdElement>(styles, props, Td.defaultProps);

    return <td {...(mergedProps as TdElement)} />;
};

export { Td };
