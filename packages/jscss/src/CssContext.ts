import * as React from "react";

import { CssManager } from "./CssManager";
import { defaultTheme } from "./defaultTheme";

export type CssContextProps = {
    manager: CssManager;
};

export const CssContext = React.createContext<CssContextProps>({
    manager: new CssManager(defaultTheme)
});
