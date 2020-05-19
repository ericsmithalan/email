import React, { FC, useEffect } from "react";

import Frame from "./frame/Frame";
import { style } from "./lib/css-js/style";
import { StyleManager } from "./lib/css-js/StyleManager";
import { Body, Head, Style, Table, Td, Tr } from "./lib/primitives";
import { defaultTheme } from "./lib/theme/defaultTheme";
import { InjectableStyle } from "./types";

const styles = style({
    app: {
        backgroundColor: "red",
        "@tablet": {
            backgroundColor: "blue"
        },
        "@phone": {
            backgroundColor: "green"
        },
        ":hover": {
            backgroundColor: "orange"
        }
    }
});

interface AppProps {}
class App extends React.Component {
    htmldoc = "";
    styles: InjectableStyle[] = [];

    componentWillMount() {
        const styleManager = new StyleManager(defaultTheme);
    }

    head() {
        return (
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

                <title></title>

                {this.styles.map((style: InjectableStyle) => (
                    <Style id={style.id} key={style.target}>
                        {style.css}
                    </Style>
                ))}
            </Head>
        );
    }

    body() {
        return (
            <Body>
                <Table>
                    <Tr>
                        <Td>Hello world</Td>
                    </Tr>
                </Table>
            </Body>
        );
    }
    render() {
        return <Frame head={this.head()} body={this.body()}></Frame>;
    }
}

export default App;
