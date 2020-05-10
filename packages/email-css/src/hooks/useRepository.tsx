import React from "react";
import { CssStyleContext } from "../context/CssContext";
import { CssRepository } from "../CssRepository";
import { CssRepositoryList } from "../types";

export const useRepository = (records: CssRepositoryList | {} | undefined = undefined): CssRepository => {
    const context = React.useContext(CssStyleContext).repository;

    if (records) {
        context.registerStyles(records);
    }

    return context;
};