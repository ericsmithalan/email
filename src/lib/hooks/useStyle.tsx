import React, { Props } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { KeyValue, ParseResults } from "../types";
import { Styleable } from "../css-js/types";

export const useStyle = (
    parser: ParseResults,
    props: Styleable = {},
    defaultProps: Styleable = {},
): KeyValue => {
    const { styleManager } = React.useContext(EmailCssContext);

    if (props && defaultProps) {
        parser.parse(styleManager.theme, Object.assign({}, defaultProps, props));
    }

    styleManager.add(parser.styles, "@default");

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
