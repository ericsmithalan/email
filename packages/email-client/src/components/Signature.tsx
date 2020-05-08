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
        fontSize: 15,
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
    return (
        <Table className={styles.classNames.signature}>
            <Tr>
                <Td>
                    <Div
                        className={styles.classNames.myDivOne}
                        style={{
                            fontSize: 200,
                        }}
                    >
                        Hello
                    </Div>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    <Div className={styles.classNames.myDivTwo}>Hello</Div>
                </Td>
            </Tr>
        </Table>
    );
};

const Signature = withCss(styles)(SignatureElement);

export { Signature };
