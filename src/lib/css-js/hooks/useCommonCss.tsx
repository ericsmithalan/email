import React, { Props } from "react";
import { StylesContext } from "../StylesProvider";
import { CssClassNames, CommonCss } from "../types";

export const useCommonCss = (): CommonCss => {
    const context = React.useContext(StylesContext);
    const results: CommonCss = context.stylesheets.getClassNames("@common") as CommonCss;

    return results;
};
