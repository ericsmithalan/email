import React from "react";

import { CssContext } from "../CssProvider";
import { KeyValue, ParseResults, Styleable } from "../types";

export const useStyle = (
    parser: ParseResults,
    props: Styleable = {},
    defaultProps: Styleable = {}
): KeyValue => {
    const { styleManager } = React.useContext(CssContext);

    if (props && defaultProps) {
        parser.parse(styleManager.theme, Object.assign({}, defaultProps, props));
    }

    styleManager.addStyle(parser.styles);

    let defaultStyles = {};
    let propStyles = {};

    if (defaultProps) {
        defaultStyles = styleManager.addPropStyles(defaultProps);
    }

    if (props) {
        propStyles = styleManager.addPropStyles(props);
    }

    return parser.classNames;
};
