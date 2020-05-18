import React, { Props } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { CommonCss, KeyValue, CssTarget } from "../types";

export const useCommonCss = (): KeyValue => {
    const context = React.useContext(EmailCssContext);
    const results = context.styleManager.classNames("@common");

    return results;
};
