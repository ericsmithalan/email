import React from "react";
import { css, withCss } from "@email/css";
const styles = css({
    ascTr: {},
});
const TrElement = (props) => {
    return React.createElement("tr", Object.assign({}, props));
};
TrElement.defaultProps = {
    className: styles.classNames.ascTr,
};
const Tr = withCss(styles)(TrElement);
export { Tr };
//# sourceMappingURL=Tr.js.map