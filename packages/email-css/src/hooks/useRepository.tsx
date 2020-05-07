import React from "react";
import { CssStyleContext } from "../context/CssContext";
import { CssRepository } from "../CssRepository";

export const useRepository = (): CssRepository => {
    return React.useContext(CssStyleContext).repository;
};
