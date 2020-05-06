import React from "react";
import { css, withCss } from "@email/css";
const styles = css({
    ascSpan: {},
});
const SpanElement = (props) => {
    return React.createElement("span", Object.assign({}, props));
};
SpanElement.defaultProps = {
    className: styles.classNames.ascSpan,
};
const Span = withCss(styles)(SpanElement);
export { Span };
//# sourceMappingURL=Span.js.map