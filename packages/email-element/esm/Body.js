import React from "react";
import { css, withCss } from "@email/css";
const styles = css({
    ascBody: {
        fontSize: 13,
    },
});
const BodyElement = (props) => {
    return React.createElement("body", Object.assign({}, props));
};
BodyElement.defaultProps = {
    className: styles.classNames.ascBody,
};
const A = withCss(styles)(BodyElement);
export { A };
//# sourceMappingURL=Body.js.map