import React, { Props } from "react";
import { StylesContext } from "../StylesProvider";
import { CommonCss } from "src/lib/theme";

export const useCommonCss = (): CommonCss => {
    const context = React.useContext(StylesContext);
    const results: CommonCss = context.stylesheets.classNames("@common") as CommonCss;

    return results;
};
