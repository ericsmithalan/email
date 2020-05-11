import React, { FC } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css/src";
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

const TdElement: FC<ITdElement> = (props: ITdElement) => {
    return <td {...(props as ITdElement)} />;
};

TdElement.defaultProps = {
    className: styles.classNames().ascTd,
    align: "left",
};

const Td = withCss(styles)(TdElement);

export { Td };
