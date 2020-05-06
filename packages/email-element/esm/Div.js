import React from "react";
import { css, withCss } from "@email/css";
import { commonFonts } from "./styles";
const styles = css({
    ascDiv: Object.assign(Object.assign({}, commonFonts), { fontSize: 13 }),
});
const DivElement = (props) => {
    return React.createElement("div", Object.assign({}, props));
};
DivElement.defaultProps = {
    className: styles.classNames.ascDiv,
};
const Div = withCss(styles)(DivElement);
export { Div };
//# sourceMappingURL=Div.js.map