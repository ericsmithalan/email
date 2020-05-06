import React from "react";
import { css, withCss } from "@email/css";
import { commonFonts } from "./styles";
const styles = css({
    ascTable: {
        ...commonFonts,
    },
});
const TableElement = (props) => {
    return (React.createElement("table", Object.assign({}, props),
        React.createElement("tbody", null, props.children)));
};
TableElement.defaultProps = {
    className: styles.classNames.ascTable,
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%",
    border: 0,
};
const Table = withCss(styles)(TableElement);
export { Table };
//# sourceMappingURL=Table.js.map