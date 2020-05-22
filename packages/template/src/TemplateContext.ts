import * as React from "react";

import { defaultTheme } from "./defaultTheme";
import { Template } from "./Template";
import { Configuration } from "./types";

const defaultConfig: Configuration = {
    renderFor: "both",
    theme: defaultTheme
};

export const TemplateContext = React.createContext<Template>(new Template(defaultConfig));
