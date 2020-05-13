import React, { Props } from "react";
import { StylesContext } from "../StylesProvider";
import { CssClassNames } from "../types";

export const useCommonCss = (): CssClassNames => {
    const context = React.useContext(StylesContext);
    const results = context.stylesheets.getClassNames("@common");

    return results;
};
