import React, { Props } from "react";
import { StylesContext } from "../context/StylesContext";
import { Parser } from "../Parser";
import { StyleSheets } from "../StyleSheets";

export const useCssRepository = (css: Parser, props: object): StyleSheets => {
    const context = React.useContext(StylesContext);

    return context.repository;
};
