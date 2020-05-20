import React, { FC, useEffect } from "react";

import { StyleManager } from "./lib/css-js/StyleManager";
import Frame from "./lib/frame/Frame";
import { Body, Head } from "./lib/primitives";
import { defaultReset } from "./lib/theme/defaultReset";
import { defaultTheme } from "./lib/theme/defaultTheme";
import { Newsletter } from "./templates/Newsletter";

class App extends React.Component {
    htmldoc = "";
    styleManager = new StyleManager(defaultTheme);

    componentWillMount() {
        this.styleManager.setGlobal(defaultReset, "@reset");
    }

    body() {
        return (
            <>
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

                    <style
                        dangerouslySetInnerHTML={{ __html: this.styleManager.getGlobal("@reset") }}
                    />
                    <style
                        dangerouslySetInnerHTML={{ __html: this.styleManager.getCss("@default") }}
                    />
                </Head>
                <Body>
                    <Newsletter></Newsletter>
                </Body>
            </>
        );
    }
    render() {
        return <Frame body={this.body()}></Frame>;
    }
}

export default App;
