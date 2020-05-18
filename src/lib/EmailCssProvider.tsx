import * as React from "react";
import { StyleManager } from "./css-js";
import { Theme } from "./types";
import { defaultTheme } from "./theme/defaultTheme";

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
