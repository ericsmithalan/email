import React, { Props } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { CommonCss } from "../types";

export const useCommonCss = (): CommonCss => {
    const context = React.useContext(EmailCssContext);
    const results: CommonCss = context.stylesheets.classNames("@common") as CommonCss;

    return results;
};
