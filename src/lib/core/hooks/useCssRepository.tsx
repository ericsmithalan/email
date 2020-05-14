import React, { Props } from "react";
import { StylesContext } from "../StylesProvider";
import { Parser, StyleSheet } from "src/lib/css-js";

export const useCssRepository = (css: Parser, props: object) => {
    const context = React.useContext(StylesContext);

    return context.stylesheets;
};
