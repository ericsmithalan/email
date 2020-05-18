import * as React from "react";

import { defaultTheme } from "./theme/defaultTheme";
import { StyleManager } from "./css-js/StyleManager";

export type EmailCssContextProps = {
    styleManager: StyleManager;
};

export const EmailCssContext = React.createContext<EmailCssContextProps>({
    styleManager: new StyleManager(defaultTheme),
});

export type EmailCssProviderProps = {
    children: React.ReactNode;
} & EmailCssContextProps;

export class EmailCssProvider extends React.Component<EmailCssProviderProps> {
    render() {
        return (
            <EmailCssContext.Provider
                value={{
                    styleManager: this.props.styleManager,
                }}
            >
                {this.props.children}
            </EmailCssContext.Provider>
        );
    }
}
