import React from "react";
import { css, withCss } from "@email/css";
import { commonFonts } from "./styles";
const styles = css({
    ascTd: {
        ...commonFonts,
    },
});
const TdElement = (props) => {
    return React.createElement("td", Object.assign({}, props));
};
TdElement.defaultProps = {
    className: styles.classNames.ascTd,
    align: "left",
};
const Td = withCss(styles)(TdElement);
export { Td };
//# sourceMappingURL=Td.js.map