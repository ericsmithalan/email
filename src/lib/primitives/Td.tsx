import React, { FC } from "react";
import { style } from "../css-js/style";
import { DepricatedTdAttributes, PrimitveElement } from "../types";

import { generateId } from "../utils/generateId";
import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface TdElement
    extends React.HTMLProps<HTMLTableCellElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = style({
    ascTd: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
});

const Td: FC<TdElement> = (props: TdElement) => {
    Td.defaultProps = {
        uid: generateId(),
        className: styles.classNames.ascTd,
        align: "left",

        valign: "top",
    };

    const { mergedProps } = useStyle2<TdElement>(styles, props, Td.defaultProps);

    return <td {...(mergedProps as TdElement)} />;
};

export { Td };
