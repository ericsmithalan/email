import * as React from "react";
import { StyleManager } from "./css-js";
import { Theme } from "./types";
import { defaultTheme } from "./theme/defaultTheme";

export type EmailCssContextProps = {
    stylesheets: StyleManager;
    theme: Theme;
};

export const EmailCssContext = React.createContext<EmailCssContextProps>({
    stylesheets: new StyleManager(defaultTheme),
    theme: defaultTheme,
});

export type EmailCssProviderProps = {
    children: React.ReactNode;
} & EmailCssContextProps;

export class EmailCssProvider extends React.Component<EmailCssProviderProps> {
    render() {
        return (
            <EmailCssContext.Provider
                value={{
                    stylesheets: this.props.stylesheets,
                    theme: this.props.theme,
                }}
            >
                {this.props.children}
            </EmailCssContext.Provider>
        );
    }
}
