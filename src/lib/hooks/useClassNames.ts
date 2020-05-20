import React, { CSSProperties } from "react";

import { KeyValue, ParseResults } from "../css-js/types";

export const useClassNames = (styles: ParseResults): KeyValue => {
    // const { styleManager } = React.useContext(EmailCssContext);

    return styles.parseClassNames();
};
