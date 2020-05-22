import * as React from "react";

import { Template } from "./Template";
import { TemplateContext } from "./TemplateContext";

export type CssProviderProps = {
    children: React.ReactNode;
    template?: Template;
};

export class CssProvider extends React.Component<CssProviderProps> {
    render() {
        return (
            <TemplateContext.Provider value={this.props.template}>
                {this.props.children}
            </TemplateContext.Provider>
        );
    }
}
