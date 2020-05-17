import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { DepricatedTdAttributes, PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { generateId } from "../utils/generateId";
import { useStyle2 } from "../hooks/useStyle2";

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
        uid: generateId(),
        className: styles.classNames.ascTd,
        align: "left",
        commoncss: [defaultText],
        valign: "top",
    };

    const { mergedProps } = useStyle2<TdElement>(styles, props, Td.defaultProps);

    return <td {...(mergedProps as TdElement)} />;
};

export { Td };
