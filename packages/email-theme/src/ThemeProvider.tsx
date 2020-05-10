import * as React from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Theme } from "./types";
import { defaultTheme } from "./defaultTheme";

export type ThemeProviderProps = {
    theme?: Theme;
};
export type ThemeProviderState = {
    setTheme: (theme: Theme) => void;
    theme: Theme;
};

export class ThemeProvider extends React.Component<ThemeProviderProps, ThemeProviderState> {
    componentWillMount() {
        this.setState({
            setTheme: this.setTheme.bind(this),
            theme: this.props.theme ? this.props.theme : defaultTheme,
        });
    }

    setTheme(theme: Theme) {
        this.setState({ theme });
    }

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
