import React, { Props } from "react";
import { CssContext } from "../context/CssContext";
import { CssStyle } from "../CssStyle";
import { StyleSheets } from "../StyleSheets";

export const useCssRepository = (css: CssStyle, props: object): StyleSheets => {
    const context = React.useContext(CssContext);

    return context.repository;
};
