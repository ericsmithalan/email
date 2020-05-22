import * as React from "react";

import { Config } from "./Config";
import { TemplateContext } from "./TemplateContext";

export type CssProviderProps = {
    children: React.ReactNode;
    config?: Config;
};

export class CssProvider extends React.Component<CssProviderProps> {
    render() {
        return (
            <TemplateContext.Provider value={this.props.config}>
                {this.props.children}
            </TemplateContext.Provider>
        );
    }
}
