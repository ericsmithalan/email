import React from "react";
import { hot } from "react-hot-loader/root";
import { Div, ThreeColLayout } from "@email/element/src";

function App(): JSX.Element {
    return (
        <ThreeColLayout maxWidth={900}>
            <Div>hello</Div>
        </ThreeColLayout>
    );
}

export default hot(App);
