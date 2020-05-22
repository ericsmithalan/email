import React from "react";

import { Config } from "./Config";
import { TemplateContext } from "./TemplateContext";

export const useTemplate = (): Config => {
    const config = React.useContext(TemplateContext);

    return config;
};
