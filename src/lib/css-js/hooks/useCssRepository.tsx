import React, { Props } from "react";
import { CssContext } from "../context/CssContext";
import { Parser } from "../Parser";
import { StyleSheets } from "../StyleSheets";

export const useCssRepository = (css: Parser, props: object): StyleSheets => {
    const context = React.useContext(CssContext);

    return context.repository;
};
