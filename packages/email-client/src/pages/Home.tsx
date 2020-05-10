import React from "react";
import { Div, Text } from "@email/element";
import { Signature } from "../components/Signature";

class Home extends React.Component<{}, {}> {
    public render() {
        return (
            <Div>
                <Text>hello</Text>
                <Signature></Signature>
            </Div>
        );
    }
}

export default Home;
