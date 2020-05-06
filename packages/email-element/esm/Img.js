import React from "react";
import { css, withCss } from "@email/css";
const styles = css({
    ascImg: {},
});
const ImgElement = (props) => {
    // @ts-ignore
    return React.createElement("img", Object.assign({}, props));
};
ImgElement.defaultProps = {
    className: styles.classNames.ascImg,
};
const Img = withCss(styles)(ImgElement);
export { Img };
//# sourceMappingURL=Img.js.map