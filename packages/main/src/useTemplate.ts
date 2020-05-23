import React from "react";

import { Template } from "./Template";
import { TemplateContext } from "./TemplateContext";

export const useTemplate = (): Template => {
    const config = React.useContext(TemplateContext);

    return config;
};
