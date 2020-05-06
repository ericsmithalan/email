import React from "react";
import { css, withCss } from "@email/css";
import { commonFonts } from "./styles";
const styles = css({
    ascA: {
        ...commonFonts,
        fontSize: 13,
    },
});
const AElement = (props) => {
    return React.createElement("a", Object.assign({}, props));
};
AElement.defaultProps = {
    className: styles.classNames.ascA,
};
const A = withCss(styles)(AElement);
export { A };
//# sourceMappingURL=A.js.map