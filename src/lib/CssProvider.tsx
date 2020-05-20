import * as React from "react";

import { StyleManager } from "./StyleManager";
import { defaultTheme } from "./theme/defaultTheme";

export type CssContextProps = {
    styleManager: StyleManager;
};

export const CssContext = React.createContext<CssContextProps>({
    styleManager: new StyleManager(defaultTheme)
});

export type CssProviderProps = {
    children: React.ReactNode;
} & CssContextProps;

export class CssProvider extends React.Component<CssProviderProps> {
    render() {
        return (
            <CssContext.Provider
                value={{
                    styleManager: this.props.styleManager
                }}
            >
                {this.props.children}
            </CssContext.Provider>
        );
    }
}
