import * as React from "react";
import { StyleManager } from "../css-js";
import { Theme, defaultTheme } from "../theme";

export type StylesContextProps = {
    stylesheets: StyleManager;
    theme: Theme;
};

export const StylesContext = React.createContext<StylesContextProps>({
    stylesheets: new StyleManager(defaultTheme),
    theme: defaultTheme,
});

export type StylesProviderProps = {
    children: React.ReactNode;
} & StylesContextProps;

export class StylesProvider extends React.Component<StylesProviderProps> {
    render() {
        return (
            <StylesContext.Provider
                value={{
                    stylesheets: this.props.stylesheets,
                    theme: this.props.theme,
                }}
            >
                {this.props.children}
            </StylesContext.Provider>
        );
    }
}
