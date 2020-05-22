import * as React from "react";

import { CssContext, CssContextProps } from "./CssContext";

export type CssProviderProps = {
    children: React.ReactNode;
} & CssContextProps;

export class CssProvider extends React.Component<CssProviderProps> {
    render() {
        return (
            <CssContext.Provider
                value={{
                    manager: this.props.manager
                }}
            >
                {this.props.children}
            </CssContext.Provider>
        );
    }
}
