import React from "react";
import { CssContext } from "../context/CssContext";

export const useCss = () => {
    return React.useContext(CssContext);
};
