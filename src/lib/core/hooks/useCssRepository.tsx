import React, { Props } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { Parser } from "src/lib/core/css-js";

export const useCssRepository = (css: Parser, props: object) => {
    const context = React.useContext(EmailCssContext);

    return context.stylesheets;
};
