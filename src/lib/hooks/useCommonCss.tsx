import React, { Props } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { CommonCss, ClassNameSelector, CssTarget } from "../types";

export const useCommonCss = (): ClassNameSelector => {
    const context = React.useContext(EmailCssContext);
    const results = context.stylesheets.classNames("@common");

    return results;
};
