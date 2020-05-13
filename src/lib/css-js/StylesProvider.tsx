import * as React from "react";
import { StyleSheets } from "./StyleSheets";
import { Theme } from "./types";
import { defaultTheme } from "../defaultTheme";

export type StylesContextProps = {
    stylesheets: StyleSheets;
    theme: Theme;
};

export const StylesContext = React.createContext<StylesContextProps>({
    stylesheets: new StyleSheets(),
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
