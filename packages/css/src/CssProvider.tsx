import * as React from "react";
import { CssContext } from "./context/CssContext";
import { CssRepository } from "./CssRepository";
import { CssTheme } from "./types";
import { defaultTheme } from "./defaultTheme";

export type CssProviderProps = {
    theme?: CssTheme;
    repository: CssRepository;
};

export type CssProviderState = {
    setTheme: (theme: CssTheme) => void;
    theme: CssTheme;
    repository: CssRepository;
};

export class CssProvider extends React.Component<CssProviderProps, CssProviderState> {
    componentWillMount() {
        this.setState({
            setTheme: this.setTheme.bind(this),
            theme: this.props.theme ? this.props.theme : defaultTheme,
            repository: this.props.repository ? this.props.repository : new CssRepository(),
        });
    }

    setTheme(theme: CssTheme) {
        this.setState({ theme });
    }

    render() {
        return (
            <CssContext.Provider
                value={{
                    repository: this.state.repository,
                    theme: this.state.theme,
                }}
            >
                {this.props.children}
            </CssContext.Provider>
        );
    }
}