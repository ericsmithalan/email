import React from "react";
import { hot } from "react-hot-loader/root";
import { Div, ThreeColLayout } from "@email/element/src";

function App(): JSX.Element {
    return (
        <ThreeColLayout>
            {{
                leftCol: "left",
                centerCol: "center",
                rightCol: "right",
            }}
        </ThreeColLayout>
    );
}

export default hot(App);
