import React, { FC, useEffect } from "react";

import { StyleManager } from "./lib/css-js/StyleManager";
import { EmailCssProvider } from "./lib/EmailCssProvider";
import Frame from "./lib/frame/Frame";
import { Body, Head } from "./lib/primitives";
import { defaultReset } from "./lib/theme/defaultReset";
import { defaultTheme } from "./lib/theme/defaultTheme";
import { NewsletterTemplate } from "./templates/Newsletter";

export interface AppProps {}
export interface AppState {
    reset: string;
    default: string;
    tablet: string;
    phone: string;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        reset: "",
        default: "",
        tablet: "",
        phone: ""
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
            phone: this.styleManager.getCss("@phone")
        });
    }

    body() {
        return (
            <EmailCssProvider styleManager={this.styleManager}>
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

                    <style dangerouslySetInnerHTML={{ __html: this.state.reset }} />
                    <style dangerouslySetInnerHTML={{ __html: this.state.default }} />
                    <style dangerouslySetInnerHTML={{ __html: this.state.tablet }} />
                    <style dangerouslySetInnerHTML={{ __html: this.state.phone }} />
                </Head>
                <Body>
                    <NewsletterTemplate />
                </Body>
            </EmailCssProvider>
        );
    }
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
