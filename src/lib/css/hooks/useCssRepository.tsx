import React, { Props } from "react";
import { CssContext } from "../context/CssContext";
import { CssStyle } from "../CssStyle";
import { CssRepository } from "../CssRepository";

export const useCssRepository = (css: CssStyle, props: object): CssRepository => {
    const context = React.useContext(CssContext);

    return context.repository;
};
