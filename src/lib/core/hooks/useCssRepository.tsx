import React, { Props } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { Parser, StyleSheet } from "src/lib/core/css-js";

export const useCssRepository = (css: Parser, props: object) => {
    const context = React.useContext(EmailCssContext);

    return context.stylesheets;
};
