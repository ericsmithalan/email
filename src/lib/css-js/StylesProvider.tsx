import * as React from "react";
import { StylesContext } from "./context/StylesContext";
import { StyleSheets } from "./StyleSheets";
import { Theme } from "./types";
import { defaultTheme } from "../defaultTheme";

export type CssProviderProps = {
    theme?: Theme;
    repository: StyleSheets;
};

export type CssProviderState = {
    setTheme: (theme: Theme) => void;
    theme: Theme;
    repository: StyleSheets;
};

export class StylesProvider extends React.Component<CssProviderProps, CssProviderState> {
    componentWillMount() {
        this.setState({
            setTheme: this.setTheme.bind(this),
            theme: this.props.theme ? this.props.theme : defaultTheme,
            repository: this.props.repository ? this.props.repository : new StyleSheets(),
        });
    }

    setTheme(theme: Theme) {
        this.setState({ theme });
    }

    render() {
        return (
            <StylesContext.Provider
                value={{
                    repository: this.state.repository,
                    theme: this.state.theme,
                }}
            >
                {this.props.children}
            </StylesContext.Provider>
        );
    }
}
