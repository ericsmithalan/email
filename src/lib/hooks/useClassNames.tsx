import React, { Props } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { CommonCss, ClassNameSelector, CssTarget } from "../types";

export const useClassNames = (target: CssTarget): ClassNameSelector => {
    const context = React.useContext(EmailCssContext);
    const results = context.stylesheets.classNames(target) as ClassNameSelector;

    return results;
};
