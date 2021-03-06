import React from "react";

import { CssProvider } from "./lib/CssProvider";
import Frame from "./lib/Frame";
import { Body, Head } from "./lib/primitives";
import { StyleManager } from "./lib/StyleManager";
import { defaultReset } from "./lib/theme/defaultReset";
import { defaultTheme } from "./lib/theme/defaultTheme";
import { TestTemplate } from "./templates/Test";

export interface AppProps {}
export interface AppState {
    reset: string;
    default: string;
    tablet: string;
    phone: string;
    font: string;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        reset: "",
        default: "",
        tablet: "",
        phone: "",
        font: ""
    };
    htmldoc = "";
    styleManager = new StyleManager(defaultTheme);

    componentWillMount() {
        this.styleManager.setGlobal(defaultReset, "@reset");
    }

    handleDocumentReady(doc: Document) {
        this.setState({
            reset: this.styleManager.getGlobal("@reset"),
            default: this.styleManager.getCss("@default"),
            tablet: this.styleManager.getCss("@tablet"),
            phone: this.styleManager.getCss("@phone"),
            font: this.styleManager.getFonts()
        });
    }

    body() {
        return (
            <CssProvider styleManager={this.styleManager}>
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="x-apple-disable-message-reformatting" />
                    <meta
                        name="format-detection"
                        content="telephone=no,address=no,email=no,date=no,url=no"
                    />
                    <meta name="color-scheme" content="light" />
                    <meta name="supported-color-schemes" content="light" />

                    <link rel="stylesheet" href={this.state.font} />
                    <style dangerouslySetInnerHTML={{ __html: this.state.reset }} />
                    <style dangerouslySetInnerHTML={{ __html: this.state.default }} />
                    <style dangerouslySetInnerHTML={{ __html: this.state.tablet }} />
                    <style dangerouslySetInnerHTML={{ __html: this.state.phone }} />
                </Head>
                <Body>
                    <TestTemplate />
                </Body>
            </CssProvider>
        );
    }

    // using Iframe to simulate SSR rendering
    render() {
        return (
            <Frame
                onDocumentReady={(doc: Document) => this.handleDocumentReady(doc)}
                body={this.body()}
            ></Frame>
        );
    }
}

export default App;
