import React from "react";
import { CssContext } from "../context/CssContext";
import { CssRepositoryList } from "../types";

export const useCss = (records: CssRepositoryList | {} | undefined = undefined) => {
    const context = React.useContext(CssContext);
    if (records) {
        context.repository.registerStyles(records);
    }

    return context;
};
