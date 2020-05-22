import * as React from "react";

import { CssManager, Manager } from "./CssManager";
import { defaultTheme } from "./defaultTheme";

export type CssContextProps = {
    manager: CssManager;
};

export const CssContext = React.createContext<CssContextProps>({
    manager: new Manager(defaultTheme)
});
