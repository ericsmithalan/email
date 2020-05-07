import React from "react";
import { Div, Table, Tr, Td } from "@email/element";
import { withCss, css } from "@email/css/";

export type SignatureElementProps = {};

const styles = css({
    signature: {
        backgroundColor: "red",
        fontWeight: "bold",

        fontSize: 30,
        ":hover": {
            backgroundColor: "blue",
        },
    },
    myDivOne: {
        backgroundColor: "red",
        "@phone": {
            backgroundColor: "purple",
        },
        "@tablet": {
            backgroundColor: "orange",
        },
    },
    myDivTwo: {
        backgroundColor: "red",
        "@phone": {
            backgroundColor: "purple",
        },
        "@tablet": {
            backgroundColor: "orange",
        },
    },
});

const SignatureElement = (props: SignatureElementProps) => {
    const { signature, myDivOne, myDivTwo } = styles;

    return (
        <Table className={signature}>
            <Tr>
                <Td>
                    <Div className={myDivOne}>Hello</Div>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    <Div className={myDivTwo}>Hello</Div>
                </Td>
            </Tr>
        </Table>
    );
};

const Signature = withCss(styles)(SignatureElement);

export { Signature };
