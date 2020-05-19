import React, { FC, useEffect } from "react";

import Document from "./Document";
import { style } from "./lib/css-js/style";
import { Table, Td, Tr } from "./lib/primitives";

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
    render() {
        return (
            <Document>
                <Table>
                    <Tr>
                        <Td>Hello world</Td>
                    </Tr>
                </Table>
            </Document>
        );
    }
}

export default App;
