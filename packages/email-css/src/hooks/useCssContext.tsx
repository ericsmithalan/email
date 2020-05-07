import React from "react";
import { CssStyleContext } from "../context/CssContext";

export const useCssContext = () => {
    return React.useContext(CssStyleContext);
};
