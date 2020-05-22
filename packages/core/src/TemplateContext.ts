import * as React from "react";

import { Config } from "./Config";
import { Configuration, Theme } from "./types";

const theme: Theme = {
    breakpoints: {
        phone: 400,
        tablet: 800
    }
};

const defaultConfig: Configuration = {
    renderFor: "both",
    theme: theme
};

export const TemplateContext = React.createContext<Config>(new Config(defaultConfig));
