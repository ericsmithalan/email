import React from "react";

import { EmailCssContext } from "../EmailCssProvider";
import { KeyValue } from "../types";

export const useCommonCss = (): KeyValue => {
    const context = React.useContext(EmailCssContext);
    const results = context.styleManager.classNames("@common");

    return results;
};
