import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { DepricatedTdAttributes } from "./types";
import { commonFonts } from "./styles";

export interface ITdElement extends React.HTMLProps<HTMLTableCellElement>, DepricatedTdAttributes {}

const styles = css({
    ascTd: {
        ...commonFonts,
    },
});

const TdElement: FC<ITdElement> = (props: ITdElement) => {
    return <td {...(props as ITdElement)} />;
};

TdElement.defaultProps = {
    className: styles.classNames.ascTd,
    align: "left",
};

const Td = withCss(styles)(TdElement);

export { Td };
